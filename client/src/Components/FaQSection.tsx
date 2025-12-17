// Components/FAQSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import AccordionItem from "./AcordionItem";
import { HelpCircle, MessageCircle } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "كيف يمكنني الانضمام إلى جمعية رقي للشباب؟",
      answer:
        "يمكنك الانضمام إلى جمعيتنا من خلال ملء استمارة التسجيل المتاحة على موقعنا الإلكتروني أو زيارة مقرنا الرئيسي في شلغوم العيد. نرحب بجميع الشباب المتحمسين للمشاركة في بناء مجتمع أفضل والعمل على حماية البيئة ودعم الأطفال.",
    },
    {
      id: "2",
      question: "ما هي الأنشطة التي تنظمها الجمعية؟",
      answer:
        "ننظم مجموعة متنوعة من الأنشطة تشمل ورش عمل بيئية، حملات تنظيف، برامج دعم الأطفال، ملتقيات ثقافية، مبادرات زراعة الأشجار، وفعاليات تواصل اجتماعي. جميع أنشطتنا تهدف إلى تعزيز الوعي البيئي وبناء مجتمع متماسك.",
    },
    {
      id: "3",
      question: "هل هناك رسوم للانضمام أو المشاركة في الأنشطة؟",
      answer:
        "الانضمام إلى الجمعية مجاني تماماً! معظم أنشطتنا وفعالياتنا مجانية أيضاً. في حالات نادرة، قد تكون هناك رسوم رمزية لتغطية تكاليف بعض الورش المتخصصة، لكننا نسعى دائماً لإبقاء جميع الأنشطة متاحة للجميع.",
    },
    {
      id: "4",
      question: "ما هي الفئة العمرية المستهدفة للمشاركة؟",
      answer:
        "جمعيتنا مفتوحة بشكل رئيسي للشباب من سن 15 إلى 35 عاماً. ومع ذلك، نرحب بجميع الأعمار للمشاركة في فعاليات محددة، خاصة العائلات في البرامج الخاصة بالأطفال والأنشطة البيئية المجتمعية.",
    },
    {
      id: "5",
      question: "كيف يمكنني التطوع في الجمعية؟",
      answer:
        "نقدر جداً روح التطوع! يمكنك التسجيل كمتطوع من خلال موقعنا الإلكتروني أو التواصل معنا مباشرة. سنقوم بإدراجك في قائمة المتطوعين وإشعارك بالفرص التطوعية المتاحة التي تتناسب مع مهاراتك واهتماماتك.",
    },
    {
      id: "6",
      question: "أين يقع مقر الجمعية وما هي ساعات العمل؟",
      answer:
        "مقرنا الرئيسي يقع في شلغوم العيد. نحن متواجدون من الأحد إلى الخميس من الساعة 9 صباحاً حتى 5 مساءً. يمكنك زيارتنا خلال هذه الأوقات أو التواصل معنا عبر وسائل التواصل الاجتماعي أو البريد الإلكتروني في أي وقت.",
    },
    {
      id: "7",
      question: "كيف يتم تمويل أنشطة الجمعية؟",
      answer:
        "نعتمد على مزيج من التبرعات، الدعم المجتمعي، الشراكات مع المؤسسات المحلية، والمنح الحكومية. جميع التبرعات تذهب مباشرة لدعم برامجنا وأنشطتنا. نحن شفافون تماماً في استخدام الأموال ونقدم تقارير منتظمة لأعضائنا.",
    },
    {
      id: "8",
      question: "هل تقدم الجمعية برامج تدريبية أو تعليمية؟",
      answer:
        "نعم! نقدم برامج تدريبية متنوعة في مجالات القيادة الشبابية، ريادة الأعمال، المهارات البيئية، والتطوير الشخصي. كما ننظم ورش عمل متخصصة بشكل دوري يقدمها خبراء في مختلف المجالات.",
    },
  ];

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

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-600 text-lg mb-2"
          >
            Frequently
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900"
          >
            Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto mt-4"
          >
            هل لديك أسئلة؟ نحن هنا للمساعدة! تصفح الأسئلة الشائعة أدناه
          </motion.p>
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
