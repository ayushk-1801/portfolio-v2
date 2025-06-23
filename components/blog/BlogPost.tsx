"use client";

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlogPostCardProps {
  post: BlogPost;
  isPreview?: boolean;
  index?: number;
}

export function BlogPostCard({ post, isPreview = true, index = 0 }: BlogPostCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Calculate animation delay based on index
  const delay = index * 0.1;

  return (
    <motion.div
      ref={cardRef}
      className="overflow-hidden border-b last:border-b-0"
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
      <motion.div
        className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        initial={{ backgroundColor: "rgba(23, 23, 23, 0)" }}
        transition={{ duration: 0.3 }}
      >
        <Link href={`/blogs/${post.id}`} className="text-xl font-bold">{post.title}</Link>
        <motion.span
          className="text-sm text-gray-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {new Date(post.date).toLocaleDateString()}
        </motion.span>
      </motion.div>

      <div className="px-4 sm:px-6 pb-6">
        <div className="flex flex-col md:flex-row gap-6">
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
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover bg-gray-50"
                priority={!isPreview}
              />
            </div>

            {isPreview && (
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
              </motion.div>
            )}
          </motion.div>

          <div className="w-full md:w-3/5 space-y-4">
            {/* Post description */}
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
              {post.description}
            </motion.p>

            {/* Tags as badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? {
                opacity: 1,
                transition: {
                  delay: delay + 0.2,
                  duration: 0.5
                }
              } : {}}
              className="flex flex-wrap gap-2"
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-neutral-900"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function BlogPostFull({ post }: { post: BlogPost }) {
  return (
    <article className="max-w-3xl mx-auto text-white">
      <div className="relative w-full h-64 sm:h-96 mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover bg-gray-50"
          priority
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-neutral-900 text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="prose prose-lg prose-invert max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
} 