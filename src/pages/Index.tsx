
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CV from '@/components/CV';
import YouTubeSection from '@/components/YouTubeSection';
import FacebookSection from '@/components/FacebookSection';
import MediumSection from '@/components/MediumSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
