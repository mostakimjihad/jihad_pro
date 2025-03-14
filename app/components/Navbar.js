"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] bg-white/10 backdrop-blur-lg rounded-2xl shadow-md border border-white/20 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <motion.div 
            className="text-xl font-semibold text-white"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Mostakim Jihad
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Projects", "Blog", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`}>
              <motion.div 
                className="text-white text-lg hover:text-blue-300 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden flex flex-col items-center py-4 space-y-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-b-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Projects", "Blog", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              <div className="text-white text-lg hover:text-blue-300 transition-all duration-300">
                {item}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
