"use client";
import { GeistMono } from "geist/font";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Tooltip } from "@/components/ui/tooltip";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const TechItem = ({ tech, index }: { tech: typeof siteConfig.techStack[0]; index: number }) => {
        return (
            <motion.div 
                className="flex items-center justify-center"
                variants={item}
                transition={{ duration: 0.4, delay: index * 0.03 }}
            >
                <Tooltip content={tech.name} placement="top" delay={100}>
                    <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-lg bg-background/50 transition-colors duration-200">
                        <Image
                            src={tech.src}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="object-contain max-h-8 max-w-8 sm:max-h-10 sm:max-w-10"
                        />
                    </div>
                </Tooltip>
            </motion.div>
        );
    };

    return (
        <div className="w-full ">
            <motion.h1 
                ref={titleRef}
                className={`text-2xl font-bold ${GeistMono.className} mb-6`}
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                tech stack
            </motion.h1>
            <motion.div 
                ref={containerRef}
                className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 sm:gap-4"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                {siteConfig.techStack.map((tech, index) => (
                    <TechItem key={tech.name} tech={tech} index={index} />
                ))}
            </motion.div>
        </div>
    );
};
