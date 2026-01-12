"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

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
      <section className="container mx-auto px-4 py-10 lg:flex lg:items-center lg:space-x-8 lg:h-128">
        {/* Left Content */}
        <div className="w-full md:text-center  lg:w-1/2 lg:text-left lg:-mt-8 space-y-2">
          <h1 className="text-3xl text-orange-400"> Hello , I'm</h1>

          <div className="text-6xl font-bold  sm:text-4xl">
            <span>Ankesh</span>
            <span>Prasad</span>
          </div>
          <h4 className="text-gray-400 ">Web Developer</h4>
          <Button>Contact ME</Button>
          {/* Search Box */}
        </div>

        {/* Right Image */}
        <div className="mt-4 w-full lg:mt-0 lg:w-1/2">
          <Image
            src="/pro.jpg"
            width={1200}
            height={1200}
            alt="no image"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex items-center justify-center mb-10">
          <h3 className="text-3xl font-bold">Services</h3>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card
              key={index}
              className="
          h-full
          flex flex-col
          justify-center
          items-center
          text-center
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-xl
        "
            >
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-4xl mb-2 hover:text-orange-400 transition">
                  {item.icon}
                </CardTitle>
                <CardDescription className="text-lg font-semibold hover:text-orange-400 transition">
                  {item.title}
                </CardDescription>
              </CardHeader>

              <CardFooter className="text-sm text-gray-600 px-6">
                {item.desc}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-24 relative">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-orange-500 mb-10">
            TOP PROJECT
          </h3>

          <div
            className="
        w-full
        max-w-5xl
        max-h-[70vh]
        bg-gray-100
        rounded-2xl
        overflow-y-auto
        border
        border-gray-300
        p-4
      "
          >
            <div className="flex flex-col gap-6">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`project-${idx}`}
                  className="
              w-full
              rounded-xl
              object-cover
              hover:scale-[1.02]
              transition
              duration-300
            "
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
