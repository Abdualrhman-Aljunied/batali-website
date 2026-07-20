// ============================================================
// إعدادات المشروع — عدّل هذا الملف فقط، ولا تعدّل باقي الملفات
// ============================================================

// من Supabase Dashboard → Project Settings → API
const SUPABASE_URL = 'https://lnrmqzgzxnxwjkoqhhuu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxucm1xemd6eG54d2prb3FoaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTg4NzIsImV4cCI6MjA5OTc3NDg3Mn0.iSFmreS-FdIZjoQaobv3ZodB-c16ZXKQ_QXVGdcZeqQ';

// رابط تطبيق ويب (Google Apps Script) بعد نشره — راجع دليل التركيب
const DRIVE_UPLOAD_URL = 'https://script.google.com/macros/s/YOUR-DEPLOYMENT-ID/exec';

// رقم واتساب المنصة (بدون + وبدون مسافات)
const WHATSAPP_PHONE = '966500000000';

// حسابات التحويل البنكي المعروضة بعد إنشاء الطلب (عدّل الاسم ورقم الحساب لكل واحد)
const BANKS = [
  { name: 'العمقي للصرافة', accountName: 'عبدالرحمن منير صالح الجنيد', accountNumber: '254169670', color: '#1a9a6a', logo: './images/amaqi.png' },
  { name: 'البسيري للصرافة', accountName: 'عبدالرحمن منير صالح الجنيد', accountNumber: 'رقم الحساب هنا', color: '#2A6FB0', logo: 'images/bank-bassiri.png' },
];

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
