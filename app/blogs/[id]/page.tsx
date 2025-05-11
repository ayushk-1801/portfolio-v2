import { getAllPostIds, getPostData } from '@/lib/blog';
import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { BlogPostDetail } from '@/components/blog/BlogPostDetail';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const post = await getPostData((await params).id);
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [post.coverImage],
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const post = await getPostData((await params).id);
  
  return (
    <BlogLayout>
      <BlogPostDetail post={post} />
    </BlogLayout>
  );
} 