// ============================================================
// إعدادات المشروع — عدّل هذا الملف فقط، ولا تعدّل باقي الملفات
// ============================================================

// من Supabase Dashboard → Project Settings → API
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';

// رابط تطبيق ويب (Google Apps Script) بعد نشره — راجع دليل التركيب
const DRIVE_UPLOAD_URL = 'https://script.google.com/macros/s/YOUR-DEPLOYMENT-ID/exec';

// رقم واتساب المنصة (بدون + وبدون مسافات)
const WHATSAPP_PHONE = '966500000000';

// بيانات الحساب البنكي المعروضة بعد إنشاء الطلب
const BANK_INFO = {
  bankName: 'اسم البنك',
  accountName: 'اسم صاحب الحساب',
  iban: 'SAxx xxxx xxxx xxxx xxxx xxxx',
};

// ============================================================
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const STATUS_LABELS = {
  awaiting_payment: 'بانتظار الدفع',
  payment_review: 'مراجعة عملية الدفع',
  paid: 'تم الدفع',
  designing: 'جاري تنفيذ التصميم',
  completed: 'مكتمل',
  cancelled: 'ملغي',
};

const STATUS_COLORS = {
  awaiting_payment: '#D8944A',
  payment_review: '#B94826',
  paid: '#2F6E68',
  designing: '#D85A30',
  completed: '#1F4E4A',
  cancelled: '#8A6A57',
};
