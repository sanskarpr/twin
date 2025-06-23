
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionVisionSection from '@/components/home/MissionVisionSection';
import CompanyGoalsSection from '@/components/home/CompanyGoalsSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import NewsSection from '@/components/home/NewsSection';
import CallToActionSection from '@/components/home/CallToActionSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionVisionSection />
      <CompanyGoalsSection />
      <WhatWeDoSection />
      <NewsSection />
      <CallToActionSection />
    </Layout>
  );
};

export default Home;
