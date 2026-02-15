// components/layout/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RegistrationTrigger from "./ui/RegisterationTrigger";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for mobile menu container
  const menuVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 25 },
    },
  };

  // Variants for each link
  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i },
    }),
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm"
          : "bg-white/80 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
        >
          <img src="/rokai.png" alt="Rokai Logo" width={30} height={30} />
          <span className="text-2xl font-sans tracking-tight text-primary">
            رُقي للشباب
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-800 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative hover:text-gray-900 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          {/* <RegistrationTrigger>
            {({ onClick }) => ( */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLcOeL8-yHfZrs4sMzfxGLyAHj7C44DzLCA4zVkAbLvwHwWA/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAP-4VJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafEcH40LKYTB47xd6hmJNqSwzEFDU8fYnXW48jze8U7LnpTS0qLihcpNt7l2Q_aem_Yzas6PC-tnKmYWeKMKMB_w">
              
              <button
                // onClick={onClick}
                className="group cursor-pointer inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                انضم الآن
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            {/* )}
          </RegistrationTrigger> */}
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center rounded-md p-2 text-gray-800 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ scale: 0.8, opacity: 0, rotate: 90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            {/* Panel */}
            <motion.div
              className="fixed top-[64px] left-0 right-0 z-40 rounded-b-3xl bg-white shadow-xl border-t border-gray-100"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-6 pt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to={link.to}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  custom={navLinks.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-2"
                >
                  <a
                  className="w-full sm:w-auto" 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdLcOeL8-yHfZrs4sMzfxGLyAHj7C44DzLCA4zVkAbLvwHwWA/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAP-4VJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafEcH40LKYTB47xd6hmJNqSwzEFDU8fYnXW48jze8U7LnpTS0qLihcpNt7l2Q_aem_Yzas6PC-tnKmYWeKMKMB_w">

                  <button
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-secondary text-white py-3 text-sm font-bold shadow-lg transition-all"
                    onClick={() => setIsOpen(false)}
                    >
                    انضم الآن
                    <ArrowRight className="w-5 h-5" />
                  </button>
                    </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
