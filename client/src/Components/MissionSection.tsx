// components/about/MissionSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb } from "lucide-react";

const MissionSection: React.FC = () => {
  const items = [
    {
      icon: Target,
      title: "رسالتنا",
      description:
        "تمكين الشباب من خلال برامج مبتكرة تجمع بين حماية البيئة، رعاية الأطفال، والتنمية المجتمعية المستدامة",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Eye,
      title: "رؤيتنا",
      description:
        "مجتمع شبابي واعٍ ومسؤول، يساهم بفعالية في بناء مستقبل بيئي واجتماعي أفضل للأجيال القادمة",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "غايتنا",
      description:
        "إحداث تأثير إيجابي ملموس في المجتمع من خلال المبادرات البيئية، البرامج التعليمية، والأنشطة التطوعية",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            من نحن وإلى أين نتجه
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            رسالتنا ورؤيتنا
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-6`}
                >
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
