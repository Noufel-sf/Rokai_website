// Components/OurTeamSection.tsx
import React from "react";
import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import HeadingText from "./ui/HeadingText";
import { teamMembers } from "../data";



const OurTeamSection: React.FC = () => {
 

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
       <HeadingText   
          heading="فريق رُقي للشباب"
          subheading="تعرف على"
          subheading2="فريقنا المميز"
          description="تعرف على فريق رُقي للشباب، مجموعة من الأفراد المتفانين والشغوفين الذين يعملون بلا كلل لتمكين الشباب وبناء مستقبل أفضل من خلال المبادرات المجتمعية والتعليمية والبيئية."
        />

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
