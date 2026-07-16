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
      <section className="relative min-h-screen overflow-hidden flex items-center bg-white dark:bg-[#030712] text-gray-900 dark:text-white">

  {/* ================= Background ================= */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute left-[-150px] top-[-150px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

    <div className="absolute right-[-180px] bottom-[-180px] h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[150px]" />

    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

  </div>

  {/* Grid */}

  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage:
        "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  {/* ================= Main ================= */}

  <div className="relative z-20 mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 py-24 lg:flex-row">

    {/* ================= LEFT ================= */}

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="flex-1"
    >

      {/* Available */}

      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">

        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"/>

        <span className="text-sm font-medium">

          Available for Full Time

        </span>

      </div>

      {/* Heading */}

      <h1 className="text-5xl font-black leading-tight md:text-7xl">

        Hi, I'm

        <br/>

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">

          Ankesh Prasad

        </span>

      </h1>

      {/* Type */}

      <h2 className="mt-6 text-2xl font-semibold text-slate-600 dark:text-slate-300">

        Full Stack Developer

      </h2>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">

        I build modern web applications with beautiful user interfaces,

        scalable backend architecture, and high-performance experiences

        using React, Node.js, Express, PostgreSQL and modern technologies.

      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <motion.button
          whileHover={{
            scale:1.05,
            y:-3
          }}
          whileTap={{scale:.95}}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl"
        >

          🚀 View Projects

        </motion.button>

        <motion.button
          whileHover={{
            scale:1.05,
            y:-3
          }}
          whileTap={{scale:.95}}
          className="rounded-2xl border border-slate-300 bg-white/60 px-8 py-4 font-semibold backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/40"
        >

          Download Resume

        </motion.button>

      </div>

      {/* Stats */}

      <div className="mt-14 grid grid-cols-3 gap-5">

        {[
          {
            value:"15+",
            title:"Projects"
          },
          {
            value:"1+",
            title:"Experience"
          },
          {
            value:"20+",
            title:"Technologies"
          }
        ].map((item,index)=>(

          <motion.div

            whileHover={{y:-8}}

            key={index}

            className="rounded-3xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl shadow-xl dark:bg-slate-900/40"

          >

            <h3 className="text-3xl font-black text-blue-600">

              {item.value}

            </h3>

            <p className="mt-2 text-sm text-slate-500">

              {item.title}

            </p>

          </motion.div>

        ))}

      </div>

      {/* Social */}

      <div className="mt-10 flex flex-wrap gap-4">

        {socialLinks.map((item,index)=>{

          const Icon=item.icon;

          return(

            <motion.a

              key={index}

              href={item.url}

              target="_blank"

              whileHover={{
                y:-6,
                rotate:6,
                scale:1.1
              }}

              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/60 shadow-lg backdrop-blur-xl dark:bg-slate-900/50"

            >

              <Icon size={22}/>

            </motion.a>

          )

        })}

      </div>

    </motion.div>

    {/* ================= RIGHT ================= */}

   <motion.div
  style={{ rotateX, rotateY }}
  whileHover={{ scale: 1.03 }}
  animate={{ y: [0, -15, 0] }}
  transition={{
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="relative flex items-center justify-center"
>
  {/* Background Mesh */}
  <div className="absolute h-[550px] w-[550px] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-[120px]" />

  {/* Glass Card */}
  <div className="relative w-[340px] md:w-[420px] rounded-[35px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.15)] overflow-hidden">

    {/* Animated Border */}
    <div className="absolute inset-0 rounded-[35px] p-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
      <div className="h-full w-full rounded-[33px] bg-white dark:bg-slate-950" />
    </div>

    {/* Decorative Blur */}
    <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

    <div className="relative z-10 p-6">

      {/* Available */}
      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 border border-green-400/20 px-3 py-1">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">
            Available
          </span>
        </div>

        <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-500">
          Full Stack
        </div>

      </div>

      {/* Image */}
      <div className="relative flex justify-center">

        <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

        <img
          src="/ankesh.png"
          alt="Ankesh"
          className="relative z-10 w-[260px] md:w-[320px] rounded-3xl"
        />

      </div>

      {/* Name */}
      <div className="mt-6 text-center">

        <h2 className="text-3xl font-bold">
          Ankesh Prasad
        </h2>

        <p className="mt-1 text-gray-500">
          React • Node • PostgreSQL
        </p>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-3 gap-3">

        <div className="rounded-2xl border border-white/10 bg-white/40 dark:bg-slate-900/40 p-4 text-center backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-blue-500">
            15+
          </h3>

          <p className="text-xs text-gray-500">
            Projects
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/40 dark:bg-slate-900/40 p-4 text-center backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-violet-500">
            1+
          </h3>

          <p className="text-xs text-gray-500">
            Years
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/40 dark:bg-slate-900/40 p-4 text-center backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-cyan-500">
            20+
          </h3>

          <p className="text-xs text-gray-500">
            Skills
          </p>

        </div>

      </div>

      {/* Code Snippet */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="mt-6 rounded-2xl bg-slate-900 p-4 font-mono text-xs text-green-400"
      >
        <p>{"const developer = {"}</p>
        <p>{"  name: 'Ankesh',"}</p>
        <p>{"  stack: ['React','Node'],"}</p>
        <p>{"  status: 'Available'"}</p>
        <p>{"}"}</p>
      </motion.div>

    </div>

  </div>

  {/* Floating React */}
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 4,
    }}
    className="absolute -left-8 top-28 rounded-2xl bg-sky-500 px-5 py-3 text-white shadow-xl"
  >
    ⚛ React
  </motion.div>

  {/* Floating Node */}
  <motion.div
    animate={{
      y: [0, 10, 0],
      rotate: [0, -10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
    }}
    className="absolute -right-8 top-48 rounded-2xl bg-green-600 px-5 py-3 text-white shadow-xl"
  >
    🚀 Node
  </motion.div>

  {/* Floating Tailwind */}
  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 3,
    }}
    className="absolute left-0 bottom-12 rounded-2xl bg-cyan-500 px-5 py-3 text-white shadow-xl"
  >
    
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
