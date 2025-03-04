import { BlogPost } from '../types/blog';

// Mock data for case studies
const blogPosts: BlogPost[] = [
  {
    slug: 'raid-data-recovery-guide',
    title: 'Complete Guide to RAID Data Recovery',
    excerpt: 'Learn about different RAID configurations and recovery techniques for various failure scenarios.',
    date: 'March 15, 2024',
    author: 'John Smith',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    tags: ['RAID', 'Data Recovery', 'Technical Guide'],
    seoDescription: 'Comprehensive guide to RAID data recovery, including configurations and recovery techniques.',
    content: `
      <h2>Understanding RAID Systems</h2>
      <p>RAID (Redundant Array of Independent Disks) systems are crucial for business data storage...</p>
      
      <h3>Common RAID Configurations</h3>
      <ul>
        <li>RAID 0: Striping without redundancy</li>
        <li>RAID 1: Mirroring for redundancy</li>
        <li>RAID 5: Striping with distributed parity</li>
        <li>RAID 6: Striping with double parity</li>
        <li>RAID 10: Combination of mirroring and striping</li>
      </ul>

      <h3>Recovery Techniques</h3>
      <p>The recovery process depends on the type of failure and RAID configuration...</p>
    `,
    locale: 'en'
  }
];

export const getBlogPosts = async (locale: string): Promise<BlogPost[]> => {
  // Return mock data filtered by locale
  return blogPosts.filter(post => post.locale === locale);
};

export const getBlogPost = async (slug: string, locale: string): Promise<BlogPost | null> => {
  // Return mock post filtered by slug and locale
  return blogPosts.find(post => post.slug === slug && post.locale === locale) || null;
};