// تحويل ورفع ملف واحد إلى Google Drive عبر Apps Script، يرجع رابط الملف
async function uploadFileToDrive(file, orderNumber) {
  const base64Data = await fileToBase64(file);
  const res = await fetch(DRIVE_UPLOAD_URL, {
    method: 'POST',
    body: JSON.stringify({
      orderNumber,
      fileName: file.name,
      mimeType: file.type || 'application/octet-stream',
      base64Data,
    }),
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.error || 'فشل رفع الملف');
  return data.url;
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
