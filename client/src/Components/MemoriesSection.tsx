// Components/MemoriesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

interface Memory {
  id: string;
  image: string;
  rotation: number;
  scale: number;
  delay: number;
}

function MemoriesSection() {
  const memories: Memory[] = [
    {
      id: "1",
      image: "/m1.png",
      rotation: -5,
      scale: 1,
      delay: 0.1,
    },
    {
      id: "2",
      image: "/m2.png",
      rotation: 3,
      scale: 1.1,
      delay: 0.2,
    },
    {
      id: "3",
      image: "/m3.png",
      rotation: -4,
      scale: 0.95,
      delay: 0.3,
    },
    {
      id: "4",
      image: "/m4.png",
      rotation: 6,
      scale: 1.05,
      delay: 0.4,
    },
    {
      id: "5",
      image: "/m5.png",
      rotation: -3,
      scale: 1,
      delay: 0.5,
    },
    {
      id: "6",
      image: "/m2.png",
      rotation: 4,
      scale: 0.98,
      delay: 0.6,
    },
    {
      id: "6",
      image: "/m2.png",
      rotation: 4,
      scale: 0.98,
      delay: 0.6,
    },
    {
      id: "6",
      image: "/m4.png",
      rotation: 4,
      scale: 0.98,
      delay: 0.6,
    },
  ];

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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.2,
            }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-xl"
          >
            <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            ذكرياتنا مع{" "}
            <span className="text-primary bg-clip-text">
              جمعية رُقي
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            لحظات جميلة وذكريات لا تُنسى من رحلتنا معاً
          </motion.p>
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


                  {/* Heart Icon on Hover */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="w-12 h-12 text-white fill-white drop-shadow-lg" />
                  </motion.div>
                </div>

                {/* Caption Area */}
                <div className="absolute bottom-2 left-3 right-3 h-6" />

              
              </div>

             

              {/* Shadow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.8 }}
                className="absolute inset-0 bg-slate-900/10 blur-xl -z-10 transform translate-y-4"
              />
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default MemoriesSection;
