"use client";
import { GeistMono } from "geist/font";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
    const firstRow = siteConfig.techStack.slice(0, Math.ceil(siteConfig.techStack.length / 2));
    const secondRow = siteConfig.techStack.slice(Math.ceil(siteConfig.techStack.length / 2));
    
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const TechItem = ({ tech, index }: { tech: typeof siteConfig.techStack[0]; index: number }) => {
        const itemRef = useRef(null);
        const isItemInView = useInView(itemRef, { once: true, amount: 0.1 });
        
        return (
            <motion.div 
                ref={itemRef}
                className="flex-shrink-0 px-3 sm:px-4"
                whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={isItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
            >
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <motion.div 
                        className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={tech.src}
                            alt={tech.name}
                            width={56}
                            height={56}
                            className="object-contain max-h-full max-w-full"
                        />
                    </motion.div>
                    <span className={`text-xs text-gray-500 ${GeistMono.className}`}>
                        {tech.name}
                    </span>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="w-full mb-10">
            <motion.h1 
                ref={titleRef}
                className={`text-2xl font-bold ${GeistMono.className} mb-4`}
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                tech stack
            </motion.h1>
            <motion.div 
                ref={containerRef}
                className="relative w-full overflow-hidden rounded-lg px-2 sm:px-4 space-y-1 sm:space-y-2"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="relative w-full">
                    <Marquee pauseOnHover className="[--duration:40s] py-4 sm:py-6">
                        {firstRow.map((tech, index) => (
                            <TechItem key={tech.name} tech={tech} index={index} />
                        ))}
                    </Marquee>
                </div>

                <div className="relative w-full">
                    <Marquee reverse pauseOnHover className="[--duration:40s] py-4 sm:py-6">
                        {secondRow.map((tech, index) => (
                            <TechItem key={tech.name} tech={tech} index={secondRow.length - index - 1} />
                        ))}
                    </Marquee>
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
            </motion.div>
        </div>
    );
};
