import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, GraduationCap, Compass, Heart, Building2, Star,
  ChevronLeft, ChevronRight, Check, Camera, Video, Pen,
  Mic, Image, CheckSquare, Square, Instagram, Facebook,
  Smartphone, Globe,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormState {
  fullName: string; birthDate: string; phone: string;
  address: string; email: string; currentStatus: string;
  specialization: string; universityName: string; academicYear: string;
  discoverySource: string; discoveryOther: string; favoriteActivity: string;
  contributionActivity: string; improvementIdea: string;
  hasVolunteered: boolean | null; volunteerDesc: string;
  participatedInOrganizing: boolean | null; organizationName: string; tasksDescription: string;
  skills: string[]; otherSkills: string; certifications: string;
  activityIdeas: string; mediaInterest: string; motivation: string;
  commitmentLevel: string; lifeBalance: string;
}

interface StepProps { form: FormState; set: (k: keyof FormState, v: any) => void; errors: Record<string, string>; }
interface SkillStepProps extends StepProps { toggleSkill: (id: string) => void; }

// ─── Step metadata ────────────────────────────────────────────────────────────
const STEPS = [
  { label: "المعلومات الشخصية", icon: User },
  { label: "التعليم",            icon: GraduationCap },
  { label: "الاهتمامات",         icon: Compass },
  { label: "التطوع",             icon: Heart },
  { label: "تجربة التنظيم",      icon: Building2 },
  { label: "المهارات والدوافع",  icon: Star },
];

const SKILLS = [
  { id: "graphic_design", label: "تصميم غرافيكي", Icon: Image },
  { id: "video_editing",  label: "مونتاج فيديو",  Icon: Video },
  { id: "photography",    label: "تصوير",          Icon: Camera },
  { id: "writing",        label: "كتابة",           Icon: Pen },
  { id: "hosting",        label: "تنشيط",          Icon: Mic },
];

