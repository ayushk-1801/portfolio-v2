"use client"

import { motion } from "framer-motion";
import { GeistMono } from "geist/font";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="">
      <main className="">
        <motion.h1
          className={`text-2xl font-bold mb-8 ${GeistMono.className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          blogs
        </motion.h1>
        {children}
      </main>
    </div>
  );
} 