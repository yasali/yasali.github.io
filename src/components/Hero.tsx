
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="about" className="pt-10 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Yasir Ali</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
            With over 12 years of experience delivering high-impact solutions across both large-scale and mid-sized projects, I specialize in leading architecture, development workflows, and continuous delivery initiatives. I focus on building scalable, maintainable systems that support long-term growth and align with strategic business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="font-medium"
              >
                <a href="#cv">
                  View My Resume <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="font-medium"
              >
                <a href="#youtube">
                  Check My YouTube <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                <img 
                  src="/avatar.png" 
                  alt="Yasir Ali" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
