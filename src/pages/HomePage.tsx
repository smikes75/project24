import React from 'react';
import { Hero } from '../components/Hero';
import { Gallery } from '../components/Gallery';
import { ProcessInfographic } from '../components/ProcessInfographic';
import { ElfsightReviews } from '../components/ElfsightReviews';
import { HomeContact } from '../components/HomeContact';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { SEO } from '../components/SEO';
import { useSEO } from '../utils/seo';

function HomePage() {
  const seo = useSEO('home');

  return (
    <>
      <SEO {...seo} />
      <Hero />
      <ScrollingBanner />
      {/* Services section removed */}
      <Gallery />
      <ProcessInfographic />
      <ElfsightReviews />
      <HomeContact />
    </>
  );
}

export default HomePage;