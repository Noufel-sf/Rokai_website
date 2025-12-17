// Components/FeatureCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
  stat?: {
    value: string;
    label: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient,
  index,
  stat,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
        {/* Background Gradient Effect on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
          >
            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
          </div>

          {/* Decorative Circle */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute -inset-2 bg-gradient-to-br ${gradient} opacity-20 rounded-2xl blur-xl -z-10`}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
            {title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-base mb-4">
            {description}
          </p>

          {/* Stat Badge (Optional) */}
          {stat && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`inline-flex items-baseline gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 border-2 border-opacity-20`}
              style={{
                borderColor: `rgb(var(--primary))`,
              }}
            >
              <span className={`text-2xl font-bold bg-lenear-to-r ${gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </span>
              <span className="text-sm text-slate-600">{stat.label}</span>
            </motion.div>
          )}
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          className={`absolute bottom-0 left-0 right-0 h-1 bg-lenear-to-r ${gradient} origin-left`}
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
