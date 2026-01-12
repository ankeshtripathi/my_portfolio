"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./button";
import { ModeToggle } from "./them-btn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-lg font-bold">Ankesh</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>

          <Button>Download CV</Button>
          <ModeToggle />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="focus:outline-none">
                <svg
                  className="w-6 h-6"
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

            <SheetContent side="right">
              <SheetHeader className="flex flex-row items-center justify-between gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>

                <ModeToggle />
              </SheetHeader>

              <div className="mt-6 flex flex-col space-y-4 text-sm items-center justify-center">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>

                <Button>Download CV</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
