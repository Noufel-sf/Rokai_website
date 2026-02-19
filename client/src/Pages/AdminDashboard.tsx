import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Search, Filter, Eye, X, CheckCircle2, Clock,
  XCircle, ChevronDown, User, GraduationCap, Compass,
  Heart, Building2, Star, Phone, Mail, MapPin, Calendar,
  Briefcase, Download, Trash2, Check, Instagram, Facebook,
  Smartphone, Globe, Image, Video, Camera, Pen, Mic, TrendingUp,
  UserCheck, UserX, RefreshCw,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Registration {
  id: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  fullName: string; birthDate: string; phone: string;
  address: string; email: string; currentStatus: string;
  specialization: string; universityName: string; academicYear: string;
  discoverySource: string; discoveryOther: string; favoriteActivity: string;
  contributionActivity: string; improvementIdea: string;
  hasVolunteered: boolean; volunteerDesc: string;
  participatedInOrganizing: boolean; organizationName: string; tasksDescription: string;
  skills: string[]; otherSkills: string; certifications: string;
  activityIdeas: string; mediaInterest: string; motivation: string;
  commitmentLevel: string; lifeBalance: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const MOCK_DATA: Registration[] = [
  {
    id: "REG-001", submittedAt: "2025-02-15T10:23:00", status: "pending",
    fullName: "أحمد بن علي", birthDate: "2001-04-12", phone: "0661234567",
    address: "شلغوم العيد، ميلة", email: "ahmed.benali@email.com", currentStatus: "student",
    specialization: "علوم الحاسوب", universityName: "جامعة ميلة", academicYear: "سنة ثانية ليسانس",
    discoverySource: "instagram", discoveryOther: "", favoriteActivity: "ورش التقنية والترميز",
    contributionActivity: "تطوير الموقع الإلكتروني للجمعية", improvementIdea: "إضافة منصة تعليمية أونلاين",
    hasVolunteered: true, volunteerDesc: "تطوعت في جمعية محلية لمدة سنة في مجال تعليم الأطفال",
    participatedInOrganizing: true, organizationName: "نادي الطلبة", tasksDescription: "تنظيم ورشات برمجة وإدارة التواصل الاجتماعي",
    skills: ["graphic_design", "writing"], otherSkills: "برمجة الويب",
    certifications: "شهادة Python من Coursera", activityIdeas: "دوري برمجة، مسابقة ابتكار",
    mediaInterest: "الكتابة الرقمية والنشر", motivation: "أريد المساهمة في تطوير مجتمعي الرقمي",
    commitmentLevel: "high", lifeBalance: "سأخصص أوقات الفراغ وعطل نهاية الأسبوع",
  },
  {
    id: "REG-002", submittedAt: "2025-02-16T14:05:00", status: "approved",
    fullName: "فاطمة زهراء حمزة", birthDate: "2000-08-22", phone: "0558765432",
    address: "قسنطينة", email: "fatima.hamza@email.com", currentStatus: "student",
    specialization: "الاتصال والإعلام", universityName: "جامعة قسنطينة 3", academicYear: "سنة أولى ماستر",
    discoverySource: "facebook", discoveryOther: "", favoriteActivity: "التغطية الإعلامية للفعاليات",
    contributionActivity: "محتوى إعلامي احترافي", improvementIdea: "إطلاق بودكاست شبابي",
    hasVolunteered: true, volunteerDesc: "عملت في تغطية مهرجانات ثقافية محلية",
    participatedInOrganizing: true, organizationName: "مجلس طلابي", tasksDescription: "مسؤولة الإعلام والعلاقات العامة",
    skills: ["photography", "video_editing", "writing"], otherSkills: "تصوير احترافي",
    certifications: "دبلوم صحافة إلكترونية", activityIdeas: "بودكاست، أفلام قصيرة توثيقية",
    mediaInterest: "الإعلام الرقمي والتوثيق البصري", motivation: "رؤية التغيير الحقيقي في المجتمع",
    commitmentLevel: "high", lifeBalance: "لدي جدول منظم وأستطيع التوفيق",
  },
  {
    id: "REG-003", submittedAt: "2025-02-17T09:11:00", status: "pending",
    fullName: "يوسف قاسمي", birthDate: "1999-11-05", phone: "0771234567",
    address: "ميلة", email: "youssef.kasmi@email.com", currentStatus: "employee",
    specialization: "إدارة الأعمال", universityName: "جامعة ميلة", academicYear: "تخرج",
    discoverySource: "tiktok", discoveryOther: "", favoriteActivity: "أنشطة التنمية الذاتية",
    contributionActivity: "برامج التطوير القيادي", improvementIdea: "مسابقات تجارية للشباب",
    hasVolunteered: false, volunteerDesc: "",
    participatedInOrganizing: false, organizationName: "", tasksDescription: "",
    skills: ["hosting", "writing"], otherSkills: "تسيير الفرق وإدارة المشاريع",
    certifications: "شهادة PMP أساسيات", activityIdeas: "لقاءات ريادة الأعمال",
    mediaInterest: "لا", motivation: "دعم الشباب على بناء مستقبلهم المهني",
    commitmentLevel: "medium", lifeBalance: "عملي منتظم والوقت الحر كافٍ للمشاركة",
  },
  {
    id: "REG-004", submittedAt: "2025-02-18T16:45:00", status: "rejected",
    fullName: "نور الدين بلقاسم", birthDate: "2003-02-14", phone: "0661112233",
    address: "جيجل", email: "noureddine@email.com", currentStatus: "student",
    specialization: "فنون جميلة", universityName: "جامعة جيجل", academicYear: "سنة ثالثة ليسانس",
    discoverySource: "other", discoveryOther: "صديق أخبرني", favoriteActivity: "الفعاليات الفنية والإبداعية",
    contributionActivity: "تصميم المطبوعات والهوية البصرية", improvementIdea: "معرض فني سنوي",
    hasVolunteered: false, volunteerDesc: "",
    participatedInOrganizing: true, organizationName: "نادي الفنون", tasksDescription: "تصميم الملصقات والمواد الدعائية",
    skills: ["graphic_design", "photography"], otherSkills: "رسم رقمي",
    certifications: "", activityIdeas: "معرض فني، ورش رسم للأطفال",
    mediaInterest: "التصوير الفوتوغرافي", motivation: "توظيف الفن لخدمة المجتمع",
    commitmentLevel: "medium", lifeBalance: "سأحدد أولوياتي بعناية",
  },
  {
    id: "REG-005", submittedAt: "2025-02-19T11:20:00", status: "pending",
    fullName: "أميرة بن سعيد", birthDate: "2001-06-30", phone: "0558889900",
    address: "سكيكدة", email: "amira.bensaid@email.com", currentStatus: "student",
    specialization: "علم النفس", universityName: "جامعة سكيكدة", academicYear: "سنة ثانية ماستر",
    discoverySource: "instagram", discoveryOther: "", favoriteActivity: "الأنشطة الاجتماعية ودعم الأطفال",
    contributionActivity: "برامج الصحة النفسية للشباب", improvementIdea: "خط دعم نفسي للطلبة",
    hasVolunteered: true, volunteerDesc: "عملت مع دور الأيتام لمدة سنتين",
    participatedInOrganizing: false, organizationName: "", tasksDescription: "",
    skills: ["writing", "hosting"], otherSkills: "الإرشاد والتوجيه",
    certifications: "دورة التوجيه النفسي الأول", activityIdeas: "جلسات توعية، ورش إرشاد",
    mediaInterest: "الكتابة التوعوية", motivation: "المساهمة في دعم الصحة النفسية للشباب الجزائري",
    commitmentLevel: "high", lifeBalance: "مرنة في التنظيم ومستعدة للتكيف",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  pending:  { label: "قيد المراجعة", color: "bg-amber-100 text-amber-700 border-amber-200",  dot: "bg-amber-500",  icon: Clock },
  approved: { label: "مقبول",        color: "bg-emerald-100 text-emerald-700 border-emerald-200", dot: "bg-emerald-500", icon: CheckCircle2 },
  rejected: { label: "مرفوض",        color: "bg-red-100 text-red-600 border-red-200",        dot: "bg-red-500",    icon: XCircle },
};

const STATUS_LABELS: Record<string, string> = {
  student: "طالب جامعي", employee: "موظف / صاحب عمل", unemployed: "عاطل عن العمل",
};
const DISCOVERY_LABELS: Record<string, string> = {
  instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", other: "أخرى",
};
const COMMITMENT_LABELS: Record<string, string> = {
  low: "خفيف", medium: "متوسط", high: "مرتفع",
};
const SKILL_LABELS: Record<string, string> = {
  graphic_design: "تصميم غرافيكي", video_editing: "مونتاج فيديو",
  photography: "تصوير", writing: "كتابة", hosting: "تنشيط",
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ar-DZ", { year: "numeric", month: "long", day: "numeric" });
const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("ar-DZ", { hour: "2-digit", minute: "2-digit" });



// ─── Detail Section ───────────────────────────────────────────────────────────
function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon size={15} className="text-primary" />
        </div>
        <span className="font-bold text-slate-700 text-sm">{title}</span>
      </div>
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string | boolean | null }) {
  if (!value && value !== false) return null;
  const display = typeof value === "boolean" ? (value ? "نعم" : "لا") : value;
  return (
    <div className="grid grid-cols-[140px_1fr] gap-2 mb-2">
      <span className="text-xs text-slate-400 font-semibold pt-0.5">{label}</span>
      <span className="text-sm text-slate-700 leading-relaxed">{display}</span>
    </div>
  );
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────
function DetailModal({
  reg, onClose, onStatusChange,
}: { reg: Registration; onClose: () => void; onStatusChange: (id: string, status: Registration["status"]) => void }) {
  const cfg = STATUS_CONFIG[reg.status];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-xl h-full bg-white shadow-2xl flex flex-col overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-gradient-to-l from-primary to-third p-6 text-white shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-white/20 rounded-full px-3 py-0.5 font-mono">{reg.id}</span>
                <span className={`text-xs rounded-full px-3 py-0.5 font-bold border ${cfg.color}`}>{cfg.label}</span>
              </div>
              <h2 className="text-2xl font-black">{reg.fullName}</h2>
              <p className="text-white/70 text-sm mt-0.5">{reg.email}</p>
            </div>
            <button onClick={onClose} className="w-9 h-9 cursor-pointer rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors shrink-0">
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white/15 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
              <Calendar size={12} /> {fmtDate(reg.submittedAt)} — {fmtTime(reg.submittedAt)}
            </span>
            <span className="bg-white/15 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
              <Briefcase size={12} /> {STATUS_LABELS[reg.currentStatus]}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 px-5 py-3 bg-slate-50 border-b border-slate-100 shrink-0">
          <button
            onClick={() => onStatusChange(reg.id, "approved")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer
              ${reg.status === "approved" ? "bg-emerald-500 text-white" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`}
          >
            <UserCheck size={14} /> قبول
          </button>
          <button
            onClick={() => onStatusChange(reg.id, "rejected")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer
              ${reg.status === "rejected" ? "bg-red-500 text-white" : "bg-red-50 text-red-600 hover:bg-red-100"}`}
          >
            <UserX size={14} /> رفض
          </button>
          <button
            onClick={() => onStatusChange(reg.id, "pending")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-amber-50 text-amber-600 hover:bg-amber-100 transition-all cursor-pointer"
          >
            <RefreshCw size={14} /> مراجعة
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-5">

          <Section icon={User} title="المعلومات الشخصية">
            <InfoRow label="الاسم الكامل"    value={reg.fullName} />
            <InfoRow label="تاريخ الميلاد"   value={reg.birthDate ? fmtDate(reg.birthDate) : undefined} />
            <InfoRow label="الهاتف"           value={reg.phone} />
            <InfoRow label="البريد الإلكتروني" value={reg.email} />
            <InfoRow label="العنوان"          value={reg.address} />
            <InfoRow label="الوضع الحالي"     value={STATUS_LABELS[reg.currentStatus]} />
          </Section>

          <Section icon={GraduationCap} title="التعليم">
            <InfoRow label="الجامعة"         value={reg.universityName} />
            <InfoRow label="التخصص"          value={reg.specialization} />
            <InfoRow label="السنة الدراسية"  value={reg.academicYear} />
          </Section>

          <Section icon={Compass} title="الاكتشاف والاهتمامات">
            <InfoRow label="مصدر المعرفة"    value={DISCOVERY_LABELS[reg.discoverySource] || reg.discoveryOther} />
            <InfoRow label="النشاط المفضل"   value={reg.favoriteActivity} />
            <InfoRow label="مجال المساهمة"   value={reg.contributionActivity} />
            <InfoRow label="اقتراح للتحسين"  value={reg.improvementIdea} />
          </Section>

          <Section icon={Heart} title="التطوع">
            <InfoRow label="تطوع سابق" value={reg.hasVolunteered} />
            {reg.hasVolunteered && <InfoRow label="تفاصيل التطوع" value={reg.volunteerDesc} />}
          </Section>

          <Section icon={Building2} title="تجربة التنظيم">
            <InfoRow label="شارك في تنظيم" value={reg.participatedInOrganizing} />
            {reg.participatedInOrganizing && (
              <>
                <InfoRow label="اسم الجهة"    value={reg.organizationName} />
                <InfoRow label="المهام"        value={reg.tasksDescription} />
              </>
            )}
          </Section>

          <Section icon={Star} title="المهارات والدوافع">
            {reg.skills.length > 0 && (
              <div className="mb-3">
                <span className="text-xs text-slate-400 font-semibold block mb-1.5">المهارات</span>
                <div className="flex flex-wrap gap-1.5">
                  {reg.skills.map(s => (
                    <span key={s} className="text-xs bg-secondary/10 text-amber-800 border border-secondary/20 rounded-full px-3 py-1 font-semibold">
                      {SKILL_LABELS[s]}
                    </span>
                  ))}
                  {reg.otherSkills && (
                    <span className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1 font-semibold">
                      {reg.otherSkills}
                    </span>
                  )}
                </div>
              </div>
            )}
            <InfoRow label="الشهادات"        value={reg.certifications} />
            <InfoRow label="أفكار نشاطات"    value={reg.activityIdeas} />
            <InfoRow label="اهتمام إعلامي"   value={reg.mediaInterest} />
            <InfoRow label="الدوافع"         value={reg.motivation} />
            <InfoRow label="مستوى الالتزام"  value={COMMITMENT_LABELS[reg.commitmentLevel]} />
            <InfoRow label="التوازن الدراسي" value={reg.lifeBalance} />
          </Section>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>(MOCK_DATA);
  const [selected, setSelected] = useState<Registration | null>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | Registration["status"]>("all");
  const [sortBy, setSortBy] = useState<"date" | "name">("date");

  const stats = useMemo(() => ({
    total:    registrations.length,
    pending:  registrations.filter(r => r.status === "pending").length,
    approved: registrations.filter(r => r.status === "approved").length,
    rejected: registrations.filter(r => r.status === "rejected").length,
  }), [registrations]);

  const filtered = useMemo(() => {
    let list = [...registrations];
    if (filterStatus !== "all") list = list.filter(r => r.status === filterStatus);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(r =>
        r.fullName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.phone.includes(q) ||
        r.universityName.toLowerCase().includes(q)
      );
    }
    list.sort((a, b) =>
      sortBy === "date"
        ? new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
        : a.fullName.localeCompare(b.fullName, "ar")
    );
    return list;
  }, [registrations, filterStatus, search, sortBy]);

  const handleStatusChange = (id: string, status: Registration["status"]) => {
    setRegistrations(rs => rs.map(r => r.id === id ? { ...r, status } : r));
    setSelected(s => s?.id === id ? { ...s, status } : s);
  };

  return (
    <div className="min-h-screen py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-2xl lg:text-3xl font-black text-slate-800">لوحة الإدارة</h1>
            <p className="text-slate-500 text-sm mt-0.5">إدارة ومراجعة طلبات التسجيل</p>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-xl px-4 py-2">
            <img src="/rokailogo.svg" className="w-7" alt="" onError={e => (e.target as HTMLImageElement).style.display = "none"} />
            <span className="font-bold text-sm hidden sm:block">رُقي للشباب</span>
          </div>
        </motion.div>

       
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4 flex flex-wrap gap-3 items-center"
        >
          {/* Search */}
          <div className="flex-1 min-w-[200px] relative">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="البحث بالاسم، البريد، الهاتف..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pr-9 pl-4 py-2.5 rounded-xl border-2 border-slate-200 bg-slate-50
                text-sm text-slate-700 outline-none focus:border-primary focus:bg-white transition-all"
            />
          </div>

          {/* Status filter */}
          <div className="flex gap-1.5">
            {(["all", "pending", "approved", "rejected"] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-2 rounded-xl cursor-pointer text-xs font-bold transition-all border
                  ${filterStatus === s
                    ? s === "all" ? "bg-primary text-white border-primary"
                      : s === "pending" ? "bg-amber-500 text-white border-amber-500"
                      : s === "approved" ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-red-500 text-white border-red-500"
                    : "bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300"
                  }`}
              >
                {s === "all" ? "الكل" : STATUS_CONFIG[s].label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as "date" | "name")}
            className="px-3 py-2.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 outline-none cursor-pointer"
          >
            <option value="date">ترتيب: الأحدث</option>
            <option value="name">ترتيب: الاسم</option>
          </select>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-5 py-3 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wide">
            <span>المتقدم</span>
            <span className="hidden md:block">الجامعة</span>
            <span className="hidden lg:block">تاريخ التقديم</span>
            <span>الحالة</span>
            <span>تفاصيل</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-sm">
              لا توجد نتائج مطابقة للبحث
            </div>
          ) : (
            <AnimatePresence>
              {filtered.map((reg, i) => {
                const cfg = STATUS_CONFIG[reg.status];
                const StatusIcon = cfg.icon;
                return (
                  <motion.div
                    key={reg.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-4 px-5 py-4 border-b border-slate-50
                      hover:bg-slate-50/70 transition-colors items-center group"
                  >
                    {/* Name + email */}
                    <div className="min-w-0">
                      <div className="font-bold text-slate-800 text-sm truncate">{reg.fullName}</div>
                      <div className="text-xs text-slate-400 truncate">{reg.email}</div>
                    </div>

                    {/* University */}
                    <div className="hidden md:block text-xs text-slate-500 max-w-[150px] truncate">
                      {reg.universityName}
                    </div>

                    {/* Date */}
                    <div className="hidden lg:block text-xs text-slate-400 whitespace-nowrap">
                      {fmtDate(reg.submittedAt)}
                    </div>

                    {/* Status badge */}
                    <div>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-2.5 py-1 border ${cfg.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        <span className="hidden sm:inline">{cfg.label}</span>
                      </span>
                    </div>

                    {/* View button */}
                    <button
                      onClick={() => setSelected(reg)}
                      className="w-9 h-9 rounded-xl bg-primary/10 cursor-pointer text-primary flex items-center justify-center
                        hover:bg-primary hover:text-white transition-all duration-200 shrink-0"
                    >
                      <Eye size={15} />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}

          {/* Footer */}
          <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
            <span>عرض {filtered.length} من {registrations.length} طلب</span>
            <span className="font-mono">{new Date().toLocaleDateString("ar-DZ")}</span>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <DetailModal
            reg={selected}
            onClose={() => setSelected(null)}
            onStatusChange={handleStatusChange}
          />
        )}
      </AnimatePresence>
    </div>
  );
}