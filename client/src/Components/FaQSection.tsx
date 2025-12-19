// Components/FAQSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import AccordionItem from "./AcordionItem";
import { faqs } from "../data";
import { HelpCircle, MessageCircle } from "lucide-react";
import HeadingText from "./ui/HeadingText";


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);


  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Decorative circles matching the image */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 border-4 border-secondary/30 rounded-full"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-16 w-12 h-12 bg-primary/20 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-20 w-8 h-8 bg-third/30 rounded-lg"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-26 h-16 rounded-2xl mb-6"
          >
            <img src="/q.png" alt="question" className="w-60" />
          </motion.div>

        <HeadingText 
          heading="الأسئلة"
          subheading="هل لديك"
          subheading2="الشائعة"
          description="إليك بعض الأسئلة الشائعة حول رُقي للشباب وإجاباتها لمساعدتك في معرفة المزيد عنا."
        />
        </motion.div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default FAQSection;
