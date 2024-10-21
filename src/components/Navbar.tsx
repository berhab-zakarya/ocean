import React from "react";
import Logo from "./Logo";
import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex items-center justify-between transition-all">
        <Logo />
        {/* Start Desktop Navigation */}
        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((link,index) => (
            <Link key={index} href={`#${link}`} className="text-sm font-semibold tracking-wide text-slate-200 hover:text-sky-400">
              {link}
            </Link>
          ))}
        </nav>
         {/* End Desktop Navigation */}
         {/* Start Mobile Navigation */}
         <MobileNav/>
         {/* End Mobile Navigation */}
      </div>
    </div>
  );
};

export default Navbar;
