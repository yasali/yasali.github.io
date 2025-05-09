
import { Button } from '@/components/ui/button';

const MediumSection = () => {
  // Sample articles - replace with your own Medium articles
  const articles = [
    {
      id: 1,
      title: "Scrolling Issues in tvOS: A Workaround for Long Text",
      excerpt: "Scrolling long text on tvOS presents a unique challenge due to the system’s focus-driven navigation model. Unlike iOS, where users can...",
      date: "March 23, 2025",
      readTime: "2 min read",
      link: "https://medium.com/@aliyasirali/scrolling-issues-in-tvos-a-workaround-for-long-text-befe3ed6884b"
    },
    {
      id: 2,
      title: "Safely Using nonisolated(unsafe) to Incrementally Adopt Swift’s Strict Concurrency Model",
      excerpt: "When adopting Swift’s strict concurrency model, you’ll often encounter situations where a single change to a shared property ripples across...",
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
    <section id="medium" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Medium Articles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I write articles about my professional experiences, insights, and industry trends. Check out some of my latest publications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
              </div>
              <div className="px-6 pb-6">
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="mr-2 h-5 w-5" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M4.37 7.46h15.27v1.4H4.37z"></path>
                      <path d="M4.37 9.86h15.27v1.4H4.37z"></path>
                      <path d="M4.37 12.26h15.27v1.4H4.37z"></path>
                      <path d="M4.37 14.66h7.63v1.4H4.37z"></path>
                    </svg>
                    Read on Medium
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            asChild
            className="font-medium"
          >
            <a href="https://medium.com/@aliyasirali" target="_blank" rel="noopener noreferrer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="mr-2 h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M4.37 7.46h15.27v1.4H4.37z"></path>
                <path d="M4.37 9.86h15.27v1.4H4.37z"></path>
                <path d="M4.37 12.26h15.27v1.4H4.37z"></path>
                <path d="M4.37 14.66h7.63v1.4H4.37z"></path>
              </svg>
              View All My Articles
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediumSection;
