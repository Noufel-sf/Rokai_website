// Components/WhyChooseUsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import RegistrationTrigger from "./ui/RegisterationTrigger";
import {
  Sprout,
  Heart,
  Users,
  Target,
  Award,
  Shield,
  ArrowRight,
} from "lucide-react";
import { features } from "../data";
import HeadingText from "./ui/HeadingText";
import { Link } from "react-router-dom";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="px-4 py-20 lg:py-32 ">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <HeadingText
          heading="لماذا تختار"
          subheading="اكتشف"
          subheading2=" رُقي للشباب"
          description="اكتشف الأسباب التي تجعل رُقي للشباب الخيار الأمثل للشباب الطموح الباحث عن التميز والتنمية الشخصية والمجتمعية."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl  relative">
              <img
                src="/why2.svg"
                alt="رقي للشباب - مجتمع نشط"
                className="h-100 w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 right-2 rounded-2xl border-4 border-white bg-primary p-6 text-white shadow-2xl"
            >
              <p className="text-sm font-medium">موثوق من قبل</p>
              <p className="text-4xl font-bold">200+</p>
              <p className="text-sm">عضو نشط</p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-24 h-24 bg-linear-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl -z-10"
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl blur-2xl -z-10"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:shadow-xl transition-all`}
                  >
                    <feature.icon
                      size={28}
                      className="text-white"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <RegistrationTrigger>
                {({ onClick }) => (
                  <button
                    onClick={onClick}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-secondary cursor-pointer px-8 py-4 font-bold text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    انضم الآن
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </RegistrationTrigger>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white border-2 border-slate-200 px-8 py-4 font-semibold text-slate-700 hover:border-primary hover:text-primary transition-all"
                >
                  <span>تعرف علينا أكثر</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 pt-8 border-t border-slate-200"
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <span className="text-3xl text-primary font-extrabold">
                    50+
                  </span>
                  <div className="text-sm text-slate-600 mt-1">
                    برنامج سنوياً
                  </div>
                </div>
                <div>
                  <span className="text-3xl text-primary font-extrabold">
                    98%
                  </span>
                  <div className="text-sm text-slate-600 mt-1">نسبة الرضا</div>
                </div>
                <div>
                  <span className="text-3xl text-primary font-extrabold">
                    5+
                  </span>
                  <div className="text-sm text-slate-600 mt-1">سنوات خبرة</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
