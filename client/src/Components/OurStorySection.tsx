// components/about/OurStorySection.tsx
import React from "react";
import { motion } from "framer-motion";

const OurStorySection: React.FC = () => {
  const timeline = [
    {
      year: "2019",
      title: "البداية",
      description: "تأسيس الجمعية بمجموعة صغيرة من الشباب المتحمسين",
    },
    {
      year: "2020",
      title: "النمو",
      description: "إطلاق أول برنامج بيئي وانضمام 100 عضو جديد",
    },
    {
      year: "2022",
      title: "التوسع",
      description: "افتتاح مركز جديد وإطلاق 20 برنامج متنوع",
    },
    {
      year: "2024",
      title: "التأثير",
      description: "الوصول إلى 500+ عضو نشط وشراكات مع 15 منظمة",
    },
  ];

  return (
    <section className="py-20 lg:py-32 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold text-lg mb-3">
              قصتنا
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              رحلة من{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                الشغف
              </span>{" "}
              إلى التأثير
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-slate-600 text-lg leading-relaxed">
                بدأت رحلتنا في عام 2019 بمجموعة صغيرة من الشباب الذين آمنوا بأن
                التغيير الحقيقي يبدأ من المجتمع المحلي. كانت الفكرة بسيطة: كيف
                يمكننا الجمع بين حماية البيئة ورعاية الأطفال لخلق تأثير مضاعف؟
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                اليوم، نحن فخورون بكوننا جمعية رائدة تضم أكثر من 500 عضو نشط،
                ننظم أكثر من 50 برنامجاً سنوياً، ونتعاون مع عشرات المنظمات
                المحلية والدولية لتحقيق رؤيتنا.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-grow pl-4 border-r-2 border-slate-200 group-hover:border-primary transition-colors pb-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/about/story1.jpg"
                    alt="Our Story 1"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/about/story2.jpg"
                    alt="Our Story 2"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/about/story3.jpg"
                    alt="Our Story 3"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/about/story4.jpg"
                    alt="Our Story 4"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">سنوات من النجاح</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
