"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const project = [
    {
      image: "/tm.webp",
      title: "Task Manager App",
      desc: "MERN stack productivity app",
    },
    {
      image: "/vns.webp",
      title: "Finance Dashboard",
      desc: "Analytics & charts UI",
    },
    {
      image: "/af.webp",
      title: "AI Interview App",
      desc: "Real-time interview system",
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">
      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h2>

        <p className="text-gray-500 mt-3">Some of my recent work</p>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {project.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group"
          >
            <Card className="relative border-0 bg-transparent shadow-none">
              {/* GRADIENT BORDER */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500">
                {/* CARD */}
                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-900">
                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm mt-2">{item.desc}</p>

                    <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg text-sm hover:scale-105 transition">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
