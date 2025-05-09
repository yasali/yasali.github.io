
import { Youtube, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

const YouTubeSection = () => {
  return (
    <section id="youtube" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My YouTube Channel</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out my latest videos and subscribe to my channel for more content.
          </p>
          <Button asChild className="mt-6 bg-red-600 hover:bg-red-700">
            <a href="https://www.youtube.com/@aliyasir83" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-4 w-4" /> Visit My Channel
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a href="https://www.youtube.com/@aliyasir83" target="_blank" rel="noopener noreferrer">
              View All Videos <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ video }: { video: VideoProps }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <div className="video-container">
          <img 
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all">
            <Button asChild variant="ghost" size="icon" className="rounded-full bg-red-600 hover:bg-red-700 text-white h-16 w-16">
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                <Play className="h-8 w-8" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
        <p className="text-gray-600">{video.description}</p>
      </CardContent>
    </Card>
  );
};

export default YouTubeSection;
