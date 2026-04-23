"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaGithub, FaPhone } from "react-icons/fa";

import { getImageProps } from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe,
  FaServer,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
const Home = () => {


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const data = [
    {
      icon: <FaLaptopCode className="text-6xl" />,
      title: "Static Web Development",
      desc: "Fast, secure and SEO-friendly static websites for strong online presence.",
    },
    {
      icon: <FaGlobe className="text-6xl" />,
      title: "Dynamic Websites",
      desc: "Interactive and database-driven modern websites with full functionality.",
    },
    {
      icon: <FaMobileAlt className="text-6xl" />,
      title: "Responsive Design",
      desc: "Mobile, tablet and desktop friendly designs with best UX.",
    },
    {
      icon: <FaServer className="text-6xl" />,
      title: "Backend Development",
      desc: "Powerful backend using Node.js, Express and databases.",
    },
    {
      icon: <FaShoppingCart className="text-6xl" />,
      title: "E-Commerce Solutions",
      desc: "Complete e-commerce websites with payment and admin features.",
    },
    {
      icon: <FaTools className="text-6xl" />,
      title: "Website Maintenance",
      desc: "Support, updates, performance optimization and bug fixing.",
    },
  ];
  const images = ["/Home-Page.webp", "/Home-Page.webp", "/Home-Page.webp"];

  return (
    <div>
      <section className="min-h-screen flex items-center text-gray-900 dark:text-white py-16 relative overflow-hidden transition-colors duration-500">
        {/* BG GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        {/* CONTENT WRAPPER (FIXED) */}
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-20">
          {/* IMAGE */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-40 rounded-2xl"></div>

              <img
                src="/ankesh.png"
                alt="Ankesh"
                className="relative w-[260px] sm:w-[320px] md:w-[400px] rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-5 text-center md:text-left order-2 md:order-1"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-500 dark:text-gray-400"
            >
              Hello 👋
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ankesh
              </span>
            </motion.h1>

            <motion.h2
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
              I build modern, scalable, and high-performance web applications
              with stunning UI and smooth user experiences.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg"
              >
                🚀 View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </motion.button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-3">
              {[FaLinkedin, FaWhatsapp, FaPhone, FaGithub].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition shadow-md cursor-pointer"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-14"
          >
            <h3
              className="text-3xl sm:text-4xl font-bold 
        bg-gradient-to-r from-blue-500 to-purple-500 
        dark:from-blue-400 dark:to-purple-400
        bg-clip-text text-transparent"
            >
              Services
            </h3>
          </motion.div>

          {/* GRID */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="
            group h-full flex flex-col justify-center items-center text-center
            backdrop-blur-xl
            bg-white/80 dark:bg-white/5
            border border-gray-200 dark:border-white/10
            rounded-2xl p-6
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-xl 
            dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
          "
                >
                  <CardHeader className="flex flex-col items-center space-y-3">
                    {/* ICON */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="
                text-4xl p-4 rounded-full 
                bg-gray-100 dark:bg-gray-800 
                shadow-md 
                group-hover:bg-gradient-to-r 
                group-hover:from-blue-500 
                group-hover:to-purple-500 
                dark:group-hover:from-blue-400 
                dark:group-hover:to-purple-400 
                group-hover:text-white
                transition duration-300
              "
                    >
                      {item.icon}
                    </motion.div>

                    {/* TITLE */}
                    <CardTitle
                      className="
                text-lg sm:text-xl font-semibold 
                text-gray-800 dark:text-gray-200
                transition duration-300
                group-hover:text-transparent
                group-hover:bg-gradient-to-r 
                group-hover:from-blue-500 
                group-hover:to-purple-500 
                dark:group-hover:from-blue-400 
                dark:group-hover:to-purple-400 
                group-hover:bg-clip-text
              "
                    >
                      {item.title}
                    </CardTitle>

                    {/* UNDERLINE */}
                    <div
                      className="
                h-[2px] w-0 
                bg-gradient-to-r from-blue-500 to-purple-500
                dark:from-blue-400 dark:to-purple-400
                transition-all duration-300 
                group-hover:w-12
              "
                    ></div>
                  </CardHeader>

                  {/* DESCRIPTION */}
                  <CardFooter
                    className="
              text-sm sm:text-base 
              text-gray-600 dark:text-gray-400 
              mt-3 px-2
              transition duration-300
              group-hover:text-gray-800 dark:group-hover:text-gray-300
            "
                  >
                    {item.desc}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <div className="flex flex-col items-center mb-14">
            <h3
              className="
        text-3xl sm:text-4xl font-bold 
        bg-gradient-to-r from-blue-500 to-purple-500 
        dark:from-blue-400 dark:to-purple-400
        bg-clip-text text-transparent
      "
            >
              Top Projects
            </h3>
          </div>

          {/* PROJECT GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="
          group relative rounded-2xl overflow-hidden
          border border-gray-200 dark:border-white/10
          bg-white dark:bg-white/5 backdrop-blur-xl
          shadow-md hover:shadow-xl
          transition-all duration-500
        "
              >
                {/* IMAGE */}
                <img
                  src={src}
                  alt={`project-${idx}`}
                  className="
            w-full h-[220px] object-cover
            transition duration-500
            group-hover:scale-110
          "
                />

                {/* OVERLAY */}
                <div
                  className="
            absolute inset-0 
            bg-black/50 opacity-0 
            group-hover:opacity-100 
            transition duration-500
            flex flex-col justify-center items-center
            text-white
          "
                >
                  <h4 className="text-lg font-semibold mb-2">
                    Project {idx + 1}
                  </h4>

                  <button
                    className="
              px-4 py-2 rounded-lg
              bg-gradient-to-r from-blue-500 to-purple-500
              hover:scale-105 transition
            "
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
