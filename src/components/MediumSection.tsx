import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaMedium } from 'react-icons/fa';

const MediumSection = () => {
  // Sample articles - replace with your own Medium articles
  const articles = [
    {
      id: 1,
      title: "Scrolling Issues in tvOS: A Workaround for Long Text",
      excerpt: "Scrolling long text on tvOS presents a unique challenge due to the system's focus-driven navigation model. Unlike iOS, where users can...",
      date: "March 23, 2025",
      readTime: "2 min read",
      link: "https://medium.com/@aliyasirali/scrolling-issues-in-tvos-a-workaround-for-long-text-befe3ed6884b"
    },
    {
      id: 2,
      title: "Safely Using nonisolated(unsafe) to Incrementally Adopt Swift's Strict Concurrency Model",
      excerpt: "When adopting Swift's strict concurrency model, you'll often encounter situations where a single change to a shared property ripples across...",
      date: "Jan 3, 2025",
      readTime: "2 min read",
      link: "https://medium.com/@aliyasirali/understanding-nonisolated-unsafe-in-swift-incremental-adoption-of-strict-concurrency-2cbb61c9adf4"
    },
    {
      id: 3,
      title: "Mastering Swift 6 Strict Concurrency: A Step-by-Step Approach Matters",
      excerpt: "Concurrency has always been a challenging aspect of software development, particularly in environments where performance...",
      date: "Jan 2, 2025",
      readTime: "4 min read",
      link: "https://medium.com/@aliyasirali/embracing-swift-6-strict-concurrency-why-a-step-by-step-approach-matters-aa7696235797"
    }
  ];

  return (
    <section id="medium" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Medium Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I write articles about my professional experiences, insights, and industry trends. Check out some of my latest publications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="font-medium">{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                </div>
                <div className="px-6 pb-6">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
                  >
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <FaMedium className="mr-2 h-5 w-5" />
                      Read on Medium
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button 
            asChild
            className="bg-gray-800 hover:bg-gray-700 text-white transform hover:scale-105 transition-all duration-300"
          >
            <a href="https://medium.com/@aliyasirali" target="_blank" rel="noopener noreferrer">
              <FaMedium className="mr-2 h-5 w-5" />
              View All My Articles
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumSection;
