// Components/OurRoadmap.tsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target } from "lucide-react";

const futureGoals = [
  {
    year: "2026",
    title: "توسيع النطاق",
    description: "الوصول إلى 1000+ عضو نشط وافتتاح 3 مراكز جديدة",
    color: "border-blue-500",
  },
  {
    year: "2027",
    title: "الشراكات الدولية",
    description: "التعاون مع 10 منظمات دولية لتبادل الخبرات",
    color: "border-purple-500",
  },
  {
    year: "2028",
    title: "التأثير الوطني",
    description: "تنفيذ 100+ برنامج بيئي على مستوى الجزائر",
    color: "border-green-500",
  },
  {
    year: "2030",
    title: "الريادة الإقليمية",
    description: "أن نصبح المرجع الأول للمبادرات الشبابية البيئية",
    color: "border-amber-500",
  },
];

function OurRoadmap() {
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-15 lg:py-22  overflow-hidden">

      {/* Abstract Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-40 right-10 w-32 h-32 border-4 border-pink-400/20 rounded-3xl"
      />

      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-40 left-16 w-24 h-24 border-4 border-rose-400/20 rounded-full"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-3">
            خارطة الطريق
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            رحلتنا نحو{" "}
            <span className="text-primary ">
              المستقبل
            </span>
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            خطة طموحة وواقعية لتحقيق رؤيتنا خلال السنوات القادمة
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Background Line */}

          {/* Progressive Animated Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute right-8  md:right-1/2 translate-x-1/2 top-14 md:top-0 w-2 rounded-2xl -z-10 bg-third  lg:block origin-top"
          />

          <div className="space-y-12 lg:space-y-16">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className="flex-1 lg:text-right"
                >
                  <motion.div
                    className={`bg-white rounded-2xl hover:bg-third transition duration-500 group p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-4  ${goal.color} relative overflow-hidden group`}
                  >

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="text-2xl font-bold bg-primary bg-clip-text  mb-2"
                      >
                        {goal.year}
                      </motion.div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 transition-colors">
                        {goal.title}
                      </h4>
                      <p className="text-slate-600 group-hover:text-white leading-relaxed">
                        {goal.description}
                      </p>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20  " />
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div className="relative shrink-0 w-16 h-16 rounded-full flex items-center justify-center  z-10">
                  {/* Pulsing Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 z-100"
                  />
                    <img src="/g.png" alt="" className="" />
                  
                </motion.div>

                {/* Spacer for desktop alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurRoadmap;
