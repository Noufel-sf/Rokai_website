// components/layout/Navbar.tsx

import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-100" >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/rokai.png" alt="Rokai Logo" width={30} height={30} />
          {/* If you have an SVG/logo image, replace this text with <Image /> */}
          <span className="text-2xl font-sans tracking-tight text-primary">
            رُقي للشباب
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-800 md:flex">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link to="/contact" className="hover:text-gray-900">
            contact
          </Link>
          <Link to="/about" className="hover:text-gray-900">
            About
          </Link>
          
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="group cursor-pointer inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white px-5 py-3 rounded-full text-md font-bold shadow-xl transition-all">
            انضم الآن
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile menu placeholder (simple for now) */}
        <button
          className="inline-flex items-center rounded-md p-2 text-gray-800 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-gray-900" />
          <span className="mt-1 block h-0.5 w-5 bg-gray-900" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
