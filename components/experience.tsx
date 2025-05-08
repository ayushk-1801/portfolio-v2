"use client";
import { GeistMono } from "geist/font";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceItem = ({ experience, index }: { experience: any; index: number }) => {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, amount: 0.1 });
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    
    return (
        <motion.div 
            key={index}
            ref={itemRef}
            className="flex flex-col sm:flex-row gap-4 p-3 sm:p-4 rounded-lg border border-transparent hover:border-border/30 transition-colors"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={itemVariants}
        >
            <motion.div 
                className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 relative flex items-center justify-center rounded-md overflow-hidden border border-border bg-background/50"
                whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.5 } }}
            >
                {experience.logo && (
                    <Image 
                        src={experience.logo} 
                        alt={`${experience.company} logo`} 
                        width={56} 
                        height={56} 
                        className="object-contain p-1"
                    />
                )}
            </motion.div>
            <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold">{experience.position}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <span className="font-medium text-sm sm:text-base">
                        {experience.website ? (
                            <Link href={experience.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                                {experience.company}
                            </Link>
                        ) : (
                            experience.company
                        )}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                        {experience.from} - {experience.to}
                    </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {experience.description}
                </p>
            </div>
        </motion.div>
    );
};

export const Experience = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
    
    const containerRef = useRef(null);
    const containerInView = useInView(containerRef, { once: true, amount: 0.1 });
    
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="my-8 sm:my-10">
            <motion.h1 
                ref={titleRef}
                className={`text-xl font-bold ${GeistMono.className} mb-4 sm:mb-6`}
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                experience
            </motion.h1>
            <motion.div 
                ref={containerRef}
                className="space-y-6 sm:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={containerInView ? "show" : "hidden"}
            >
                {siteConfig.experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} index={index} />
                ))}
            </motion.div>
        </div>
    );
};