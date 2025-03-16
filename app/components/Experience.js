"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code } from "lucide-react";
import TechStackSection from "./TechStackSection";

const experiences = [
  {
    role: "Jr. Software Engineer",
    company: "Mysoftheaven (BD) Ltd.",
    duration: "Feb 2024 - Present",
    description:
      "Developed Odoo ERP solutions, optimized CRM workflows, and implemented Gantt charts for project management.",
  },
  {
    role: "AI Engineer Intern",
    company: "JanataWifi",
    duration: "Oct 2023 - Jan 2024",
    description:
      "Worked on browser automation using Azure OpenAI, GPT-4, and developed an AI-powered chatbot.",
  },
  {
    role: "Researcher",
    company: "Green University of Bangladesh",
    duration: "2023",
    description:
      "Published a paper on task scheduling in Vehicular Edge Computing and explored deep reinforcement learning for optimization.",
  },
];

const projects = [
  {
    name: "Odoo ERP Implementation",
    company: "Mysoftheaven (BD) Ltd.",
    description:
      "Developed a full ERP solution in Odoo, including CRM automation, sales workflow, and project management.",
  },
  {
    name: "AI-Powered Chatbot",
    company: "JanataWifi",
    description:
      "Designed a chatbot using LangChain and Ollama, capable of processing PDF documents and responding intelligently.",
  },
  {
    name: "Gantt Chart in Odoo 17",
    company: "Mysoftheaven (BD) Ltd.",
    description:
      "Built an interactive Gantt chart for project deadlines using OWL and XML templates.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Experience & Projects
        </motion.h2>
        <p className="mt-3 text-gray-400 text-lg">
          A journey through my professional experience and industry projects.
        </p>
      </div>

      {/* Two-column Layout */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Experience Timeline - Left Side */}
        <div className="relative border-l-4 border-blue-500 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[38px] top-0 w-6 h-6 bg-blue-500 border-4 border-gray-900 rounded-full"></span>

              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                <Calendar className="w-5 h-5" />
                <span>{exp.duration}</span>
              </div>
              <p className="mt-3 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Industrial Projects - Right Side */}
        <div>
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-700 transition transform hover:scale-105"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">{proj.name}</h3>
              </div>
              <p className="text-gray-400">{proj.company}</p>
              <p className="mt-2 text-gray-300">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <TechStackSection />
    </section>
  );
};

export default Experience;
