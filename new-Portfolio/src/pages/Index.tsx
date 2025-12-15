import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContributionsSection from '@/components/ContributionsSection';
import GitHubGraph from '@/components/GitHubGraph';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SocialLinks />
        <AboutSection />
        <GitHubGraph />
        <TechStackSection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
