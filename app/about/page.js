import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Page() {
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
      company: "Code",
      desc: "Handled key projects, improved UX performance & code quality.",
    },
  ];

  const education = [
    {
      title: "Bachelor of Technology (B.Tech)",
      date: "Aug 2022 – May 2025",
      college: "Uttarakhand Technical University",
      desc: "CGPA: 7.11"   },

    {
      title: "Diploma in Computer Science Engineering (CSE)",
      date: "2018 – 2021",
      college: "Government Polytechnic Srinagar Garhwal",
      desc: "Board: UBTER | Percentage: 80%",
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
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex ">
          <Image
            src="/a.jpeg"
            width={520}
            height={420}
            alt="Ankesh Prasad"
            className="rounded-xl shadow-lg"
            priority
          />
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-2xl">Hello, I Am</h4>
          <h1 className="text-5xl font-bold">Ankesh Prasad</h1>
          <h3 className="text-2xl text-orange-500 font-semibold">
            Web Developer
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            As the Chief Technology Officer at TF Strategies Pvt. Ltd., I
            specialize in responsive web development, SEO management, and web
            hosting. I have successfully developed numerous static and dynamic
            websites.
          </p>

          <div className="space-y-1 text-sm">
            <p>📞 Phone: +91 05009865</p>
            <p>📧 Email: ankeshprasad20012@gmail.com</p>
            <p>📍 Address: Haridwar, Uttarakhand</p>
          </div>

          <Button className="w-fit mt-3">Contact Me</Button>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}

      <section className="container mx-auto px-6 py-16">
        {/* SECTION TITLE */}
        <h3 className="text-4xl font-bold text-center mb-12">Skills</h3>

        {/* CONTENT WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* LEFT IMAGE */}
          <div className="flex justify-center w-full lg:w-1/3 ">
            <Image
              src="/download.png"
              width={500}
              height={300}
              alt="skills"
              className="animate-spin text-white"
              style={{ animationDuration: "20s" }}
            />
          </div>

          {/* RIGHT GRID */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:items-center">
            {data.map((item, index) => (
              <Card
                key={index}
                className="h-full flex flex-col text-center hover:scale-105 transition duration-300 "
              >
                <CardHeader className="items-center space-y-2 ">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.title}
                    className="object-contain "
                  />
                  <CardDescription className="font-medium">
                    {item.title}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 mt-auto">
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: item.skl }}
                    />
                  </div>
                </CardContent>

                <CardFooter className="justify-center text-sm font-semibold mt-auto">
                  {item.skl}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* ================= EXPERIENCE & EDUCATION ================= */}
      <section className="container mx-auto px-6 py-16 space-y-16">
        {/* EXPERIENCE */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12">Experience</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((item, index) => (
              <Card
                key={index}
                className="
            group
            relative
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-orange-500/40
            border
          "
              >
                {/* TOP HOVER BAR */}
                <div
                  className="
            absolute top-0 left-0 h-1 w-0
            bg-orange-500
            transition-all
            duration-300
            group-hover:w-full
          "
                />

                <CardHeader className="space-y-1">
                  <h4 className="text-xl font-semibold group-hover:text-orange-500 transition">
                    {item.role}
                  </h4>
                  <p className="text-sm text-gray-500">{item.company}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </CardHeader>

                <CardContent className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </CardContent>

                {/* ARROW HINT */}
                <span
                  className="
            absolute bottom-4 right-4
            text-xl
            text-orange-500
            opacity-0
            translate-x-2
            transition
            group-hover:opacity-100
            group-hover:translate-x-0
          "
                >
                  ↗
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12">Education</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="
            group
            relative
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:border-orange-500/40
            border
          "
              >
                {/* TOP HOVER BAR */}
                <div
                  className="
            absolute top-0 left-0 h-1 w-0
            bg-orange-500
            transition-all
            duration-300
            group-hover:w-full
          "
                />

                <CardHeader className="space-y-1">
                  <h4 className="text-xl font-semibold group-hover:text-orange-500 transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.college}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </CardHeader>

                <CardContent className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </CardContent>

                {/* ARROW HINT */}
                <span
                  className="
            absolute bottom-4 right-4
            text-xl
            text-orange-500
            opacity-0
            translate-x-2
            transition
            group-hover:opacity-100
            group-hover:translate-x-0
          "
                >
                  ↗
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
