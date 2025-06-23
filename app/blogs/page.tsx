import { getSortedPostsData } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";
import { BlogList } from "@/components/blog/BlogList";
import { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles and thoughts about web development, programming, and technology by Ayush Kumar Anand.',
  openGraph: {
    title: 'Blog - Ayush Kumar Anand',
    description: 'Technical articles and thoughts about web development, programming, and technology.',
    type: 'website',
    images: [
      {
        url: '/profile.svg',
        width: 1200,
        height: 630,
        alt: 'Ayush Kumar Anand Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Ayush Kumar Anand',
    description: 'Technical articles and thoughts about web development, programming, and technology.',
    images: ['/profile.svg'],
  },
};

export default async function Blogs() {
    const allPosts = await getSortedPostsData();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${siteConfig.name} - Blog`,
      description: 'Technical articles and thoughts about web development, programming, and technology.',
      url: 'https://www.ayushk.me/blogs',
      author: {
        '@type': 'Person',
        name: 'Ayush Kumar Anand',
        url: 'https://www.ayushk.me',
      },
      blogPost: allPosts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        url: `https://www.ayushk.me/blogs/${post.id}`,
        datePublished: post.date,
        author: {
          '@type': 'Person',
          name: 'Ayush Kumar Anand',
        },
      })),
    };

    return (
        <BlogLayout>
            {/* Add JSON-LD structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            {allPosts.length > 0 ? (
                <BlogList posts={allPosts} />
            ) : (
                <div className="text-center py-12">
                    <h2 className="text-xl font-medium mb-2">No posts yet</h2>
                    <p className="text-gray-600 dark:text-gray-400">Check back later for new content!</p>
                </div>
            )}
        </BlogLayout>
    );
}