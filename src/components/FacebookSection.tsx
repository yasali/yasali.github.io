
import { Facebook } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FacebookSection = () => {
  return (
    <section id="facebook" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow Me on <span className="text-[#1877F2]">Facebook</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with me on Facebook to stay updated with my latest posts, events, and live sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold">Latest Updates</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                I regularly share insights, behind-the-scenes content, and professional updates on my Facebook page.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#1877F2] hover:bg-[#166FE5] w-full" asChild>
                <a href="https://web.facebook.com/aliyasirali83/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
                  Visit My Page
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold">Community Engagement</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Join discussions, participate in polls, and engage with other like-minded professionals in my community.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#1877F2] hover:bg-[#166FE5] w-full" asChild>
                <a href="https://web.facebook.com/groups/873278326545376" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
                  Join Community
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold">Live Events</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                I host regular live sessions on various topics related to my field. Don't miss out on these interactive events.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#1877F2] hover:bg-[#166FE5] w-full" asChild>
                <a href="https://web.facebook.com/aliyasirali83/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
                  Watch Lives
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacebookSection;
