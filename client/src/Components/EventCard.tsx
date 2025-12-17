// Components/EventCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

interface EventCardProps {
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

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  image,
  date,
  location,
  attendees,
  duration,
  status,
  tags,
  gradient = "from-primary to-secondary",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative h-full bg-white"
    >
      <div className="relative h-full cursor-pointer rounded-3xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl">
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
              status === "completed"
                ? "bg-emerald-500/90 text-white"
                : "bg-amber-500/90 text-white"
            } backdrop-blur-sm`}
          >
            {status === "completed" ? "Completed" : "Upcoming"}
          </motion.span>
        </div>

        {/* Event Image with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <div
            className="absolute inset-0 cursor-pointer"
            style={{ zIndex: 1 }}
          />
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient ${gradient} opacity-20 mix-blend-overlay`} />
        </div>

        {/* Content Section */}
        <div className="relative p-6 space-y-4">
          {/* Title */}
          <h3 className="text-2xl text-primary font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary backdrop-blur-sm  text-xs rounded-full border border-slate-700/50 hover:border-primary/50 transition-colors"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-3 py-1 bg-secodary text-slate-300 text-xs rounded-full border border-slate-700/50">
                +{tags.length - 3}
              </span>
            )}
          </div>

          {/* Divider */}

          {/* Event Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 ">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{date}</span>
            </div>

            {location && (
              <div className="flex items-center gap-3 ">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-sm line-clamp-1">{location}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              {attendees && (
                <div className="flex items-center gap-2 ">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{attendees}+ attendees</span>
                </div>
              )}

              {duration && (
                <div className="flex items-center gap-2 ">
                  <Clock className="w-4 h-4  shrink-0" />
                  <span className="text-sm">{duration}</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 cursor-pointer flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient ${gradient} opacity-10 blur-xl`} />
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
