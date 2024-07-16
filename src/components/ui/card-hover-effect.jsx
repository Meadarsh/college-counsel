"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6  lg:p-10 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.route||'#'}
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-700/20 dark:bg-slate-800/[0.5] block  rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.1 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
          <div  className='flex overflow-clip bg-white flex-col px-2 w-40 lg:w-52 h-28  rounded-lg justify-center lg:items-center border'>
        <Image height={60} width={120} src={item.logoimg} alt="College logo" className='w-auto h-auto mb-2' />
        <p className=' leading-tight font-bold text-gray-600 text-sm '>{item.Offeredcourse} Courses</p>
        <h4 className=' whitespace-nowrap text-[14px]'>{item.collegename}</h4>
       </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        " overflow-hidden relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-0">{children}</div>
      </div>
    </div>
  );
};


