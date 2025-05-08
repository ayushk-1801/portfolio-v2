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
            className="flex flex-col sm:flex-row gap-5 p-4 sm:p-5 rounded-lg border border-transparent hover:border-border/30 transition-colors"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={itemVariants}
        >
            <motion.div 
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center rounded-md overflow-hidden border border-border bg-background/50"
                whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.5 } }}
            >
                {experience.logo && (
                    <Image 
                        src={experience.logo} 
                        alt={`${experience.company} logo`} 
                        width={64} 
                        height={64} 
                        className="object-contain max-w-full h-auto"
                    />
                )}
            </motion.div>
            <div className="flex-1">
                <h3 className="text-xl sm:text-xl font-semibold">{experience.position}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-2">
                    <span className="font-medium text-lg sm:text-lg">
                        {experience.website ? (
                            <Link href={experience.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                                {experience.company}
                            </Link>
                        ) : (
                            experience.company
                        )}
                    </span>
                    <span className="text-base sm:text-base text-gray-500">
                        {experience.from} - {experience.to}
                    </span>
                </div>
                <p className="mt-3 text-base sm:text-base text-gray-600 dark:text-gray-300">
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
        <div className="my-10 sm:my-12">
            <motion.h1 
                ref={titleRef}
                className={`text-2xl sm:text-2xl font-bold ${GeistMono.className} mb-5 sm:mb-6`}
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                experience
            </motion.h1>
            <motion.div 
                ref={containerRef}
                className="space-y-8 sm:space-y-8"
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