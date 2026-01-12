import { Card } from '@/components/ui/card';
import React from 'react'
import Image from 'next/image';
const Projects = () => {
  const project = [
    {
      image: "/tm.webp",
    },
    {
      image: "/vns.webp",
    },
    
    {
      image: "/af.webp",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-10  lg:items-center lg:space-x-8 lg:h-128">
      <div className="text-center mb-14 relative">
        <h3
          className="text-orange-500 font-bold tracking-[0.3em] 
                 lg:text-4xl sm:text-2xl text-xl
                 inline-block relative"
        >
          Project
          <span
            className="absolute left-1/2 -bottom-3 w-16 h-1 
                     bg-orange-500 rounded-full 
                     -translate-x-1/2"
          ></span>
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {project.map((item, index) => {
          return (
            <div className="group" key={index}>
              <Card
                className="
    relative
    bg-transparent
    border-0
    shadow-none
    group
  "
              >
                {/* WHITE FRAME */}
                <div
                  className="
      relative
      rounded-[28px]
      bg-white
      p-3
      transition
      group-hover:-translate-y-1
      group-hover:shadow-2xl
    "
                >
                  {/* IMAGE */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[22px]">
                    <Image
                      src={item.image}
                      alt="project"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* ARROW BUTTON */}
                  <div
                    className="
        absolute
        -bottom-5
        -right-5
        w-14
        h-14
        bg-white
        text-black
        rounded-full
        flex
        items-center
        justify-center
        shadow-xl
        transition
        group-hover:scale-110
      "
                  >
                    ↗
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects
