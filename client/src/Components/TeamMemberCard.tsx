// Components/TeamMemberCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
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
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
  bgColor,
  socials,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group "
    >
      <div className="relative overflow-hidden rounded-3xl flex flex-col transition-all duration-500 hover:shadow-2xl">
        {/* Image Container with Colored Background */}
        <div className={` ${bgColor} overflow-hidden`}>
          <div className="">
            <img
              src={image}
              alt={name}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            
          
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white p-6 lg:p-8 grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-primary font-semibold text-sm mb-3">{role}</p>
          <p className="text-slate-600 leading-relaxed text-sm">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
