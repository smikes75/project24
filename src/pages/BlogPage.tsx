import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BlogList } from '../components/blog/BlogList';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';

function BlogPage() {
  const { t } = useTranslation();
  const seoTranslations = {
    cs: {
      title: "Blog o záchraně dat | DataHelp.eu",
      description: "Odborné články o záchraně dat, RAID systémech a datových úložištích. Rady a tipy od profesionálů v oboru záchrany dat.",
      keywords: "blog záchrana dat, články obnova dat, raid recovery blog, hdd oprava blog, ssd záchrana blog"
    },
    en: {
      title: "Data Recovery Blog | DataHelp.eu",
      description: "Expert articles about data recovery, RAID systems and data storage. Tips and advice from data recovery professionals.",
      keywords: "data recovery blog, data recovery articles, raid recovery blog, hdd repair blog, ssd recovery blog"
    },
    de: {
      title: "Datenrettung Blog | DataHelp.eu",
      description: "Fachbeiträge über Datenrettung, RAID-Systeme und Datenspeicher. Tipps und Ratschläge von Datenrettungsexperten.",
      keywords: "datenrettung blog, datenwiederherstellung artikel, raid recovery blog, festplatten reparatur blog, ssd rettung blog"
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={`https://datahelp.eu/${currentLang}/blog`}
        ogType="blog"
      />
      <PageHeader
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        backgroundImage="blog-bg.jpg"
      />
      <PageHeader
        title="Data Recovery Blog"
        subtitle="Expert insights, technical guides, and industry news"
        backgroundImage="blog-bg.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <BlogList />
      </div>
    </div>
  );
}

export default BlogPage;