"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const blogs = [
  {
    title: "Optimizing Task Scheduling in Vehicular Edge Computing",
    description: "A deep dive into how QuETOD improves QoE and reliability.",
    link: "https://yourblog.com/vehicular-edge-computing",
    date: "March 10, 2025",
  },
  {
    title: "Building an AI-Powered Chatbot with LangChain",
    description: "Learn how to create a chatbot that processes PDF documents using LangChain and Ollama.",
    link: "https://yourblog.com/langchain-chatbot",
    date: "February 20, 2025",
  },
  {
    title: "Integrating DHTMLX Gantt in Odoo 17",
    description: "Step-by-step guide to implementing a Gantt chart in Odoo’s OWL framework.",
    link: "https://yourblog.com/odoo-gantt-chart",
    date: "January 5, 2025",
  },
  {
    title: "Integrating DHTMLX Gantt in Odoo 17",
    description: "Step-by-step guide to implementing a Gantt chart in Odoo’s OWL framework.",
    link: "https://yourblog.com/odoo-gantt-chart",
    date: "January 5, 2025",
  },
  {
    title: "Integrating DHTMLX Gantt in Odoo 17",
    description: "Step-by-step guide to implementing a Gantt chart in Odoo’s OWL framework.",
    link: "https://yourblog.com/odoo-gantt-chart",
    date: "January 5, 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-gray-900 text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Latest Blogs
        </motion.h2>
        <p className="mt-3 text-gray-300">
          Insights on AI, Odoo, and cutting-edge technologies.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-12 max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on medium screens
            1024: { slidesPerView: 3 }, // Show 3 slides on large screens
          }}
          className="pb-10"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg transition transform hover:scale-105 hover:bg-gray-700/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span className="text-sm text-gray-400">{blog.date}</span>
                <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
                <p className="mt-2 text-gray-300">{blog.description}</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-5 h-5 text-purple-400" />
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
