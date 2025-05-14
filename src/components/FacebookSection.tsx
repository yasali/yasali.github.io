import { Facebook } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
          <h2 className="text-4xl font-bold mb-6">
            Follow Me on <span className="bg-gradient-to-r from-[#1877F2] to-[#166FE5] bg-clip-text text-transparent">Facebook</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with me on Facebook to stay updated with my latest posts, events, and live sessions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Latest Updates",
              description: "I regularly share insights, behind-the-scenes content, and professional updates on my Facebook page.",
              link: "https://web.facebook.com/aliyasirali83/",
              buttonText: "Visit My Page"
            },
            {
              title: "Community Engagement",
              description: "Join discussions, participate in polls, and engage with other like-minded professionals in my community.",
              link: "https://web.facebook.com/groups/873278326545376",
              buttonText: "Join Community"
            },
            {
              title: "Live Events",
              description: "I host regular live sessions on various topics related to my field. Don't miss out on these interactive events.",
              link: "https://web.facebook.com/aliyasirali83/",
              buttonText: "Watch Lives"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="bg-[#1877F2] hover:bg-[#166FE5] w-full transform hover:scale-105 transition-all duration-300" 
                    asChild
                  >
                    <a href={card.link} target="_blank" rel="noopener noreferrer">
                      <Facebook className="mr-2 h-5 w-5" />
                      {card.buttonText}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
