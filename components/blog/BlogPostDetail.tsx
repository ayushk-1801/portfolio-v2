"use client";

import { BlogPost } from '@/lib/blog';
import { BlogPostFull } from '@/components/blog/BlogPost';
import { motion } from 'framer-motion';

export function BlogPostDetail({ post }: { post: BlogPost }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2 
        }}
      >
        <BlogPostFull post={post} />
      </motion.div>
    </>
  );
} 