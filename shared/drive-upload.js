// تحويل ورفع ملف واحد إلى Google Drive عبر Apps Script، يرجع رابط الملف
async function uploadFileToDrive(file, orderNumber) {
  const compressed = file.type.startsWith('image/') ? await compressImage(file) : file;
  const base64Data = await fileToBase64(compressed);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);
  let res;
  try {
    res = await fetch(DRIVE_UPLOAD_URL, {
      method: 'POST',
      signal: controller.signal,
      body: JSON.stringify({
        orderNumber,
        fileName: file.name,
        mimeType: compressed.type || 'application/octet-stream',
        base64Data,
      }),
    });
  } catch (err) {
    if (err.name === 'AbortError') throw new Error('انتهت مهلة الرفع (30 ثانية) — تحقّق من اتصال الإنترنت وحاول مجدداً');
    throw new Error('تعذّر الوصول لخدمة رفع الملفات — تحقّق من رابط Apps Script وأنه منشور بصلاحية Anyone');
  } finally {
    clearTimeout(timeoutId);
  }
  const data = await res.json();
  if (!data.success) throw new Error(data.error || 'فشل رفع الملف');
  return data.url;
}

// تصغير الصور الكبيرة قبل الرفع (يحل مشاكل فشل الرفع بسبب حجم الصورة، ويسرّع الرفع كثيراً)
function compressImage(file, maxDimension = 1600, quality = 0.82) {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => { img.src = e.target.result; };
    reader.onerror = () => resolve(file); // فشل القراءة؟ استخدم الملف الأصلي كما هو
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDimension || height > maxDimension) {
        if (width > height) { height = Math.round(height * maxDimension / width); width = maxDimension; }
        else { width = Math.round(width * maxDimension / height); height = maxDimension; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        if (!blob) { resolve(file); return; }
        resolve(new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' }));
      }, 'image/jpeg', quality);
    };
    img.onerror = () => resolve(file); // فشل تحميل الصورة؟ استخدم الملف الأصلي كما هو
    reader.readAsDataURL(file);
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// يرفع عدة ملفات بالتوازي، يرجع مصفوفة روابط
async function uploadMultipleToDrive(files, orderNumber) {
  return Promise.all(Array.from(files).map(f => uploadFileToDrive(f, orderNumber)));
}
