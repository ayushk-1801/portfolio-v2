"use client";
import { GeistMono } from "geist/font"
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Github = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
    
    const calendarRef = useRef(null);
    const calendarInView = useInView(calendarRef, { once: true, amount: 0.2 });
    
    return (
        <div className="my-10">
            <motion.h1 
                ref={titleRef}
                className={`text-xl font-bold ${GeistMono.className} mb-4 sm:mb-8 flex items-center gap-2 flex-wrap`}
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                github
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <Link 
                        href={siteConfig.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-gray-400 transition-all hover:underline"
                    >
                        @ayushk-1801
                    </Link>
                </motion.span>
            </motion.h1>
            <motion.div 
                ref={calendarRef}
                className="w-full flex justify-center overflow-x-auto pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={calendarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="min-w-[750px] sm:min-w-0">
                    <GitHubCalendar
                        username="ayushk-1801"
                        colorScheme="dark"
                        fontSize={12}
                        blockSize={9.5}
                        blockMargin={4}
                        style={{ maxWidth: '100%' }}
                    />
                </div>
            </motion.div>
        </div>
    )
}