import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, AlertCircle, LogIn, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ─── Mock credentials (replace with real auth) ────────────────────────────────
const ADMIN_EMAIL    = "admin@rokai.dz";
const ADMIN_PASSWORD = "rokai2025";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [shake, setShake]       = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("يرجى ملء جميع الحقول");
      triggerShake();
      return;
    }

    setLoading(true);
    // Simulate async auth check
    await new Promise(r => setTimeout(r, 1200));

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // In production: store token in httpOnly cookie / context
      navigate("/dashboard");
    } else {
      setLoading(false);
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      triggerShake();
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const inputBase =
    "w-full pl-4 pr-12 py-3.5 rounded-2xl border-2 bg-slate-50 text-sm text-slate-800 outline-none transition-all duration-200 font-['Cairo'] " +
    "focus:bg-white focus:border-primary focus:shadow-[0_0_0_4px_rgba(26,107,74,0.12)] ";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" dir="rtl">

      {/* Decorative blobs — inherit site background, just add soft orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px]" />
      </div>

      <div className="w-full max-w-md">

        {/* Logo + heading */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-xl border border-slate-100 mb-4">
            <img
              src="/rokailogo.svg"
              className="w-12"
              alt="Rokai"
              onError={e => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </div>

          <h1 className="text-2xl font-black text-slate-800">لوحة الإدارة</h1>
          <p className="text-slate-400 text-sm mt-1">سجّل دخولك للوصول إلى الطلبات</p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
          animate-shake={shake}
          className={`bg-white rounded-3xl shadow-lg border border-slate-100 p-8
            ${shake ? "animate-[wiggle_0.4s_ease-in-out]" : ""}`}
          style={shake ? { animation: "wiggle 0.4s ease-in-out" } : {}}
        >
          {/* Shield badge */}
          <div className="flex items-center gap-2.5 bg-primary/8 rounded-2xl px-4 py-3 mb-7">
            <ShieldCheck size={18} className="text-primary shrink-0" />
            <p className="text-xs text-primary font-semibold">
              منطقة مقيّدة — للمسؤولين فقط
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="admin@rokai.dz"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(""); }}
                  className={inputBase + (error ? "border-red-400" : "border-slate-200")}
                  autoComplete="email"
                  disabled={loading}
                />
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(""); }}
                  className={inputBase + (error ? "border-red-400" : "border-slate-200")}
                  autoComplete="current-password"
                  disabled={loading}
                />
                <Lock size={16} className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-0.5"
                  tabIndex={-1}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -6, height: 0 }}
                  className="overflow-hidden mb-5"
                >
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <AlertCircle size={15} className="text-red-500 shrink-0" />
                    <p className="text-xs text-red-600 font-semibold">{error}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl
                bg-primary hover:bg-third text-white font-bold text-sm
                shadow-lg shadow-primary/30 hover:shadow-primary/40
                hover:-translate-y-0.5 transition-all duration-200 cursor-pointer
                disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                  />
                  جارٍ التحقق...
                </>
              ) : (
                <>
                  <LogIn size={17} />
                  تسجيل الدخول
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-slate-400 mt-6"
        >
          جمعية رُقي للشباب — شلغوم العيد، ميلة 🌱
        </motion.p>
      </div>

      {/* Shake keyframe */}
      <style>{`
        @keyframes wiggle {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-8px); }
          40%      { transform: translateX(8px); }
          60%      { transform: translateX(-5px); }
          80%      { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}