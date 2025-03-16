"use client";
import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-6">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl -top-20 -left-20"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -bottom-20 -right-20"
        animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo & Tagline */}
        <h2 className="text-3xl font-bold text-white">Mostakim Jihad</h2>
        <p className="mt-2 text-gray-400">Building AI-Powered & Scalable Solutions</p>
        
        {/* Social Links */}
        <div className="mt-6 flex gap-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition"
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition"
          >
            <Facebook className="w-6 h-6" />
          </motion.a>
        </div>
        
        {/* Navigation Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/projects" className="hover:text-white transition">Projects</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <a href="/blog" className="hover:text-white transition">Blog</a>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Mostakim Jihad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;