import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import SubjectGrid from '../components/home/SubjectGrid';
import RecentQuestions from '../components/home/RecentQuestions';
import Features from '../components/home/Features';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <SubjectGrid />
      <RecentQuestions />
      <Features />
    </Layout>
  );
};

export default HomePage;