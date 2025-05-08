"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate(
      "li",
      { opacity: 1, y: 0 },
      { 
        duration: 0.3,
        delay: stagger(0.05),
        ease: "easeOut" 
      }
    );
  }, [animate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      rotate: 2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.nav
      className="flex justify-between items-center py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={scope}
    >
      <motion.div
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
      >
        <Image 
          src="/logo.svg" 
          alt="logo" 
          width={48} 
          height={48} 
          className="cursor-pointer" 
          onClick={() => router.push("/")}
        />
      </motion.div>
      <ul className="flex items-center gap-6">
        {["about", "projects", "blogs"].map((item) => (
          <motion.li
            key={item}
            className="list-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              className="relative font-medium  transition-all hover:text-gray-300"
              href={item === "about" ? "/" : `/${item}`}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};
