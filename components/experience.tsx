"use client";
import { GeistMono } from "geist/font";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.1 });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      key={index}
      ref={itemRef}
      className="flex items-start gap-4 p-4 rounded-lg transition-all duration-200 border border-transparent"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={itemVariants}
    >
      {/* Logo */}
      <motion.div className="flex-shrink-0 w-14 h-14 relative flex items-center justify-center rounded-lg overflow-hidden ">
        {experience.logo && (
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            className="object-contain rounded-lg"
          />
        )}
      </motion.div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-200">
              {experience.position}
            </h3>
            <p className="text-base text-gray-400">
              {experience.website ? (
                <Link
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {experience.company}
                </Link>
              ) : (
                experience.company
              )}
            </p>
          </div>

          {/* Location and Date */}
          <div className="text-right flex-shrink-0">
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {experience.location || "Remote"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {experience.from} - {experience.to}
            </p>
          </div>
        </div>
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
        delayChildren: 0.3,
      },
    },
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
        className="space-y-1"
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
