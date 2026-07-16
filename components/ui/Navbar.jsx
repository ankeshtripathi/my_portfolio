"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";
import { ModeToggle } from "./them-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* LOGO / PROFILE */}
        <div className="text-lg font-bold">
          <Dialog>
            <DialogTrigger asChild>
              <Avatar className="cursor-pointer hover:scale-110 transition ring-2 ring-blue-500/30 hover:ring-purple-500">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[420px] rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800">
              <DialogHeader className="text-center">
                <Avatar className="mx-auto h-24 w-24 mb-4 border-2 border-blue-500 shadow-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>

                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Ankesh Prasad
                </DialogTitle>

                <DialogDescription className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                  Full Stack Web Developer
                </DialogDescription>
              </DialogHeader>

              {/* ABOUT */}
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                Passionate Full Stack Developer with experience in building
                modern, scalable, and user-friendly web applications. I love
                clean UI, optimized backend, and real-world problem-solving.
              </div>

              {/* SKILLS */}
              <div className="mt-5">
                <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "Tailwind",
                    "shadcn/ui",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full 
                      bg-blue-500/10 text-blue-600 dark:text-blue-400 
                      font-medium hover:scale-105 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-6 text-center text-xs text-gray-400">
                Open for freelance & full-time opportunities 🚀
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group text-gray-700 dark:text-gray-200 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl px-5 hover:scale-105 transition shadow-lg">
            <a href="/Ankesh_Prasad_Resume_2.pdf" download="Ankesh_Prasad_Resume.pdf">
              Download CV
            </a>
          </Button>

          <ModeToggle />
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="group p-2 rounded-xl hover:bg-blue-500/10 transition">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 group-hover:scale-110 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="backdrop-blur-xl bg-white/80 dark:bg-black/70 border-l border-gray-200 dark:border-gray-800"
            >
              <SheetHeader className="flex flex-row items-center justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Avatar className="cursor-pointer ring-2 ring-blue-500/40 hover:scale-110 transition">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                  </DialogTrigger>

                  {/* SAME DIALOG (UNCHANGED STRUCTURE) */}
                  <DialogContent className="sm:max-w-[420px] rounded-2xl">
                    <DialogHeader className="text-center">
                      <Avatar className="mx-auto h-24 w-24 mb-4 border-2 border-blue-500">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>AP</AvatarFallback>
                      </Avatar>

                      <DialogTitle className="text-2xl font-bold">
                        Ankesh Prasad
                      </DialogTitle>

                      <DialogDescription className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                        Full Stack Web Developer
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <ModeToggle />
              </SheetHeader>

              {/* MENU */}
              <div className="mt-10 flex flex-col space-y-5 items-center">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Projects", href: "/projects" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group text-gray-700 dark:text-gray-200 font-medium"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all" />
                  </Link>
                ))}

                <Button asChild className="mt-6 rounded-full px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition">
                <a href="/Ankesh_Prasad_Resume_2.pdf" download="Ankesh_Prasad_Resume.pdf">
                  Download CV
                </a>
              </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
