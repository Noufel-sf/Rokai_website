// Components/OurTeamSection.tsx
import React from "react";
import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  bgColor: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const OurTeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "أحمد بن محمد",
      role: "المؤسس والرئيس",
      bio: "قائد شغوف بالتغيير البيئي والتنمية المجتمعية، يسعى لبناء جيل واعٍ ومسؤول",
      image: "/m.png",
      bgColor: "bg-[#E8E4FF]", // Soft purple
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "ahmed@rokai.org",
      },
    },
    {
      id: "2",
      name: "فاطمة الزهراء",
      role: "مديرة البرامج",
      bio: "متخصصة في تطوير البرامج التعليمية والتربوية للأطفال والشباب",
      image: "/m.png",
      bgColor: "bg-[#FFE8E8]", // Soft pink/peach
      socials: {
        linkedin: "#",
        email: "fatima@rokai.org",
      },
    },
    {
      id: "3",
      name: "عمر الصديق",
      role: "منسق المشاريع البيئية",
      bio: "خبير في الاستدامة البيئية وتنسيق المبادرات الخضراء والحملات التوعوية",
      image: "/m.png",
      bgColor: "bg-[#E8F4FF]", // Soft blue
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "omar@rokai.org",
      },
    },
    {
      id: "4",
      name: "ليلى حسن",
      role: "مسؤولة التواصل الاجتماعي",
      bio: "متخصصة في بناء المجتمعات الرقمية وتعزيز التواصل مع الشباب",
      image: "/m.png",
      bgColor: "bg-[#FFF8E8]", // Soft yellow/cream
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "layla@rokai.org",
      },
    },
    {
      id: "5",
      name: "يوسف العلي",
      role: "منسق الفعاليات",
      bio: "مختص في تنظيم وإدارة الفعاليات والورش التدريبية للشباب",
      image: "/m.png",
      bgColor: "bg-[#E8FFE8]", // Soft green
      socials: {
        linkedin: "#",
        email: "youssef@rokai.org",
      },
    },
    {
      id: "6",
      name: "سارة المنصور",
      role: "مسؤولة التطوع",
      bio: "تدير برامج التطوع وتنسيق المتطوعين في مختلف المبادرات والأنشطة",
      image: "/m.png",
      bgColor: "bg-[#FFE8F4]", // Soft rose
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "sara@rokai.org",
      },
    },
  ];

  return (
    <section className="relative py-20 lg:py-32  overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-lg mb-3"
          >
            تعرف على الأشخاص المميزين
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            تعرف على فريق{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              الخبراء
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto"
          >
            مجموعة من الأفراد المتحمسين والموهوبين الذين يعملون معاً لتحقيق رؤيتنا
            وبناء مجتمع أفضل
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              bgColor={member.bgColor}
              socials={member.socials}
              index={index}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default OurTeamSection;
