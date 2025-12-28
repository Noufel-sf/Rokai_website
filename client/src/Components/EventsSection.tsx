// Components/EventsSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import { Event } from "../data";
import { events } from "../data";
import HeadingText from "./ui/HeadingText";

const EventsSection: React.FC = () => {


  return (
    <section className=" py-20 lg:py-32 overflow-hidden">
      {/* Background Decorations */}

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute top-5 left-21 hidden xl:block opacity-50"
          >
            <img src="/school.png" alt="" className="w-39" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute top-5 right-25 hidden xl:block opacity-50"
          >
            <img src="/growth.png" alt="" className="w-30" />
          </motion.div>
    <HeadingText 
      heading="فعالياتنا"
      subheading="اكتشف"
      subheading2=" فعاليات رُقي للشباب"
      description="انضم إلينا في فعالياتنا القادمة واستعرض نجاحاتنا السابقة التي تعكس التزامنا بخدمة المجتمع وتمكين الشباب."
    />
        </motion.div>

       

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {events.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-500 text-lg">
              لا توجد فعاليات في هذه الفئة حالياً
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
