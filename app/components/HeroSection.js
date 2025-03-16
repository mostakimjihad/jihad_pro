"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, GraduationCap } from "lucide-react";
import Image from "next/image";
import FloatingIcons from "./FloatingIcons"; // Add the path to the logo image

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl"
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-100 opacity-25 rounded-full blur-2xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Odoo Icons Floating */}
      <FloatingIcons />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-40 h-40 md:w-52 md:h-52 mb-2"
        >
          <Image
            src="/me1.png" // Update to actual image path
            alt="Mostakim Jihad"
            width={500}
            height={500}
            className="rounded-full shadow-sm"
          />
        </motion.div>

        {/* Titles */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Software Engineer
        </motion.h1>
        <p className="text-gray-400 text-lg md:text-xl mt-2">
          Experienced in building scalable backend systems, developing advanced AI-driven solutions, and leveraging ERP frameworks like Odoo to optimize business processes.
        </p>

        {/* Buttons & Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          {/* Download CV Button */}
          <a
            href="/cv.pdf" // Update with actual CV link
            download
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-lg transition"
          >
            <FileText className="w-5 h-5" />
            Download CV
          </a>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/mostakim-jihad" // Update with actual GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mostakim-jihad" // Update with actual LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-700 hover:bg-blue-600 text-white rounded-full transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=XXXXX" // Update with actual Google Scholar profile
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition"
            >
              <GraduationCap className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
