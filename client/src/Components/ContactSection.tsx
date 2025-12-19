// Components/ContactSection.tsx
import React from "react";
import { motion } from "framer-motion";

import SocialLink from "./SocialLink";
import { MessageCircle, MapPin, Send } from "lucide-react";
import { socialLinks } from "../data";
import HeadingText from "./ui/HeadingText";



const ContactSection: React.FC = () => {


  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container flex flex-col gap-6 items-center mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
       <HeadingText 
          heading="تواصل"
          subheading=" طرق التواصل"
          subheading2=" معنا"
          description="نحن هنا لمساعدتك والإجابة على أي استفسارات قد تكون لديك. لا تتردد في التواصل معنا من خلال الطرق التالية."
        />

        {/* Image + Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="relative w-full aspect-[4/3] lg:aspect-square">
                  <img
                    src="/Podcast.png"
                    alt="تواصل مع فريق روكاي"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <MessageCircle
                        className="w-6 h-6 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        متاحون دائماً
                      </p>
                      <p className="text-slate-600 text-xs">نرد خلال 24 ساعة</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              </div>

              {/* Floating Decoration */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur-2xl -z-10"
              />
            </motion.div>

            {/* Right: Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Render Social Links */}
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  icon={social.icon}
                  title={social.title}
                  content={social.content}
                  link={social.link}
                  gradient={social.gradient}
                  bgColor={social.bgColor}
                  index={index}
                />
              ))}

              {/* Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border-r-4 border-primary"
              >
                <p className="text-slate-700 leading-relaxed">
                  <span className="font-bold text-primary">💡 نصيحة:</span>{" "}
                  للحصول على رد سريع، تواصل معنا عبر الواتساب أو البريد
                  الإلكتروني
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl w-full"
        >
          {/* Map Embed */}
          <div className="relative w-full h-[400px] lg:h-[500px] bg-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531654!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b4c1c0b8e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Overlay Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  موقعنا
                </h4>
                <p className="text-slate-600 text-sm mb-3">
                  شارع 102، 2281 كالاسان
                  <br />
                  الجزائر
                </p>
                <a
                  href="https://maps.google.com/?q=your-location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  <span>احصل على الاتجاهات</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
