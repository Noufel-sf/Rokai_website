// Components/SocialLink.tsx
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface SocialLinkProps {
  icon: React.ElementType;
  title: string;
  content: string;
  link: string;
  gradient: string;
  bgColor: string;
  index: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  icon: Icon,
  title,
  content,
  link,
  gradient,
  bgColor,
  index,
}) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      whileHover={{ x: -8, scale: 1.02 }}
      className="group relative flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`flex-shrink-0 w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
      >
        <div
          className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </motion.div>

      {/* Content */}
      <div className="grow">
        <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-slate-600 text-sm">{content}</p>
      </div>

      {/* Arrow */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 0 }}
        whileHover={{ x: -5, opacity: 1 }}
        className="shrink-0"
      >
        <Send className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Gradient Line */}
    </motion.a>
  );
};

export default SocialLink;
