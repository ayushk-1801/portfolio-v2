// Edge-compatible blog functions for OpenGraph images and other edge runtime usage
export type BlogPostMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
};

// Simple hardcoded metadata for edge runtime (you can expand this as needed)
// In production, you might want to store this in a database or external API
const blogPostsMetadata: BlogPostMetadata[] = [
  {
    id: 'example-post',
    title: 'Example Blog Post',
    description: 'This is an example blog post description',
    date: '2024-01-01',
    tags: ['example', 'blog'],
    coverImage: '/blog-images/default.jpg',
  },
  // Add more blog post metadata here as needed
];

export async function getPostMetadataForEdge(id: string): Promise<BlogPostMetadata> {
  // Try to find the post in our metadata array
  const post = blogPostsMetadata.find(p => p.id === id);
  
  if (post) {
    return post;
  }
  
  // Return default metadata if post not found
  return {
    id: id || '',
    title: 'Blog Post',
    description: 'A blog post from our portfolio',
    date: new Date().toISOString().split('T')[0],
    tags: [],
    coverImage: '/blog-images/default.jpg',
  };
}
