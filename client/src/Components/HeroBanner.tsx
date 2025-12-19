// Components/CTASection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Sun } from "lucide-react";
import RegisterationTrigger from "./ui/RegisterationTrigger";

export default function HeroBanner({
  text,
  icon1,
  icon2,
}: {
  text?: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
}) {
  return (
    <section className="relative px-6 py-5  overflow-hidden ">
      {/* Bottom Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative"
      >
        <div className="relative bg-primary rounded-3xl p-12 lg:p-30 overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col items-center z-10 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-3xl lg:text-6xl font-bold text-white mb-4"
            >
              {text}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              # نضم إلينا اليوم واكتشف كيف يمكنك إحداث فرق حقيقي في مجتمعك
            </motion.p>

            <RegisterationTrigger>
              {({ onClick }) => (
                <motion.button
                  onClick={onClick}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-third cursor-pointer hover:bg-secondary text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-secondary/50 transition-all duration-300"
                >
                  <span>انضم الآن</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ←
                  </motion.span>
                </motion.button>
              )}
            </RegisterationTrigger>
          </div>

          {/* Decorative Gradient Orbs */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
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
            className="absolute top-5 md:top-20 left-65 md:left-60  "
          >
            {icon1}
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
            className="absolute top-5 md:top-20 right-65 md:right-60  "
          >
            {icon2}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
