"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Developed a Bangla PDF-based chatbot using LLMs and cosine similarity.",
    image: "/images/chatbot.png",
    tags: ["AI", "NLP", "Chatbot"],
    link: "https://github.com/yourrepo/chatbot",
  },
  {
    title: "Odoo ERP System",
    description: "Designed a custom ERP system with task scheduling and Gantt view.",
    image: "/images/odoo.png",
    tags: ["Odoo", "ERP", "Backend"],
    link: "https://github.com/yourrepo/odoo-erp",
  },
  {
    title: "Facial Emotion Recognition",
    description: "Implemented Vision Transformer for facial expression detection.",
    image: "/images/fer.png",
    tags: ["AI", "Vision Transformer", "Deep Learning"],
    link: "https://github.com/yourrepo/fer",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-4 text-gray-400 text-lg">
          A showcase of my advanced work in AI, Odoo, and web development.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block rounded-3xl p-6 shadow-lg transition transform hover:scale-105 bg-gray-900 bg-opacity-40 backdrop-blur-lg border border-gray-800 hover:bg-opacity-60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-400">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-purple-600 bg-opacity-20 text-gray-900 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
              <ArrowUpRight className="w-6 h-6 text-purple-400" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;