// Components/Accordion.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border border-slate-200 rounded-2xl cursor-pointer overflow-hidden  shadow-sm hover:shadow-md transition-shadow duration-300 ${isOpen ? "bg-third" : "bg-white"}`}
    >
      {/* Question Header */}
      <button
        onClick={onClick}
        className="w-full flex items-center cursor-pointer justify-between gap-4 p-6 lg:p-8 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className={`text-lg lg:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors pr-4`}>
          {question}
        </h3>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 w-10 h-10 rounded-full bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary" strokeWidth={2.5} />
          ) : (
            <Plus className="w-5 h-5 text-slate-600 group-hover:text-primary transition-colors" strokeWidth={2.5} />
          )}
        </motion.div>
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.25, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <p className={`text-slate-600 leading-relaxed text-base lg:text-lg ${isOpen ? "text-white" : ""} `}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;
