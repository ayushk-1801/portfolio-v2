import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { cache } from 'react';

// Use a dynamic import approach for fs
let cachedPosts: any[] | null = null;

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
  content: string;
};

// Helper to check if code is running on server
const isServer = typeof window === 'undefined';

// Use cache to prevent unnecessary file processing
export const getSortedPostsData = cache((): BlogPost[] => {
  // Only run this code on the server side
  if (isServer) {
    // If we already have cached posts, return them
    if (cachedPosts) {
      return cachedPosts;
    }
    
    const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');
    
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
          id,
          content: matterResult.content,
          ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
        };
      });

    // Sort posts by date
    cachedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
    
    return cachedPosts;
  }
  
  // Return empty array on client side
  return [];
});

export const getAllPostIds = cache(() => {
  if (isServer) {
    const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }
  return [];
});

export const getPostData = cache(async (id: string): Promise<BlogPost> => {
  if (isServer) {
    const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use unified with remark and rehype plugins to convert markdown into HTML string
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(matterResult.content);
      
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      content: contentHtml,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
    };
  }
  
  // Return empty post for client-side
  return {
    id: '',
    title: '',
    description: '',
    date: '',
    tags: [],
    coverImage: '',
    content: '',
  };
}); 