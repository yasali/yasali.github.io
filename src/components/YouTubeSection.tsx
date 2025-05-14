import { Youtube, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface VideoProps {
  id: string;
  title: string;
  description: string;
}

const featuredVideos: VideoProps[] = [
  {
    id: "BBikaQ8xTgE", // This is a sample video ID, replace with your own
    title: "Justin Langer controversy | Michael Clarke lashes out over 'weak' Justin Langer controversy",
    description: "Michael Clarke has defended under-fire Australia coach Justin Langer following reports his leadership style has irked some within the national team."
  },
  {
    id: "E5cSl7Ow1Ls", // This is a sample video ID, replace with your own
    title: "Shoaib Malik against Misbah ul Haq, Pakistan need a proper white ball coach",
    description: "Shoaib Malik against Misbah ul Haq, Pakistan need a proper white ball coach. Misbah should learn coaching from the Zimbabwe coach Lal Singh Rajpoot. Pakistan shambolic performance in Zimbabwe speaks a lot about how Mibah and Waqar have destroyed this Pakistan Team."
  },
  {
    id: "Cq-II7pGb7M", // This is a sample video ID, replace with your own
    title: "Rishabh Pant is a special talent | Future of Indian cricket | Pakistani Reaction",
    description: "Rishabh Pant is a special talent | Future of Indian cricket | Pakistani Reaction"
  }
];

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
    <section id="youtube" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            YouTube Channel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch my latest videos about iOS development, Swift programming, and software engineering best practices.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="aspect-video relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-red-600 rounded-full transform hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 line-clamp-2">{video.description}</p>
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
            className="bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 transition-all duration-300"
          >
            <a
              href="https://www.youtube.com/@aliyasir83"
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

const VideoCard = ({ video }: { video: VideoProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative group">
        <div className="video-container aspect-video">
          <img 
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-red-600 hover:bg-red-700 text-white h-16 w-16 transform group-hover:scale-110 transition-all duration-300">
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                <Play className="h-8 w-8" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{video.title}</h3>
        <p className="text-gray-600 line-clamp-3">{video.description}</p>
      </CardContent>
    </Card>
  );
};

export default YouTubeSection;
