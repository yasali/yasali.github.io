export interface Video {
  id: string;
  title: string;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
}

export interface FacebookPost {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const youtubeContent = {
  channelUrl: "https://www.youtube.com/@aliyasir83",
  description: "Watch my latest videos about iOS development, Swift programming, and software engineering best practices.",
  videos: [
    {
      id: "BBikaQ8xTgE",
      title: "Justin Langer controversy | Michael Clarke lashes out over 'weak' Justin Langer controversy",
      description: "Michael Clarke has defended under-fire Australia coach Justin Langer following reports his leadership style has irked some within the national team."
    },
    {
      id: "E5cSl7Ow1Ls",
      title: "Shoaib Malik against Misbah ul Haq, Pakistan need a proper white ball coach",
      description: "Shoaib Malik against Misbah ul Haq, Pakistan need a proper white ball coach. Misbah should learn coaching from the Zimbabwe coach Lal Singh Rajpoot."
    },
    {
      id: "Cq-II7pGb7M",
      title: "Rishabh Pant is a special talent | Future of Indian cricket | Pakistani Reaction",
      description: "Rishabh Pant is a special talent | Future of Indian cricket | Pakistani Reaction"
    }
  ] as Video[]
};

export const mediumContent = {
  profileUrl: "https://medium.com/@aliyasirali",
  description: "Read my latest articles about iOS development, software engineering, and technology trends.",
  articles: [
    {
      id: 1,
      title: "Scrolling Issues in tvOS: A Workaround for Long Text",
      excerpt: "Scrolling long text on tvOS presents a unique challenge due to the system's focus-driven navigation model. Unlike iOS, where users can...",
      date: "March 23, 2025",
      readTime: "2 min read",
      url: "https://medium.com/@aliyasirali/scrolling-issues-in-tvos-a-workaround-for-long-text-befe3ed6884b"
    },
    {
      id: 2,
      title: "Safely Using nonisolated(unsafe) to Incrementally Adopt Swift's Strict Concurrency Model",
      excerpt: "When adopting Swift's strict concurrency model, you'll often encounter situations where a single change to a shared property ripples across...",
      date: "Jan 3, 2025",
      readTime: "2 min read",
      url: "https://medium.com/@aliyasirali/understanding-nonisolated-unsafe-in-swift-incremental-adoption-of-strict-concurrency-2cbb61c9adf4"
    },
    {
      id: 3,
      title: "Mastering Swift 6 Strict Concurrency: A Step-by-Step Approach Matters",
      excerpt: "Concurrency has always been a challenging aspect of software development, particularly in environments where performance...",
      date: "Jan 2, 2025",
      readTime: "4 min read",
      url: "https://medium.com/@aliyasirali/embracing-swift-6-strict-concurrency-why-a-step-by-step-approach-matters-aa7696235797"
    }
  ] as Article[]
};

export const facebookContent = {
  pageUrl: "https://www.facebook.com/yourusername",
  description: "Join my community for the latest updates, discussions, and insights about technology and software development.",
  posts: [
    {
      id: 1,
      title: "Latest Updates",
      description: "Stay updated with my latest projects, tutorials, and tech insights.",
      icon: "Bell",
      link: "https://www.facebook.com/yourusername"
    },
    {
      id: 2,
      title: "Community Engagement",
      description: "Join our growing community of developers and tech enthusiasts.",
      icon: "Users",
      link: "https://www.facebook.com/groups/yourgroup"
    },
    {
      id: 3,
      title: "Live Events",
      description: "Participate in live coding sessions, Q&A, and tech discussions.",
      icon: "Video",
      link: "https://www.facebook.com/yourusername/events"
    }
  ] as FacebookPost[]
}; 