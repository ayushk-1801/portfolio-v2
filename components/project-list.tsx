"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ReactNode, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GeistMono } from "geist/font";

const Badge = ({ children }: { children: ReactNode }) => (
    <span
        className="inline-flex items-center px-1.5 py-1 rounded-md text-xs font-medium bg-neutral-900"
    >
        {children}
    </span>
);

type ProjectType = typeof siteConfig.projects[0];

// ProjectCard component with enhanced animations
const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    // Calculate animation delay based on index
    const delay = index * 0.1;

    return (
        <motion.div
            ref={cardRef}
            className="overflow-hidden border-b"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: delay,
                }
            } : {}}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
            }}
        >
            {/* Project header with dark background */}
            <motion.div
                className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                initial={{ backgroundColor: "rgba(23, 23, 23, 0)" }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-xl font-bold">{project.name}</h2>
                {project.date && (
                    <motion.span
                        className="text-sm text-gray-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                    >
                        {project.date}
                    </motion.span>
                )}
            </motion.div>

            <div className="px-4 sm:px-6 pb-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {project.videoLink ? (
                        <motion.div
                            className="w-full md:w-2/5 flex flex-col gap-4"
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20
                            }}
                        >
                            <div className="relative w-full aspect-video overflow-hidden rounded-md">
                                {project.videoLink.includes('cloudinary.com/embed') ? (
                                    <iframe
                                        src={project.videoLink}
                                        title={`${project.name} video`}
                                        className="absolute w-full h-full"
                                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        src={project.videoLink}
                                        title={`${project.name} video`}
                                        className="absolute w-full h-full object-cover"
                                        controls
                                        preload="metadata"
                                    >
                                        <track kind="captions" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                            
                            {/* Links - moved below video */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: delay + 0.3,
                                        duration: 0.5
                                    }
                                } : {}}
                            >
                                {project.liveLink && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }} className="flex-1">
                                        <Button
                                            asChild
                                            variant="outline"
                                            effect="shineHover"
                                            size="sm"
                                            icon={IoLink}
                                            iconPlacement="left"
                                            className="w-full justify-center"
                                        >
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Live Demo
                                            </Link>
                                        </Button>
                                    </motion.div>
                                )}

                                {project.githubLink && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.5 }} className="flex-1">
                                        <Button
                                            asChild
                                            variant="outline"
                                            effect="shineHover"
                                            size="sm"
                                            icon={FaGithub}
                                            iconPlacement="left"
                                            className="w-full justify-center"
                                        >
                                            <Link
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </Link>
                                        </Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    ) : project.imageLink && (
                        <motion.div
                            className="w-full md:w-2/5 flex flex-col gap-4"
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20
                            }}
                        >
                            <div className="relative w-full aspect-video overflow-hidden rounded-md">
                                <Image
                                    src={project.imageLink}
                                    alt={project.name}
                                    fill
                                    className="object-cover bg-white"
                                />
                            </div>
                            
                            {/* Links - moved below image */}
                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: delay + 0.3,
                                        duration: 0.5
                                    }
                                } : {}}
                            >
                                {project.liveLink && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.4 }} className="flex-1">
                                        <Button
                                            asChild
                                            variant="outline"
                                            effect="shineHover"
                                            size="sm"
                                            icon={IoLink}
                                            iconPlacement="left"
                                            className="w-full justify-center"
                                        >
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Live Demo
                                            </Link>
                                        </Button>
                                    </motion.div>
                                )}

                                {project.githubLink && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 0.5 }} className="flex-1">
                                        <Button
                                            asChild
                                            variant="outline"
                                            effect="shineHover"
                                            size="sm"
                                            icon={FaGithub}
                                            iconPlacement="left"
                                            className="w-full justify-center"
                                        >
                                            <Link
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </Link>
                                        </Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}

                    <div className="w-full md:w-3/5 space-y-4">
                        {/* Project description */}
                        <motion.p
                            className="text-gray-500 dark:text-gray-300 text-wrap"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: delay + 0.1,
                                    duration: 0.5
                                }
                            } : {}}
                        >
                            {project.description}
                        </motion.p>

                        {/* Tech stack as badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? {
                                opacity: 1,
                                transition: {
                                    delay: delay + 0.2,
                                    duration: 0.5
                                }
                            } : {}}
                        >
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, techIndex: number) => (
                                    <Badge key={techIndex}>
                                        <div className="flex items-center gap-1.5">
                                            <Image
                                                src={tech.src}
                                                alt={tech.name}
                                                width={16}
                                                height={16}
                                            />
                                            <span>{tech.name}</span>
                                        </div>
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const ProjectList = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Use scroll progress to create a parallax effect
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    return (
        <div>
            <motion.h1
                className={`text-2xl font-bold ${GeistMono.className}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                }}
            >
                projects
            </motion.h1>
            <motion.div
                ref={containerRef}
                className="mt-8 space-y-12"
                style={{ opacity }}
            >
                <AnimatePresence>
                    {siteConfig.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}