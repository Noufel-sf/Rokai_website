// Components/MemoriesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { memories } from "../data";
import HeadingText from "./ui/HeadingText";

function MemoriesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          
          <HeadingText
            heading=" ذكرياتنا بعض من أجمل اللحظات"
            subheading="استعرض"
            subheading2=" ذكريات رُقي للشباب"
            description="تصفح مجموعة مختارة من الصور التي توثق لحظات لا تُنسى من فعاليات وأنشطة رُقي للشباب، والتي تعكس روح التعاون والاحتفال بين أفراد مجتمعنا."
          />
        </motion.div>

        {/* Memories Grid with Masonry Layout */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: memory.rotation * 2,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: memory.rotation,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: memory.delay,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}
              className={`relative group cursor-pointer ${
                index % 7 === 0 || index % 7 === 3
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              {/* Polaroid Frame */}
              <div className="relative   pb-10  transition-shadow duration-300 rounded-sm">
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden ">
                  <motion.img
                    src={memory.image}
                    alt={`Memory ${memory.id}`}
                    className="w-full h-full object-cover"
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Caption Area */}
                <div className="absolute bottom-2 left-3 right-3 h-6" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemoriesSection;
