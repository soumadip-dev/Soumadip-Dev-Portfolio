import AboutSection from '@/components/AboutSection';
import ContributionGraph from '@/components/ContributionGraph';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import ProjectsSection from '@/components/ProjectsSection';
import SocialLinks from '@/components/SocialLinks';
import TechStack from '@/components/TechStack';
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 pb-20">
        <ProfileCard />
        <SocialLinks />
        <AboutSection />
        <ContributionGraph />
        <TechStack />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Index;
