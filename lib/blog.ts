import { cache } from 'react';

// Use a dynamic import approach for fs
let cachedPosts: BlogPost[] | null = null;

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
  content: string;
};

// Helper to check if code is running on server and not edge runtime
const isNodeServer = typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node;

// Dynamic imports for Node.js modules
async function getNodeModules() {
  const [fs, path, matter, unified, remarkParse, remarkGfm, remarkRehype, rehypeRaw, rehypeStringify] = await Promise.all([
    import('fs'),
    import('path'),
    import('gray-matter'),
    import('unified'),
    import('remark-parse'),
    import('remark-gfm'),
    import('remark-rehype'),
    import('rehype-raw'),
    import('rehype-stringify')
  ]);

  return {
    fs: fs.default,
    path: path.default,
    matter: matter.default,
    unified: unified.unified,
    remarkParse: remarkParse.default,
    remarkGfm: remarkGfm.default,
    remarkRehype: remarkRehype.default,
    rehypeRaw: rehypeRaw.default,
    rehypeStringify: rehypeStringify.default,
  };
}

// Use cache to prevent unnecessary file processing
export const getSortedPostsData = cache(async (): Promise<BlogPost[]> => {
  // Only run this code on the Node.js server side
  if (isNodeServer) {
    // If we already have cached posts, return them
    if (cachedPosts) {
      return cachedPosts;
    }
    
    try {
      const { fs, path, matter } = await getNodeModules();
      const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');
      
      // Get file names under /posts
      const fileNames = fs.readdirSync(postsDirectory);
      const allPostsData = fileNames
        .filter((fileName: string) => fileName.endsWith('.md'))
        .map((fileName: string) => {
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
      cachedPosts = allPostsData.sort((a: BlogPost, b: BlogPost) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
      
      return cachedPosts;
    } catch (error) {
      console.error('Error loading posts:', error);
      return [];
    }
  }
  
  // Return empty array on client side or edge runtime
  return [];
});

export const getAllPostIds = cache(async () => {
  if (isNodeServer) {
    try {
      const { fs, path } = await getNodeModules();
      const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');
      const fileNames = fs.readdirSync(postsDirectory);
      return fileNames.map((fileName: string) => {
        return {
          params: {
            id: fileName.replace(/\.md$/, ''),
          },
        };
      });
    } catch (error) {
      console.error('Error getting post IDs:', error);
      return [];
    }
  }
  return [];
});

export const getPostData = cache(async (id: string): Promise<BlogPost> => {
  if (isNodeServer) {
    try {
      const modules = await getNodeModules();
      const { fs, path, matter, unified, remarkParse, remarkGfm, remarkRehype, rehypeRaw, rehypeStringify } = modules;
      
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
    } catch (error) {
      console.error('Error loading post:', error);
    }
  }
  
  // Return empty post for client-side or edge runtime
  return {
    id: id || '',
    title: '',
    description: '',
    date: '',
    tags: [],
    coverImage: '',
    content: '',
  };
});

// Edge-compatible function for getting basic post metadata (for OG images)
export const getPostMetadata = cache(async (id: string): Promise<Omit<BlogPost, 'content'>> => {
  if (isNodeServer) {
    try {
      const { fs, path, matter } = await getNodeModules();
      const postsDirectory = path.join(process.cwd(), 'app/blogs/posts');
      const fullPath = path.join(postsDirectory, `${id}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Return only metadata, no processed content
      return {
        id,
        ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
      };
    } catch (error) {
      console.error('Error loading post metadata:', error);
    }
  }
  
  // Return empty metadata
  return {
    id: id || '',
    title: '',
    description: '',
    date: '',
    tags: [],
    coverImage: '',
  };
}); 