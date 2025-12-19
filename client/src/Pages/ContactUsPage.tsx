import React from "react";
import AboutUsHero from "../Components/HeroBanner";
import ContactSection from "../Components/ContactSection";
import FAQSection from "../Components/FaQSection";
import { Sparkles, Sun } from "lucide-react";
import HeroBanner from "../Components/HeroBanner";

function ContactUsPage() {
  return (
    <>
      <HeroBanner
        text="تواصل معنا"
        icon1={<Sparkles className="w-10 h-10 md:w-16 md:h-16 text-white" strokeWidth={1.5} />}
        icon2={<Sun className="w-10 h-10 md:w-16 md:h-16 text-white" strokeWidth={1.5} />}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}

export default ContactUsPage;
