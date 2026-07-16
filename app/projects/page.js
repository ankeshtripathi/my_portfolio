"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const project = [
    // {
    //   image: "/tm.webp",
    //   title: "Task Manager App",
    //   desc: "MERN stack productivity app",
    //   url: null,
    // },
    {
      image: "/vns.webp",
      title: "Finance Dashboard",
      desc: "Analytics & charts UI",
      url: null,
    },
    {
      image: "/af.webp",
      title: "AI Interview App",
      desc: "Real-time interview system",
      url: null,
    },
    {
      image: "/immortalmanpower.png",
      title: "Immortal Manpower",
      desc: "Manpower and staffing solutions website",
      url: "https://www.immortalmanpower.com/",
    },
    {
      image: "/chapersons.png",
      title: "Chapersons Services",
      desc: "Solar energy, civil engineering, and infrastructure solutions",
      url: "https://chapersons.in/",
    },
    {
      image: "/greenenergy.png",
      title: "Immortal Green Energy",
      desc: "Green energy management dashboard",
      url: "https://uat-greenenergy.immortalgroup.in/login",
    },
  ];

  const handleViewProject = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
   <section className="relative py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-flex px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
        🚀 Portfolio
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
        A collection of modern full-stack applications designed with performance,
        scalability and exceptional user experience.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {project.map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .12
          }}
          whileHover={{ y: -12 }}
          className="group"
        >

          <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            dark:border-white/10
            bg-white/70
            dark:bg-white/5
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-500
            hover:shadow-2xl
            hover:border-blue-500/40
          "
          >

            {/* Image */}

            <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-slate-900">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-6 transition duration-700 group-hover:scale-105"
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Live Badge */}

              <div className="absolute top-5 left-5">

                <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                  ● Live
                </span>

              </div>

            </div>

            {/* Content */}

            <div className="p-7">

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">

                {item.desc}

              </p>

              {/* Tech */}

              {item.tech && (

                <div className="flex flex-wrap gap-2 mt-6">

                  {item.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-blue-50
                      dark:bg-blue-500/10
                      text-blue-600
                      dark:text-blue-300
                    "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              )}

              {/* Buttons */}

              <div className="flex gap-3 mt-8">

                {item.url && (

                  <button
                    onClick={() => handleViewProject(item.url)}
                    className="
                    flex-1
                    rounded-xl
                    py-3
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    text-white
                    font-semibold
                    transition
                    hover:scale-[1.03]
                  "
                  >
                    View Live
                  </button>

                )}

                {item.github && (

                  <button
                    onClick={() => window.open(item.github)}
                    className="
                    w-12
                    rounded-xl
                    border
                    dark:border-white/10
                    hover:bg-gray-100
                    dark:hover:bg-white/10
                    transition
                  "
                  >
                    <Github size={20} className="mx-auto" />
                  </button>

                )}

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>
  );
};

export default Projects;
