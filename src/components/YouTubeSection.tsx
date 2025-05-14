import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { youtubeContent } from '@/data/socialContent';

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

const YouTubeSection = () => {
  return (
    <section id="youtube" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
            YouTube Channel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {youtubeContent.description}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {youtubeContent.videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-red-600 rounded-full transform hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <Play className="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 font-inter text-gray-800">{video.title}</h3>
                <p className="text-gray-600 line-clamp-2 font-inter">{video.description}</p>
              </div>
            </motion.div>
          ))}
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
            className="bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 transition-all duration-300 font-inter px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
          >
            <a
              href={youtubeContent.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Channel
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
