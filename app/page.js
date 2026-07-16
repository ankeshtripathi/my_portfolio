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
  const projects = [
    {
      image: "/immortalmanpower.png",
      title: "Immortal Manpower",
      url: "https://www.immortalmanpower.com/",
    },
    {
      image: "/chapersons.png",
      title: "Chapersons Services",
      url: "https://chapersons.in/",
    },
    {
      image: "/greenenergy.png",
      title: "Immortal Green Energy",
      url: "https://uat-greenenergy.immortalgroup.in/login",
    },
  ];

  const socialLinks = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ankesh-tripathi-ab20b6265/",
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/919105009865",
    label: "WhatsApp",
    color: "hover:bg-[#25D366]",
  },
  {
    icon: FaPhone,
    url: "tel:+919105009865",
    label: "Call",
    color: "hover:bg-[#16A34A]",
  },
  {
    icon: FaGithub,
    url: "https://github.com/AnkeshDev05",
    label: "GitHub",
    color: "hover:bg-black dark:hover:bg-white dark:hover:text-black",
  },
];

  return (
    <div className="relative">
      <section className="py-20 flex items-center text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-500">
        {/* BG GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        {/* CONTENT WRAPPER */}
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-20">
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
           {/* SOCIAL ICONS */}
<div className="flex flex-wrap justify-center md:justify-start gap-4 pt-3">
  {socialLinks.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.a
        key={index}
        href={item.url}
        target={item.url.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.9 }}
        title={item.label}
        className={`
          w-12 h-12
          flex items-center justify-center
          rounded-full
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          text-gray-700 dark:text-white
          ${item.color}
          hover:text-white
          transition-all duration-300
          shadow-lg hover:shadow-xl
        `}
      >
        <Icon size={20} />
      </motion.a>
    );
  })}
</div>
            
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
           <motion.div
  style={{ rotateX, rotateY }}
  whileHover={{ scale: 1.03 }}
  animate={{ y: [0, -12, 0] }}
  transition={{
    y: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  }}
  className="relative flex items-center justify-center"
>
  {/* Background Glow */}
  <div className="absolute h-[480px] w-[480px] rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/20 to-cyan-400/30 blur-[120px]" />

  {/* Rotating Gradient Ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    }}
    className="absolute h-[420px] w-[420px] rounded-[40px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 p-[2px]"
  >
    <div className="h-full w-full rounded-[38px] bg-white dark:bg-slate-950" />
  </motion.div>

  {/* Card */}
  <div className="relative overflow-hidden rounded-[38px] border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-[0_40px_80px_rgba(59,130,246,.25)]">

    {/* Image */}
    <img
      src="/ankesh.png"
      alt="Ankesh"
      className="relative z-10 w-[280px] sm:w-[340px] md:w-[400px] rounded-[28px] object-cover"
    />

    {/* Top Badge */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute left-5 top-5 z-20"
    >
      <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-white/80 px-4 py-2 backdrop-blur-md dark:bg-slate-900/80">
        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-semibold">
          Available for Work
        </span>
      </div>
    </motion.div>

    {/* Experience */}
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="absolute right-5 bottom-5 z-20"
    >
      <div className="rounded-2xl border border-white/20 bg-white/80 px-5 py-4 backdrop-blur-lg dark:bg-slate-900/80">
        <p className="text-2xl font-bold text-blue-600">
          1+
        </p>
        <p className="text-xs text-gray-500">
          Years Experience
        </p>
      </div>
    </motion.div>

    {/* React Badge */}
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 6, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="absolute -left-8 top-28 z-20"
    >
      <div className="rounded-xl bg-sky-500 px-4 py-2 text-white shadow-xl">
        ⚛ React
      </div>
    </motion.div>

    {/* Node Badge */}
    <motion.div
      animate={{
        y: [0, 10, 0],
        rotate: [0, -6, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="absolute -right-8 top-40 z-20"
    >
      <div className="rounded-xl bg-green-600 px-4 py-2 text-white shadow-xl">
        🚀 Node.js
      </div>
    </motion.div>

    {/* Tailwind Badge */}
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="absolute left-12 bottom-12 z-20"
    >
      <div className="rounded-xl bg-cyan-500 px-4 py-2 text-white shadow-xl">
        💨 Tailwind
      </div>
    </motion.div>

  </div>
</motion.div>

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

     <section className="py-20 relative">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Top Projects
      </h2>

      <p className="mt-3 text-gray-500 dark:text-gray-400">
        Explore some of my featured work.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group rounded-3xl overflow-hidden bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
        >
          {/* Image Container */}
          <div className="relative h-[280px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden p-6">
            {/* Background Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="relative z-10 max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>

            {project.description && (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {project.description}
              </p>
            )}

            {/* Button */}
            <button
              onClick={() => window.open(project.url, "_blank")}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              View Live Project
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
