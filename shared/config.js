// ============================================================
// إعدادات المشروع — عدّل هذا الملف فقط، ولا تعدّل باقي الملفات
// ============================================================

// من Supabase Dashboard → Project Settings → API
const SUPABASE_URL = 'https://lnrmqzgzxnxwjkoqhhuu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxucm1xemd6eG54d2prb3FoaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTg4NzIsImV4cCI6MjA5OTc3NDg3Mn0.iSFmreS-FdIZjoQaobv3ZodB-c16ZXKQ_QXVGdcZeqQ';

// رابط تطبيق ويب (Google Apps Script) بعد نشره — راجع دليل التركيب
const DRIVE_UPLOAD_URL = 'https://script.google.com/macros/s/AKfycbwOH1-dviuvEECcgfAKgKEVz-Lc71iHGHwW6kKKomJpGWkv3z12RswOBAN6ZD9jHVHo/exec';

// رقم واتساب المنصة (بدون + وبدون مسافات)
const WHATSAPP_PHONE = '967778732472';

// حسابات التحويل البنكي المعروضة بعد إنشاء الطلب (عدّل الاسم ورقم الحساب لكل واحد)
const BANKS = [
  { name: 'العمقي للصرافة', accountName: 'عبدالرحمن منير صالح الجنيد', accountNumber: '254169670', color: '#1a9a6a', logo: './images/bank-amaqi.png' },
  { name: 'البسيري للصرافة', accountName: 'عبدالرحمن منير صالح الجنيد', accountNumber: '23257868', color: '#2A6FB0', logo: './images/bank-bassir.png' },
  { name: 'بنك الكريمي', accountName: 'عبدالرحمن منير صالح الجنيد', accountNumber: '484654654', color: '#7039b6', logo: './images/k3.png' },
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
