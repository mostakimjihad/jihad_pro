"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const TechStackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const techStack = [
    { name: "Odoo" },
    { name: "Django" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "GraphQL" },
    { name: "LangChain" },
    { name: "Express" },
    { name: "Grafana" },
    { name: "CI/CD" },
    { name: "Selenium" },
    { name: "Jenkins" },
  ];

  const prevTech = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? techStack.length - 1 : prevIndex - 1));
  };

  const nextTech = () => {
    setCurrentIndex((prevIndex) => (prevIndex === techStack.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Tech Stack
        </motion.h2>

        <p className="text-gray-400 text-lg md:text-xl mt-4">
          I specialize in a range of technologies, from backend systems to AI-driven solutions and modern development tools:
        </p>

        {/* Glassmorphism Tech Stack Carousel */}
        <div className="relative mt-12 flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={prevTech}
            className="absolute left-0 p-4 bg-white bg-opacity-20 rounded-full shadow-lg backdrop-blur-xl hover:bg-opacity-30 transition"
          >
            <span className="text-black text-3xl">&lt;</span>
          </button>

          {/* Carousel Content */}
          <div className="flex items-center justify-center overflow-hidden space-x-8">
            <div
              className="flex items-center justify-center backdrop-blur-lg bg-opacity-30 rounded-2xl p-6 shadow-xl w-32 h-32 text-center hover:bg-opacity-50 transition"
              key={techStack[currentIndex].name}
            >
              <p className="text-white text-lg font-semibold">{techStack[currentIndex].name}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTech}
            className="absolute right-0 p-4 bg-white bg-opacity-20 rounded-full shadow-lg backdrop-blur-xl hover:bg-opacity-30 transition"
          >
            <span className="text-black text-3xl">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
