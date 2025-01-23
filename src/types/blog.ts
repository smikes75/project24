export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  tags: string[];
  excerpt: string;
  seoDescription: string;
  content: string;
  locale: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}