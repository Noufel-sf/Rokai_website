// Components/CTASection.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import RegisterationTrigger from "./ui/RegisterationTrigger";
import { memo } from "react";

const CTASection: React.FC = () => {
  return (
    <section className="relative px-6 py-20  overflow-hidden">
      {/* Bottom Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative"
      >
        <div className="relative bg-primary rounded-3xl p-12 lg:p-26 overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col items-center z-10 text-center">
            <div className="bg-white w-24 h-24 px-2 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <img src="/rokailogo.svg" className="w-30" alt="Rokai Logo" />
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              مستعد لتكون جزءاً من التغيير؟
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              انضم إلينا اليوم واكتشف كيف يمكنك إحداث فرق حقيقي في مجتمعك
            </motion.p>
            {/* <RegisterationTrigger> */}
              {/* {({ onClick }) => ( */}

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLcOeL8-yHfZrs4sMzfxGLyAHj7C44DzLCA4zVkAbLvwHwWA/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAP-4VJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafEcH40LKYTB47xd6hmJNqSwzEFDU8fYnXW48jze8U7LnpTS0qLihcpNt7l2Q_aem_Yzas6PC-tnKmYWeKMKMB_w">
                <motion.button
                  // onClick={onClick}
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
              </a>
              {/* )} */}
            {/* </RegisterationTrigger> */}
          </div>

          {/* Decorative Gradient Orbs */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default memo(CTASection);
