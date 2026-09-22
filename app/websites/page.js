"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const websites = [
  {
    title: "Immortal Technovation",
    desc: "Official company website for Immortal Technovation — tech & digital solutions.",
    url: "https://www.immortaltechnovation.com/",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    title: "Chapersons Solar",
    desc: "Solar energy solutions and services landing page.",
    url: "https://chapersons.in/solar",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Immortal Tapes",
    desc: "Brand website for Immortal Tapes products and offerings.",
    url: "https://immortaltapes.com/",
    accent: "from-violet-500 to-purple-600",
  },
  {
    title: "CashProw Admin Panel",
    desc: "UAT admin panel for CashProw — finance & operations management.",
    url: "http://88.222.244.233/uat-cashprow-adminpanel/",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Shri Chitragupt Peeth",
    desc: "Temple and community website for Shri Chitragupt Peeth.",
    url: "https://www.shreechitraguptpeeth.org/",
    accent: "from-rose-500 to-red-600",
  },
];

export default function WebsitesPage() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Websites
        </h2>
        <p className="text-gray-500 mt-3">
          Live websites I have built and delivered
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((site, index) => (
          <motion.div
            key={site.url}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div
                className={`h-28 bg-gradient-to-br ${site.accent} flex items-center justify-center px-4`}
              >
                <span className="text-white text-xl font-bold text-center drop-shadow">
                  {site.title}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-4 h-[calc(100%-7rem)]">
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">
                  {site.desc}
                </p>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline break-all"
                >
                  {site.url}
                </a>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:scale-[1.02] transition"
                >
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    Visit Website →
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
