import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import CV from '@/components/CV';
import YouTubeSection from '@/components/YouTubeSection';
import FacebookSection from '@/components/FacebookSection';
import MediumSection from '@/components/MediumSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <CV />
        <YouTubeSection />
        <FacebookSection />
        <MediumSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
