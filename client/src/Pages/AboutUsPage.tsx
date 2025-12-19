// app/about/page.tsx or pages/about.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Heart,
  Users,
  Award,
  Calendar,
  TrendingUp,
  Mail,
  Sun,
} from "lucide-react";
// import AboutUsHero from "../Components/AboutUsHero";
import MissionSection from "../Components/MissionSection";
import OurStorySection from "../Components/OurStorySection";
import CTASection from "../Components/CTASection";
import OurTeamSection from "../Components/OurTeam";
import AboutUsHero from "../Components/HeroBanner";
import OurVisionSection from "../Components/OurVisionSection";
import OurRoadmap from "../Components/OurRoadmap";
import HeroBanner from "../Components/HeroBanner";

const AboutUsPage: React.FC = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroBanner
        text="من نحن"
        icon1={<Sparkles className="w-13 h-10  md:w-26 md:h-26 text-white" strokeWidth={1.5} />}
        icon2={<Sun className="w-10 h-10  md:w-26 md:h-26 text-white" strokeWidth={1.5} />}
      />
      <OurVisionSection />
      <OurRoadmap />
      <OurStorySection />
      <OurTeamSection />
      <CTASection />
    </main>
  );
};

export default AboutUsPage;
