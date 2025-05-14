import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { mediumContent } from '@/data/socialContent';

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const MediumSection = () => {
  return (
    <section id="medium" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 font-playfair bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {mediumContent.description}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mediumContent.articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 font-inter text-gray-800">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 font-inter">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-inter">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full hover:bg-gray-50 group font-inter"
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </motion.article>
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
            className="bg-gray-800 hover:bg-gray-900 text-white transform hover:scale-105 transition-all duration-300 font-inter px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
          >
            <a
              href={mediumContent.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Articles
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumSection;
