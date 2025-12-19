// Components/OurValuesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { values } from "../data";
import HeadingText from "./ui/HeadingText";

const OurValuesSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32  overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <HeadingText
          heading="قيمنا"
          subheading="قيمنا"
          subheading2=" الأساسية"
          description="نلتزم في رقي للشباب بمجموعة من القيم التي توجه كل ما نقوم به، مما يضمن تأثيرًا إيجابيًا ومستدامًا على المجتمعات التي نخدمها."
        />
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

    
      </div>
    </section>
  );
};

export default OurValuesSection;
