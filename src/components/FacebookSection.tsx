import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { facebookContent } from '@/data/socialContent';
import { Bell, Users, Video } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const iconMap = {
  Bell: Bell,
  Users: Users,
  Video: Video
};

const FacebookSection = () => {
  return (
    <section id="facebook" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 font-playfair tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <FaFacebook className="h-10 w-10 text-blue-600" />
            Facebook Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed tracking-wide">
            {facebookContent.description}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facebookContent.posts.map((post) => {
            const Icon = iconMap[post.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4 font-space text-gray-800">{post.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-inter leading-relaxed">{post.description}</p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 font-inter"
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 font-inter px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
          >
            <a
              href={facebookContent.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Facebook
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacebookSection;
