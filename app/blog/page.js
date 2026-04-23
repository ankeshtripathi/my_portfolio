"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Blogpage = () => {
  const blogs = [
    {
      title: "How to Build MERN Stack Projects",
      desc: "Learn step-by-step how to build scalable full stack apps.",
      image: "/tm.webp",
    },
    {
      title: "React Performance Optimization",
      desc: "Improve your React app speed with best practices.",
      image: "/vns.webp",
    },
    {
      title: "Node.js Backend Best Practices",
      desc: "Write clean and scalable backend code.",
      image: "/af.webp",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          My Blog
        </h1>
        <p className="text-gray-500 mt-3">
          Insights, tutorials, and development tips
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition">
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>

                <button className="mt-4 text-blue-500 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogpage;
