// Components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "من نحن", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const programs = [
    { name: "البرامج البيئية", href: "/programs/environmental" },
    { name: "ورش العمل", href: "/programs/workshops" },
    { name: "المبادرات الخضراء", href: "/programs/green-initiatives" },
    { name: "دعم الأطفال", href: "/programs/children" },
    { name: "التطوع", href: "/programs/volunteer" },
  ];

  const resources = [
    { name: "مركز المساعدة", href: "/contact" },
    { name: "الأسئلة الشائعة", href: "/" },
    { name: "المعرض", href: "/" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/rokaiclub",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rokaiclub",
      icon: Instagram,
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
    },
  
  ];

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Gradient Accent */}

      {/* Decorative Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
     
        {/* Main Footer Content */}
        <div className="py-16 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <Link to="/" className="inline-block mb-6">
              <div className="bg-white p-2 rounded-xl">

                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/rokailogo.svg"
                  alt="رقي للشباب"
                  className="h-16 w-auto"
                  />
                  </div>
              </Link>

              <p className="text-slate-400 leading-relaxed mb-6">
                جمعية رُقي للشباب - مجتمع نابض بالحياة يجمع بين حماية البيئة
                ورعاية الأطفال والشباب لبناء مستقبل أفضل وأكثر استدامة.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+213123456789"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span dir="ltr">0667 60 33 55</span>
                </a>

                <a
                  href="mailto:rokaychabab@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>rokaychabab@gmail.com</span>
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>شلغوم العيد، ميلة، الجزائر</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                روابط سريعة
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white hover:pr-2 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                برامجنا
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </h4>
              <ul className="space-y-3">
                {programs.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white hover:pr-2 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                موارد مفيدة
                <span className="absolute -bottom-2 right-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
              </h4>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white hover:pr-2 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <span>{link.name}</span>
                      {link.name === "التقارير السنوية" && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 border-t border-slate-700"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center lg:text-right">
              <p className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span>© {currentYear} رُقي للشباب. جميع الحقوق محفوظة.</span>
                <span className="hidden lg:inline">•</span>
                <span className="inline-flex items-center gap-1">
                  صُنع بـ <Heart className="w-4 h-4 text-red-500 fill-current" /> في الجزائر
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <span className="text-slate-700">•</span>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-white transition-colors"
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
