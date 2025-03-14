"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Hi, I'm Mostakim Jihad
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          AI Engineer | Odoo Developer | Tech Enthusiast  
          Crafting intelligent and scalable solutions with Python & AI.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg flex items-center gap-2"
          >
            Contact Me <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold shadow-lg"
          >
            My Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
