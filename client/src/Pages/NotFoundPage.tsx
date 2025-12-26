// pages/NotFound.tsx (or src/pages/NotFound.tsx)
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Search } from "lucide-react";

const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-2 lg:px-4 lg:py-24">
        {/* Left content */}
        <div className="text-center lg:text-right">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            404
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            الصفحة غير موجودة
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            يبدو أنك ضِعت قليلاً
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-relaxed text-slate-600"
          >
            الرابط <span className="font-semibold text-slate-900">{location.pathname}</span>{" "}
            غير متوفر أو تم نقله.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              to="/"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-secondary sm:w-auto"
            >
              <Home className="h-5 w-5" />
              العودة للرئيسية
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 sm:w-auto"
            >
              <Search className="h-5 w-5" />
              تواصل معنا
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm text-slate-500"
          >
            إذا وصلت هنا من رابط داخل الموقع، أرسل لنا لقطة شاشة وسنصلحه.
          </motion.p>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />

            {/* Replace this with your image path */}
            <img
              src="/Customer-support.svg"
              alt="Not Found"
              className="relative z-10 h-[360px] w-full object-contain p-8 sm:h-[440px]"
              draggable={false}
            />
          </div>

          {/* floating badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-6 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur"
          >
            <p className="text-sm font-semibold text-slate-900">رُقي للشباب</p>
            <p className="text-xs text-primary">نلتقي لنرتقي</p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFoundPage;
