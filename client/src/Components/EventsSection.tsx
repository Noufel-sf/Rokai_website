// Components/EventsSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  attendees?: number;
  duration?: string;
  status: "upcoming" | "completed";
  tags: string[];
  gradient?: string;
}

const EventsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const events: Event[] = [
    {
      id: "1",
      title: "ورشة الزراعة المستدامة",
      description:
        "تعلم أساسيات الزراعة العضوية والمستدامة مع خبراء البيئة. ورشة عملية تشمل التطبيق العملي في حديقة المجتمع.",
      image: "/event.png",
      date: "15 يناير 2026",
      location: "حديقة المجتمع، شلغوم العيد",
      attendees: 45,
      duration: "3 ساعات",
      status: "upcoming",
      tags: ["حماية الطبيعة", "ورش عملية", "للمبتدئين"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "2",
      title: "مهرجان الشباب الثقافي",
      description:
        "احتفال سنوي يجمع الشباب لعرض مواهبهم الفنية والثقافية. يشمل عروض موسيقية، مسرح، ومعارض فنية.",
      image: "/event.png",
      date: "22 يناير 2026",
      location: "المركز الثقافي",
      attendees: 200,
      duration: "يوم كامل",
      status: "upcoming",
      tags: ["بناء المجتمع", "فعاليات ثقافية", "للجميع"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "3",
      title: "يوم تنظيف الشاطئ",
      description:
        "مبادرة بيئية جماعية لتنظيف الشاطئ المحلي والحفاظ على البيئة البحرية. انضم إلينا لصنع الفرق!",
      image: "/event.png",
      date: "5 فبراير 2026",
      location: "شاطئ المدينة",
      attendees: 80,
      duration: "4 ساعات",
      status: "upcoming",
      tags: ["حماية الطبيعة", "تطوع", "نشاط خارجي"],
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "4",
      title: "ملتقى الابتكار الشبابي",
      description:
        "منصة للشباب المبدعين لعرض أفكارهم ومشاريعهم الابتكارية. فرصة للتواصل مع رواد الأعمال والمستثمرين.",
      image: "/event.png",
      date: "10 ديسمبر 2025",
      location: "مركز الابتكار",
      attendees: 120,
      duration: "5 ساعات",
      status: "completed",
      tags: ["بناء المجتمع", "ريادة الأعمال", "تواصل"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "5",
      title: "برنامج دعم الأطفال",
      description:
        "يوم ترفيهي وتعليمي للأطفال يشمل ألعاب تربوية، ورش فنية، وأنشطة رياضية في جو من المرح والتعلم.",
      image: "/event.png",
      date: "28 نوفمبر 2025",
      location: "نادي الأطفال",
      attendees: 60,
      duration: "6 ساعات",
      status: "completed",
      tags: ["رعاية الأطفال", "تعليم", "ترفيه"],
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: "6",
      title: "حملة زراعة الأشجار",
      description:
        "مبادرة بيئية لزراعة 1000 شجرة في مختلف أنحاء المدينة. ساهم في جعل مدينتنا أكثر خضرة واستدامة.",
      image: "/event.png",
      date: "15 نوفمبر 2025",
      location: "عدة مواقع في المدينة",
      attendees: 150,
      duration: "يوم كامل",
      status: "completed",
      tags: ["حماية الطبيعة", "تطوع", "مجتمع"],
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const filteredEvents = events.filter((event) =>
    activeTab === "upcoming"
      ? event.status === "upcoming"
      : event.status === "completed"
  );

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            الفعاليات و <span className=" text-primary">الأنشطة</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            اكتشف الفعاليات والأنشطة التي ننظمها لبناء مجتمع أفضل
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-secondary p-1.5 rounded-2xl">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 cursor-pointer rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-third text-white shadow-lg"
                  : "text-black hover:text-white"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-3 rounded-xl cursor-pointer font-semibold transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-third text-white shadow-lg"
                  : "text-black hover:text-white"
              }`}
            >
              Past Events
            </button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, index) => (
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
        {filteredEvents.length === 0 && (
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
