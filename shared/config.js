// ============================================================
// إعدادات المشروع — عدّل هذا الملف فقط، ولا تعدّل باقي الملفات
// ============================================================

// من Supabase Dashboard → Project Settings → API
const SUPABASE_URL = 'https://lnrmqzgzxnxwjkoqhhuu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxucm1xemd6eG54d2prb3FoaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTg4NzIsImV4cCI6MjA5OTc3NDg3Mn0.iSFmreS-FdIZjoQaobv3ZodB-c16ZXKQ_QXVGdcZeqQ';

// رابط تطبيق ويب (Google Apps Script) بعد نشره — راجع دليل التركيب
const DRIVE_UPLOAD_URL = 'https://script.google.com/macros/s/AKfycbzAD21lMHrvJ4UBubZDEEIyCCeES3-OsI9aBwBl6KrFlufnBKfRKUIaA_P88G9hUBPU/exec';

// رقم واتساب المنصة (بدون + وبدون مسافات)
const WHATSAPP_PHONE = '967778369862';

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
  paid: 'تم الدفع',
  designing: 'جاري التصميم',
  awaiting_client_approval: 'بانتظار اعتماد العميل',
  ready_to_print: 'جاهز للطباعة',
  printing: 'تحت الطباعة',
  shipped: 'تم الشحن',
  completed: 'مكتمل',
  cancelled: 'ملغي',
};

const STATUS_COLORS = {
  awaiting_payment: '#D8944A',
  paid: '#2F6E68',
  designing: '#D85A30',
  awaiting_client_approval: '#B94826',
  ready_to_print: '#3F8E86',
  printing: '#8A6A57',
  shipped: '#2F6E68',
  completed: '#1F4E4A',
  cancelled: '#8A6A57',
};
