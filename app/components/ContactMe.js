"use client";
import { motion } from "framer-motion";
import { Briefcase, Mail, Code, Send } from "lucide-react";
import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent("Proposal Submission");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Get in Touch
        </motion.h2>
        <p className="mt-3 text-gray-400 text-lg">
          Let&rsquo;s collaborate! Whether it&rsquo;s hiring, project-based work, or open-source contributions.
        </p>
      </div>

      {/* Contact Options */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {[
          { title: "Hiring Me", icon: <Briefcase className="w-12 h-12 text-purple-500" /> },
          { title: "Project Basis", icon: <Mail className="w-12 h-12 text-blue-400" /> },
          { title: "Open Source Collaboration", icon: <Code className="w-12 h-12 text-green-400" /> },
        ].map((option, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-lg text-center transition hover:shadow-2xl hover:border-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{option.icon}</div>
            <h3 className="text-2xl font-semibold">{option.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 max-w-3xl mx-auto bg-gray-800/50 p-10 rounded-3xl border border-gray-700 shadow-xl"
      >
        <h3 className="text-3xl font-bold text-center text-gray-300 mb-6">Send a Proposal</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Project Details..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg font-semibold transition hover:scale-105 hover:shadow-xl"
          >
            <Send className="w-6 h-6" /> Send Proposal
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactMe;
