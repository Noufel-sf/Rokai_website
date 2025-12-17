// Components/OurVisionSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Compass,
  Lightbulb,
  Heart,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const OurVisionSection: React.FC = () => {
  const visionPillars = [
    {
      icon: Globe,
      title: "تأثير عالمي",
      description: "نسعى لأن نكون نموذجاً يُحتذى به على المستوى العربي والعالمي",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Heart,
      title: "مجتمع متماسك",
      description: "بناء جيل واعٍ يضع المصلحة العامة والبيئة في صميم اهتماماته",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "ابتكار مستدام",
      description: "حلول إبداعية ومستدامة للتحديات البيئية والمجتمعية المعاصرة",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const futureGoals = [
    {
      year: "2026",
      title: "توسيع النطاق",
      description: "الوصول إلى 1000+ عضو نشط وافتتاح 3 مراكز جديدة",
    },
    {
      year: "2027",
      title: "الشراكات الدولية",
      description: "التعاون مع 10 منظمات دولية لتبادل الخبرات",
    },
    {
      year: "2028",
      title: "التأثير الوطني",
      description: "تنفيذ 100+ برنامج بيئي على مستوى الجزائر",
    },
    {
      year: "2030",
      title: "الريادة الإقليمية",
      description: "أن نصبح المرجع الأول للمبادرات الشبابية البيئية",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32  overflow-hidden">
      {/* Background Decorations */}

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-30 left-60 md:left-80  "
      >
        <img src="/vv.png" alt="" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-60 left-40 md:left-120 w-20 h-20  "
      >
        <img src="/Icon.svg" alt="" />
      </motion.div>

     

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Vision Statement */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center mb-20 lg:mb-32">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-40 h-40  rounded-3xl mb-2"
            >
                <img src="/rokailogo.png" alt="" />
            </motion.div>

            <p className="text-primary font-semibold text-lg mb-3">
              نحو مستقبل أفضل
            </p>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              رؤيتنا{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                للمستقبل
              </span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed">
                نتطلع إلى مجتمع شبابي واعٍ ومسؤول، يساهم بفعالية في بناء مستقبل
                بيئي واجتماعي أفضل للأجيال القادمة. نطمح لأن نكون المنصة الرائدة
                التي تجمع بين حماية البيئة والتنمية المجتمعية.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-slate-700 text-lg font-medium italic leading-relaxed">
                  "نحلم بعالم يكون فيه كل شاب وطفل قادراً على المساهمة في بناء
                  مجتمع مستدام ومزدهر"
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>اكتشف خطتنا</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] lg:h-[600px]">
                <img
                  src="/why.png"
                  alt="Our Vision"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      2030
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      هدفنا الكبير
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      10+
                    </div>
                    <div className="text-xs text-slate-600 mt-1">مراكز</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      5000+
                    </div>
                    <div className="text-xs text-slate-600 mt-1">عضو</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10"
            />

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-2xl -z-10"
            />
          </motion.div>
        </div>

    


     
      </div>
    </section>
  );
};

export default OurVisionSection;