// ─── Shared UI atoms ──────────────────────────────────────────────────────────
function Field({
  label, required, error, children,
}: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {required && <span className="text-red-500 ml-1">*</span>}
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

const inputClass = (hasError?: boolean) =>
  `w-full px-4 py-3 rounded-2xl border-2 font-['Cairo'] text-sm text-slate-800 bg-slate-50
   outline-none transition-all duration-200 resize-vertical
   focus:bg-white focus:border-primary focus:shadow-[0_0_0_4px_rgba(var(--color-primary),.12)]
   ${hasError ? "border-red-400" : "border-slate-200"}`;

function RadioGroup({
  options, value, onChange,
}: { options: { value: string; label: string; icon?: React.ElementType }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2.5 mt-1">
      {options.map((opt) => {
        const Icon = opt.icon;
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 min-w-[130px] flex items-center gap-2 px-4 py-3 rounded-2xl border-2 cursor-pointer
              text-sm font-semibold transition-all duration-200 select-none
              ${selected
                ? "border-primary bg-primary/10 text-primary"
                : "border-slate-200 bg-slate-50 text-slate-600 hover:border-third hover:bg-primary/5"
              }`}
          >
            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
              ${selected ? "border-primary bg-primary" : "border-slate-300"}`}>
              {selected && <span className="w-2 h-2 rounded-full bg-white block" />}
            </span>
            {Icon && <Icon size={15} />}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function YesNo({ value, onChange }: { value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div className="flex gap-3 mt-1">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`flex-1 py-3 rounded-2xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer
          ${value === true ? "border-primary bg-primary/10 text-primary" : "border-slate-200 bg-slate-50 text-slate-600 hover:border-primary/50"}`}
      >
        ✓ نعم
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`flex-1 py-3 rounded-2xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer
          ${value === false ? "border-red-400 bg-red-50 text-red-600" : "border-slate-200 bg-slate-50 text-slate-600 hover:border-red-300"}`}
      >
        ✗ لا
      </button>
    </div>
  );
}

function StepTitle({ icon: Icon, title, sub }: { icon: React.ElementType; title: string; sub: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2.5 text-xl font-extrabold text-slate-800 mb-1">
        <Icon size={22} className="text-primary" />
        {title}
      </div>
      <p className="text-sm text-slate-500">{sub}</p>
    </div>
  );
}

// ─── Steps ────────────────────────────────────────────────────────────────────
function Step0({ form, set, errors }: StepProps) {
  const statusOptions = [
    { value: "student",    label: "طالب جامعي" },
    { value: "employee",   label: "موظف / صاحب عمل" },
    { value: "unemployed", label: "عاطل عن العمل" },
  ];
  return (
    <>
      <StepTitle icon={User} title="المعلومات الشخصية" sub="أخبرنا عن نفسك — الحقول المعلّمة بـ * إلزامية" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="الاسم واللقب" required error={errors.fullName}>
          <input type="text" placeholder="مثال: أحمد بن علي" value={form.fullName}
            onChange={e => set("fullName", e.target.value)} className={inputClass(!!errors.fullName)} />
        </Field>
        <Field label="تاريخ الميلاد">
          <input type="date" value={form.birthDate}
            onChange={e => set("birthDate", e.target.value)} className={inputClass()} />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="رقم الهاتف" required error={errors.phone}>
          <input type="tel" placeholder="06XX XX XX XX" value={form.phone}
            onChange={e => set("phone", e.target.value)} className={inputClass(!!errors.phone)} />
        </Field>
        <Field label="البريد الإلكتروني" required error={errors.email}>
          <input type="email" placeholder="example@email.com" value={form.email}
            onChange={e => set("email", e.target.value)} className={inputClass(!!errors.email)} />
        </Field>
      </div>
      <Field label="عنوان الإقامة">
        <input type="text" placeholder="الولاية، البلدية" value={form.address}
          onChange={e => set("address", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="ما هو وضعك الحالي؟" required error={errors.currentStatus}>
        <RadioGroup options={statusOptions} value={form.currentStatus} onChange={v => set("currentStatus", v)} />
      </Field>
    </>
  );
}

function Step1({ form, set, errors }: StepProps) {
  return (
    <>
      <StepTitle icon={GraduationCap} title="التعليم والتخصص" sub="شاركنا مسيرتك الأكاديمية" />
      <Field label="اسم الجامعة أو المؤسسة التعليمية" required error={errors.universityName}>
        <input type="text" placeholder="مثال: جامعة ميلة" value={form.universityName}
          onChange={e => set("universityName", e.target.value)} className={inputClass(!!errors.universityName)} />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="التخصص الجامعي">
          <input type="text" placeholder="مثال: علوم الحاسوب" value={form.specialization}
            onChange={e => set("specialization", e.target.value)} className={inputClass()} />
        </Field>
        <Field label="السنة الدراسية">
          <input type="text" placeholder="مثال: سنة أولى ماستر" value={form.academicYear}
            onChange={e => set("academicYear", e.target.value)} className={inputClass()} />
        </Field>
      </div>
    </>
  );
}

function Step2({ form, set, errors }: StepProps) {
  const sources = [
    { value: "instagram", label: "Instagram", icon: Instagram },
    { value: "facebook",  label: "Facebook",  icon: Facebook },
    { value: "tiktok",    label: "TikTok",    icon: Smartphone },
    { value: "other",     label: "أخرى",      icon: Globe },
  ];
  return (
    <>
      <StepTitle icon={Compass} title="كيف اكتشفتنا؟" sub="أخبرنا عن اهتماماتك وكيف وصلت إلينا" />
      <Field label="كيف تعرّفت على الجمعية؟" required error={errors.discoverySource}>
        <RadioGroup options={sources} value={form.discoverySource} onChange={v => set("discoverySource", v)} />
      </Field>
      <AnimatePresence>
        {form.discoverySource === "other" && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <Field label="اذكر المصدر">
              <input type="text" placeholder="من أين سمعت عنا؟" value={form.discoveryOther}
                onChange={e => set("discoveryOther", e.target.value)} className={inputClass()} />
            </Field>
          </motion.div>
        )}
      </AnimatePresence>
      <Field label="ما هو النشاط الذي لفت انتباهك في الجمعية؟">
        <textarea rows={2} placeholder="اذكر النشاط..." value={form.favoriteActivity}
          onChange={e => set("favoriteActivity", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="ما النشاط الذي يمكنك المساهمة في تطويره؟">
        <textarea rows={2} placeholder="أخبرنا..." value={form.contributionActivity}
          onChange={e => set("contributionActivity", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="ما الفكرة التي تقترحها لتحسينه؟">
        <textarea rows={2} placeholder="اقتراحاتك تهمنا..." value={form.improvementIdea}
          onChange={e => set("improvementIdea", e.target.value)} className={inputClass()} />
      </Field>
    </>
  );
}

function Step3({ form, set, errors }: StepProps) {
  return (
    <>
      <StepTitle icon={Heart} title="تجربة العمل التطوعي" sub="أخبرنا عن مشاركتك التطوعية السابقة" />
      <Field label="هل سبق لك المشاركة في عمل تطوعي؟" required error={errors.hasVolunteered}>
        <YesNo value={form.hasVolunteered} onChange={v => set("hasVolunteered", v)} />
      </Field>
      <AnimatePresence>
        {form.hasVolunteered === true && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <Field label="صف لنا تجربتك التطوعية باختصار">
              <textarea rows={3} placeholder="ما الذي قمت به؟ وأين؟" value={form.volunteerDesc}
                onChange={e => set("volunteerDesc", e.target.value)} className={inputClass()} />
            </Field>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {form.hasVolunteered === false && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-2 rounded-2xl p-4 bg-primary/10 border border-primary/30">
            <p className="text-primary font-bold text-sm">
              💡 لا بأس! الجمعية مفتوحة للجميع سواء كانت لديك تجربة سابقة أم لا.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Step4({ form, set, errors }: StepProps) {
  return (
    <>
      <StepTitle icon={Building2} title="تجربة التنظيم" sub="هل شاركت في تنظيم نشاط أو فعالية من قبل؟" />
      <Field label="هل شاركت في تنظيم نشاط معين؟" required error={errors.participatedInOrganizing}>
        <YesNo value={form.participatedInOrganizing} onChange={v => set("participatedInOrganizing", v)} />
      </Field>
      <AnimatePresence>
        {form.participatedInOrganizing === true && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <Field label="اسم الجمعية أو النادي">
              <input type="text" placeholder="ما اسم الجهة؟" value={form.organizationName}
                onChange={e => set("organizationName", e.target.value)} className={inputClass()} />
            </Field>
            <Field label="شاركنا مهامك وتجربتك في التنظيم">
              <textarea rows={3} placeholder="ما الذي قمت به وما الدروس المستفادة؟" value={form.tasksDescription}
                onChange={e => set("tasksDescription", e.target.value)} className={inputClass()} />
            </Field>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Step5({ form, set, toggleSkill }: SkillStepProps) {
  return (
    <>
      <StepTitle icon={Star} title="المهارات والدوافع" sub="أخبرنا عن مواهبك وما الذي يحفّزك" />
      <Field label="مهاراتك (اختر ما ينطبق عليك)">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-1">
          {SKILLS.map(({ id, label, Icon }) => {
            const checked = form.skills.includes(id);
            return (
              <button
                key={id} type="button" onClick={() => toggleSkill(id)}
                className={`flex items-center gap-2 px-3 py-3 rounded-2xl border-2 text-sm font-semibold
                  cursor-pointer transition-all duration-200 select-none
                  ${checked
                    ? "border-secondary bg-secondary/10 text-amber-800"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-secondary/50 hover:bg-secondary/5"
                  }`}
              >
                <Icon size={15} className={checked ? "text-secondary" : "text-slate-400"} />
                {checked
                  ? <CheckSquare size={15} className="text-secondary ml-auto" />
                  : <Square size={15} className="text-slate-300 ml-auto" />
                }
                {label}
              </button>
            );
          })}
        </div>
      </Field>
      <Field label="مهارات أخرى">
        <input type="text" placeholder="مثال: البرمجة، الترجمة..." value={form.otherSkills}
          onChange={e => set("otherSkills", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="هل لديك شهادات أو تكوينات؟">
        <textarea rows={2} placeholder="اذكر الشهادات أو الدورات..." value={form.certifications}
          onChange={e => set("certifications", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="أفكار لأنشطة تريد تنظيمها">
        <textarea rows={2} placeholder="شاركنا أفكارك..." value={form.activityIdeas}
          onChange={e => set("activityIdeas", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="هل لديك اهتمام بالإعلام؟">
        <input type="text" placeholder="مثال: التصوير، الكتابة، النشر الرقمي..." value={form.mediaInterest}
          onChange={e => set("mediaInterest", e.target.value)} className={inputClass()} />
      </Field>
      <Field label="ما هي دوافعك للانضمام إلى رُقي للشباب؟">
        <textarea rows={3} placeholder="لماذا تريد الانضمام إلينا؟" value={form.motivation}
          onChange={e => set("motivation", e.target.value)} className={inputClass()} />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="مستوى التزامك المتوقع">
          <select value={form.commitmentLevel} onChange={e => set("commitmentLevel", e.target.value)} className={inputClass()}>
            <option value="">اختر...</option>
            <option value="low">خفيف (نشاط أو اثنان في الشهر)</option>
            <option value="medium">متوسط (أسبوعياً)</option>
            <option value="high">مرتفع (عدة مرات أسبوعياً)</option>
          </select>
        </Field>
        <Field label="كيف ستوازن بين الجمعية والدراسة؟">
          <textarea rows={2} placeholder="استراتيجيتك..." value={form.lifeBalance}
            onChange={e => set("lifeBalance", e.target.value)} className={inputClass()} />
        </Field>
      </div>
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const INITIAL_FORM: FormState = {
  fullName: "", birthDate: "", phone: "", address: "", email: "", currentStatus: "",
  specialization: "", universityName: "", academicYear: "",
  discoverySource: "", discoveryOther: "", favoriteActivity: "", contributionActivity: "", improvementIdea: "",
  hasVolunteered: null, volunteerDesc: "",
  participatedInOrganizing: null, organizationName: "", tasksDescription: "",
  skills: [], otherSkills: "", certifications: "", activityIdeas: "",
  mediaInterest: "", motivation: "", commitmentLevel: "", lifeBalance: "",
};

export default function RegistrationPage() {
  const [step, setStep]     = useState(0);
  const [done, setDone]     = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [direction, setDir] = useState(1);
  const [form, setForm]     = useState<FormState>(INITIAL_FORM);

  const set = (k: keyof FormState, v: any) => setForm(f => ({ ...f, [k]: v }));

  const toggleSkill = (id: string) =>
    setForm(f => ({
      ...f,
      skills: f.skills.includes(id) ? f.skills.filter(s => s !== id) : [...f.skills, id],
    }));

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0) {
      if (!form.fullName.trim())    e.fullName    = "الاسم واللقب مطلوب";
      if (!form.phone.trim())       e.phone       = "رقم الهاتف مطلوب";
      if (!form.email.trim())       e.email       = "البريد الإلكتروني مطلوب";
      else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "البريد الإلكتروني غير صحيح";
      if (!form.currentStatus)      e.currentStatus = "يرجى اختيار الوضع الحالي";
    }
    if (step === 1 && !form.universityName.trim())
      e.universityName = "اسم الجامعة مطلوب";
    if (step === 2 && !form.discoverySource)
      e.discoverySource = "يرجى اختيار مصدر المعرفة";
    if (step === 3 && form.hasVolunteered === null)
      e.hasVolunteered = "يرجى الإجابة على هذا السؤال";
    if (step === 4 && form.participatedInOrganizing === null)
      e.participatedInOrganizing = "يرجى الإجابة على هذا السؤال";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step === STEPS.length - 1) { setDone(true); return; }
    setDir(1); setStep(s => s + 1); setErrors({});
  };
  const prev = () => { setDir(-1); setStep(s => s - 1); setErrors({}); };

  const progress = ((step + 1) / STEPS.length) * 100;

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 pb-20" dir="rtl">
      <div className="w-full max-w-2xl relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <img src="/rokailogo.svg" className="w-20 mx-auto mb-4 drop-shadow-md"
            alt="Rokai" onError={(e) => ((e.target as HTMLImageElement).style.display = "none")} />
          <h1 className="text-3xl lg:text-4xl font-black text-primary">سجّل في جمعية رُقي للشباب</h1>
          <p className="text-slate-500 mt-2 text-sm">انضم إلى مجتمعنا وكن جزءاً من التغيير الإيجابي</p>
        </div>

        {!done ? (
          <>
          
            {/* Progress bar */}
            <div className="mb-5">
              <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-secondary duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1.5 text-left">
                الخطوة {step + 1} من {STEPS.length} — {STEPS[step].label}
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-lg border border-slate-100">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  {step === 0 && <Step0 form={form} set={set} errors={errors} />}
                  {step === 1 && <Step1 form={form} set={set} errors={errors} />}
                  {step === 2 && <Step2 form={form} set={set} errors={errors} />}
                  {step === 3 && <Step3 form={form} set={set} errors={errors} />}
                  {step === 4 && <Step4 form={form} set={set} errors={errors} />}
                  {step === 5 && <Step5 form={form} set={set} toggleSkill={toggleSkill} errors={errors} />}
                </motion.div>
              </AnimatePresence>

              {/* Nav buttons */}
              <div className="flex justify-between items-center mt-8 gap-3">
                {step > 0 ? (
                  <button
                    onClick={prev}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200
                      bg-white text-slate-600 font-bold text-sm cursor-pointer hover:border-slate-400 transition-all"
                  >
                    <ChevronRight size={17} /> السابق
                  </button>
                ) : <div />}

                <button
                  onClick={next}
                  className="flex-1 w-full mr-auto flex items-center justify-center gap-2
                    px-8 py-3 rounded-full bg-primary hover:bg-third text-white font-bold text-sm
                    cursor-pointer shadow-lg shadow-primary/30 hover:shadow-primary/40
                    hover:-translate-y-0.5 transition-all duration-200"
                >
                  {step === STEPS.length - 1 ? (
                    <><Check size={17} /> إرسال الطلب</>
                  ) : (
                    <>{step === 0 ? "ابدأ" : "التالي"} <ChevronLeft size={17} /></>
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Success */
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-14 shadow-lg border border-slate-100 text-center flex flex-col items-center gap-5"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
            >              
               <img src="/vv.png" alt="vision img" />
            </motion.div>

            <div>
              <h2 className="text-3xl font-black text-primary mb-2">تم إرسال طلبك بنجاح! 🎉</h2>
              <p className="text-slate-500 max-w-sm mx-auto leading-relaxed text-sm">
                شكراً لانضمامك إلى عائلة رُقي للشباب. سيتواصل معك فريقنا قريباً على
                البريد الإلكتروني أو الهاتف لتأكيد طلبك.
              </p>
              <p className="text-primary font-bold mt-3">نلتقي لنرتقي 🌱</p>
            </div>

            <button
              onClick={() => { setDone(false); setStep(0); setForm(INITIAL_FORM); }}
              className="px-8 py-3 rounded-full bg-primary hover:bg-third text-white font-bold text-sm
                cursor-pointer shadow-lg shadow-primary/30 transition-all"
            >
              تسجيل جديد
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}