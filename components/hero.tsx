"use client";
import { GeistMono } from "geist/font";
import { ShinyButton } from "./magicui/shiny-button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="border-b border-border pb-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-end">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl md:text-3xl font-bold ${GeistMono.className}`}
          >
            Ayush Kumar Anand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 my-4"
          >
            I&apos;m a 19y/o full stack web developer and a CSAI undergrad at
            IIIT Delhi & I build cool stuff. I&apos;m also a{" "}
            <span className="underline text-yellow-400">
              Smart India Hackathon
            </span>{" "}
            &apos;24 finalist. I love learning new tech. <br />
            <br />
            I&apos;m currently building on{" "}
            <span className="underline text-yellow-400">solana</span> and am open
            to work and freelance opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-start"
          >
            <ShinyButton
              className={`mt-4 ${GeistMono.className}`}
              onClick={() => window.open(siteConfig.links.caldotcom, "_blank")}
            >
              <div className="flex items-center gap-2">
                <Image src="/meet.svg" alt="meet" width={20} height={20} />
                <span>Book a meet</span>
              </div>
            </ShinyButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="col-span-1 order-first md:order-last mb-4 md:mb-0"
        >
          <Image
            src="/profile.svg"
            alt="profile"
            width={100}
            height={100}
            className="w-full max-w-[250px] mx-auto md:w-full"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};
