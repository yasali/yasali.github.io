import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-red-500 to-orange-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Avatar Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse w-52 h-52 md:w-64 md:h-64"></div>
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="/avatar.png"
                    alt="Yasir Ali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-playfair tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Yasir Ali
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-space text-gray-600 mb-8 tracking-wide"
            >
              AI Enthusiast | Sr. Software Engineer | Engineering Leader
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-inter leading-relaxed tracking-wide"
          >
            A seasoned software engineer with 15 years of experience in mobile development, full-stack engineering, and AWS cloud solutions. Leading high-performance teams while exploring AI and machine learning technologies to create innovative, user-centric applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              className="bg-gray-900 hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-300 font-inter px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl group"
            >
              <a href="/resume">
                <Download className="mr-2 h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" />
                View Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300 font-inter px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl group"
            >
              <a href="#youtube">
                <Youtube className="mr-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                Watch Videos
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
            >
              <span className="font-inter">Scroll to learn more</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
