// components/registration/RegistrationModal.tsx
import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle, CalendarX2 } from "lucide-react";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
    },
  },
  exit: { opacity: 0, y: 40, scale: 0.9 },
};

const RegistrationModal: React.FC<RegistrationModalProps> = ({
  open,
  onClose,
}) => {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"
            variants={backdropVariants}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            // variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            className="relative z-[100] mx-4 w-full max-w-md rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary" />

            <div className="p-6 sm:p-8">
              {/* Icon */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                  <CalendarX2 className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    التسجيل مغلق حالياً
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    شكراً لحماسك للانضمام إلى رُقي للشباب 💛
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  لقد وصلنا إلى الحد الأقصى من المشاركين في هذه الفترة، لذلك تم
                  إغلاق باب التسجيل مؤقتاً.
                </p>
                <p>
                  تابعنا على{" "}
                  <span className="font-semibold text-primary">
                    إنستغرام وفيسبوك
                  </span>{" "}
                  لمعرفة موعد فتح التسجيل القادم، أو تواصل معنا إذا كان لديك أي
                  استفسار.
                </p>
              </div>

              {/* Chips */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs sm:text-sm">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  ✨ برامج شبابية
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  🌱 مبادرات بيئية
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  🤝 عمل تطوعي
                </span>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex cursor-pointer bg-primary text-white items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  <XCircle className="h-4 w-4" />
                  <span>حسناً</span>
                </button>

                <div className="flex gap-2">
                  <a
                    href="https://instagram.com/rokay_chabab"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  >
                    إنستغرام
                  </a>
                  <a
                    href="https://facebook.com/rokay"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  >
                    فيسبوك
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default RegistrationModal;
