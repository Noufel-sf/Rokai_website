// Components/OurValuesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Heart,
  Users,
  Target,
  Lightbulb,
  HandHeart,
} from "lucide-react";

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  gradient: string;
}

const OurValuesSection: React.FC = () => {
  const values: Value[] = [
    {
      icon: Sprout,
      title: "الاستدامة البيئية",
      description:
        "نؤمن بحماية البيئة والمحافظة على الموارد الطبيعية للأجيال القادمة من خلال المبادرات الخضراء والتوعية البيئية.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "الرعاية والاهتمام",
      description:
        "نضع رعاية الأطفال والشباب في صميم عملنا، ونوفر بيئة آمنة وداعمة لنموهم وتطورهم الشخصي والاجتماعي.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      icon: Users,
      title: "بناء المجتمع",
      description:
        "نسعى لتعزيز الروابط المجتمعية وخلق مساحات للتواصل والتعاون بين أفراد المجتمع من مختلف الأعمار والخلفيات.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "الالتزام والإتقان",
      description:
        "نلتزم بتقديم أعلى مستويات الجودة في جميع برامجنا وأنشطتنا، ونسعى للتحسين المستمر والتميز في كل ما نقوم به.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: Lightbulb,
      title: "الإبداع والابتكار",
      description:
        "نشجع التفكير الإبداعي والحلول المبتكرة لمواجهة التحديات، ونوفر منصة للشباب للتعبير عن أفكارهم وتحقيق إمكاناتهم.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: HandHeart,
      title: "روح التطوع",
      description:
        "نقدر العطاء والمساهمة في خدمة المجتمع، ونشجع ثقافة التطوع والمسؤولية الاجتماعية بين الشباب والأفراد.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32  overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-lg mb-3"
          >
            ما يميزنا
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            قيمنا{" "}
            <span className=" bg-clip-text">
              الأساسية
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto"
          >
            القيم التي تحدد هويتنا وتوجه عملنا نحو بناء مجتمع أفضل
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full bg-white hover:bg-third group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex flex-col items-center justify-center w-16 h-16 ${value.bgColor} rounded-2xl mb-6 relative`}
                >
                  <value.icon
                    className={`w-8 h-8 ${value.color}  relative z-10 transition-colors duration-300`}
                    strokeWidth={2}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-base group-hover:text-white transition-colors">
                  {value.description}
                </p>

          
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-lg mb-6">
            هل تشاركنا نفس القيم؟ انضم إلينا اليوم!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary cursor-pointer text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            انضم إلى العائلة
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValuesSection;
