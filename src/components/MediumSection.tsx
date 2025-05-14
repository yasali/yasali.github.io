import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Building Scalable iOS Applications",
    excerpt: "Learn the best practices for creating scalable and maintainable iOS applications using modern architecture patterns.",
    date: "March 15, 2024",
    readTime: "8 min read",
    url: "https://medium.com/@yourusername/article1"
  },
  {
    id: 2,
    title: "SwiftUI vs UIKit: Making the Right Choice",
    excerpt: "A comprehensive comparison between SwiftUI and UIKit to help you choose the right framework for your next iOS project.",
    date: "March 10, 2024",
    readTime: "10 min read",
    url: "https://medium.com/@yourusername/article2"
  },
  {
    id: 3,
    title: "Advanced Swift Concurrency",
    excerpt: "Deep dive into Swift's concurrency model and how to effectively use async/await in your iOS applications.",
    date: "March 5, 2024",
    readTime: "12 min read",
    url: "https://medium.com/@yourusername/article3"
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
    <section id="medium" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read my latest articles about iOS development, software engineering, and technology trends.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full hover:bg-gray-50 group"
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
            className="bg-gray-800 hover:bg-gray-900 text-white transform hover:scale-105 transition-all duration-300"
          >
            <a
              href="https://medium.com/@yourusername"
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
