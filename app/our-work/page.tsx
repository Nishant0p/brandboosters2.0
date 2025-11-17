'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/utils/motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with custom checkout and payment integration.",
    category: "Web Development",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Brand Identity",
    description: "Complete brand identity design including logo, typography, and brand guidelines.",
    category: "Branding",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application with real-time features and push notifications.",
    category: "Mobile Development",
    image: "/project3.jpg"
  },
];

export default function OurWorkPage() {
  return (
    <motion.div 
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 1)}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 'spring', index * 0.2, 1)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Project {project.id} Image</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeIn('up', 'spring', 0.6, 1)}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready to start your project?</h2>
          <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
