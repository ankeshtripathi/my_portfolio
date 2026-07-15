"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Page() {

const stats = [
  { number: "10+", label: "Completed Projects" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "1+", label: "Years Experience" },
];

  const data = [
    { image: "/html.svg", title: "HTML", skl: "95%" },
    { image: "/css.svg", title: "CSS", skl: "90%" },
    { image: "/js.svg", title: "JavaScript", skl: "92%" },
    { image: "/react.svg", title: "React", skl: "88%" },
    { image: "/nextjs.svg", title: "Next.js", skl: "85%" },
    { image: "/git.svg", title: "Git", skl: "80%" },
    { image: "/express.svg", title: "Express", skl: "78%" },
    { image: "/aws.svg", title: "AWS", skl: "70%" },
  ];

  const experience = [
    {
      role: " Web Developer",
      date: "Novmber -2025 -Persnt",
      company: "Immortal Technovation",
      desc: "Lead a team, develop web apps, ensure responsive design, debugging & performance improvements.",
    },
    {
      role: "intern Web Developer",
      date: "july-Augest-2024",
      company: "Code Soft",
      desc: "Develop scalable web apps, architecture design, code reviews & optimization.",
    },
    {
      role: "Internship",
      date: "15 July -15 Sep 2023",
      company: "Code yogi",
      desc: "Handled key projects, improved UX performance & code quality.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Technology (B.Tech)",
      date: "Aug 2022 – May 2025",
      college: "Uttarakhand Technical University",
      desc: "CGPA: 7.11",
    },

    {
      title: "Diploma in Computer Science Engineering (CSE)",
      date: "2018 – 2021",
      college: "Government Polytechnic Srinagar Garhwal",
      desc: "Board: UBTER | Percentage: 86%",
    },
    {
      title: "Higher Secondary (12th)",
      date: " 2019",
      college: "S.V.M. Mayapur, Haridwar",
      desc: "Board: Uttarakhand Board | Percentage: 77.6%",
    },
    {
      title: "Secondary School (10th)",
      date: "2016 – 2017",
      college: "S.V.M. Ranipur, Haridwar",
      desc: "Board: Uttarakhand Board | Percentage: 72%",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="w-fit px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800">
            👋 Hello, I'm
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Ankesh Prasad
          </h1>

          <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Full Stack Web Developer
          </h3>

          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            I craft high-performance web applications with modern UI, scalable
            backend, and seamless user experience using MERN stack.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
              🚀 Hire Me
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2 rounded-xl border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              📄 Download CV
            </Button>
          </div>

          <div className="flex gap-6 mt-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                2+
              </h2>
              <p className="text-gray-500 text-sm">Experience</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                10+
              </h2>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                5+
              </h2>
              <p className="text-gray-500 text-sm">Tech</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 rounded-3xl group-hover:opacity-50 transition"></div>

            <div className="relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-gray-800 rounded-3xl p-4 shadow-2xl">
              <Image
                src="/a.jpeg"
                width={340}
                height={260}
                alt="Ankesh"
                className="rounded-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ⚡ Available for Work
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          {/* HEADING */}
          <div className="text-center relative">
            <h3
              className="text-blue-500 font-bold tracking-[0.3em] 
        lg:text-4xl sm:text-2xl text-xl inline-block relative"
            >
              Skills
              <span
                className="absolute left-1/2 -bottom-3 w-16 h-1 
          bg-gradient-to-r from-blue-500 to-purple-500 
          rounded-full -translate-x-1/2"
              ></span>
            </h3>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl border border-gray-200 dark:border-gray-700">
                <Image
                  src="/download.png"
                  width={280}
                  height={280}
                  alt="skills"
                  className="animate-spin opacity-90 dark:invert dark:opacity-80"
                  style={{ animationDuration: "20s" }}
                />
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((item, index) => (
                <Card
                  key={index}
                  className="group h-full flex flex-col text-center 
            border border-gray-200 dark:border-gray-800
            hover:-translate-y-1 hover:shadow-xl 
            transition-all duration-300"
                >
                  <CardHeader className="items-center space-y-2">
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.title}
                      className="object-contain group-hover:scale-110 transition"
                    />

                    <CardDescription className="font-medium text-gray-700 dark:text-gray-300">
                      {item.title}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 mt-auto">
                    <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: item.skl }}
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="justify-center text-sm font-semibold mt-auto text-gray-700 dark:text-gray-300">
                    {item.skl}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= EXPERIENCE & EDUCATION ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* EXPERIENCE */}
          <div>
            <div className="text-center mb-14 relative">
              <h3
                className="text-blue-500 font-bold tracking-[0.3em] 
          lg:text-4xl sm:text-2xl text-xl inline-block relative"
              >
                Experience
                <span
                  className="absolute left-1/2 -bottom-3 w-16 h-1 
            bg-gradient-to-r from-blue-500 to-purple-500 
            rounded-full -translate-x-1/2"
                />
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((item, index) => (
                <Card
                  key={index}
                  className="group relative transition-all duration-300 
            hover:-translate-y-1 hover:shadow-xl 
            border border-gray-200 dark:border-gray-800"
                >
                  {/* TOP BAR */}
                  <div
                    className="absolute top-0 left-0 h-1 w-0 
              bg-gradient-to-r from-blue-500 to-purple-500 
              transition-all duration-300 group-hover:w-full"
                  />

                  <CardHeader className="space-y-1">
                    <h4
                      className="text-xl font-semibold 
                group-hover:text-blue-500 transition"
                    >
                      {item.role}
                    </h4>
                    <p className="text-sm text-gray-500">{item.company}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </CardHeader>

                  <CardContent className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </CardContent>

                  <span
                    className="absolute bottom-4 right-4 text-xl 
              text-blue-500 opacity-0 translate-x-2 transition 
              group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    ↗
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <div className="text-center mb-14 relative">
              <h3
                className="text-blue-500 font-bold tracking-[0.3em] 
          lg:text-4xl sm:text-2xl text-xl inline-block relative"
              >
                Education
                <span
                  className="absolute left-1/2 -bottom-3 w-16 h-1 
            bg-gradient-to-r from-blue-500 to-purple-500 
            rounded-full -translate-x-1/2"
                />
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="group relative transition-all duration-300 
            hover:-translate-y-1 hover:shadow-xl 
            border border-gray-200 dark:border-gray-800"
                >
                  <div
                    className="absolute top-0 left-0 h-1 w-0 
              bg-gradient-to-r from-blue-500 to-purple-500 
              transition-all duration-300 group-hover:w-full"
                  />

                  <CardHeader className="space-y-1">
                    <h4
                      className="text-xl font-semibold 
                group-hover:text-blue-500 transition"
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.college}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </CardHeader>

                  <CardContent className="text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </CardContent>

                  <span
                    className="absolute bottom-4 right-4 text-xl 
              text-blue-500 opacity-0 translate-x-2 transition 
              group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    ↗
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
