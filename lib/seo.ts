/**
 * SEO utilities for Next.js portfolio website
 */

export const seoConfig = {
  defaultTitle: 'Ayush Kumar Anand - Full Stack Developer',
  titleTemplate: '%s | Ayush Kumar Anand',
  defaultDescription: 'Full Stack Developer & CSAI undergrad at IIIT Delhi with a passion for building useful and scalable products.',
  siteUrl: 'https://www.ayushk.me',
  defaultImage: '/profile.svg',
  twitterHandle: '@ayushktwt',
  googleVerification: 'your-google-verification-code', // Replace with actual verification code
};

/**
 * Generate canonical URL for a given path
 */
export function generateCanonicalUrl(path: string = ''): string {
  return `${seoConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Generate Open Graph image URL for dynamic content
 */
export function generateOgImageUrl(title: string, description?: string): string {
  const params = new URLSearchParams();
  params.set('title', title);
  if (description) params.set('description', description);
  
  return `${seoConfig.siteUrl}/api/og?${params.toString()}`;
}

/**
 * Truncate text for meta descriptions with optimal length
 */
export function truncateForMeta(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

/**
 * Extract keywords from content
 */
export function extractKeywords(content: string, maxKeywords: number = 10): string[] {
  // Remove common stop words
  const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
  
  const words = content.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.includes(word));
  
  // Count word frequency
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
