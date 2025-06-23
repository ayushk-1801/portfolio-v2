import { getAllPostIds, getPostData } from '@/lib/blog';
import { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import { BlogPostDetail } from '@/components/blog/BlogPostDetail';

export async function generateStaticParams() {
  const posts = await getAllPostIds();
  return posts;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const post = await getPostData((await params).id);
  
  if (!post.title) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [
      {
        name: "Ayush Kumar Anand",
        url: "https://www.ayushk.me",
      },
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Ayush Kumar Anand'],
      images: [
        {
          url: post.coverImage || '/profile.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `https://www.ayushk.me/blogs/${post.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@ayushktwt',
      images: [post.coverImage || '/profile.svg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const post = await getPostData((await params).id);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage || 'https://www.ayushk.me/profile.svg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Ayush Kumar Anand',
      url: 'https://www.ayushk.me',
    },
    publisher: {
      '@type': 'Person',
      name: 'Ayush Kumar Anand',
      url: 'https://www.ayushk.me',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ayushk.me/blogs/${post.id}`,
    },
    keywords: post.tags?.join(', ') || '',
    url: `https://www.ayushk.me/blogs/${post.id}`,
  };
  
  return (
    <BlogLayout>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <BlogPostDetail post={post} />
    </BlogLayout>
  );
} 