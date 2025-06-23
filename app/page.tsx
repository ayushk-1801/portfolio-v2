import { Github } from "@/components/github";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ayush Kumar Anand',
    url: 'https://www.ayushk.me',
    image: 'https://www.ayushk.me/profile.svg',
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'IIIT Delhi',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'IIIT Delhi',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript', 
      'React',
      'Next.js',
      'Node.js',
      'Full Stack Development',
      'Web Development',
      'Software Engineering',
    ],
    description: siteConfig.description,
    email: siteConfig.links.email,
  };

  return (
    <div>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <Skills />
      <Experience />
      <Github />
    </div>
  );
}
