"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog/BlogPost";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-medium mb-2">No posts available</h2>
        <p className="text-gray-600 dark:text-gray-400">Check back later for new content!</p>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
      />
      
      <div className="space-y-0">
        {posts.map((post, index) => (
          <BlogPostCard 
            key={post.id} 
            post={post} 
            index={index}
          />
        ))}
      </div>
    </>
  );
} 