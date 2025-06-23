import { ProjectList } from "@/components/project-list";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, featuring modern technologies like React, Next.js, TypeScript, and more.',
  openGraph: {
    title: 'Projects - Ayush Kumar Anand',
    description: 'Explore my portfolio of web development projects, featuring modern technologies like React, Next.js, TypeScript, and more.',
    type: 'website',
    images: [
      {
        url: '/profile.svg',
        width: 1200,
        height: 630,
        alt: 'Ayush Kumar Anand Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Ayush Kumar Anand',
    description: 'Explore my portfolio of web development projects, featuring modern technologies like React, Next.js, TypeScript, and more.',
    images: ['/profile.svg'],
  },
};

export default function Projects() {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects - Ayush Kumar Anand',
      description: 'A collection of web development projects and technical work.',
      url: 'https://www.ayushk.me/projects',
      author: {
        '@type': 'Person',
        name: 'Ayush Kumar Anand',
        url: 'https://www.ayushk.me',
      },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Development Projects',
        description: 'Portfolio of web development projects',
      },
    };

    return (
        <div>
            {/* Add JSON-LD structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <ProjectList />
        </div>
    )
}