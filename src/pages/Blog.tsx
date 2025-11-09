import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Article1 from "@/components/animation/images/Article1.png";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  url: string; // ✅ external link field
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Open Source Applications with Modern Tools",
    excerpt:
      "Explore best practices for creating maintainable and scalable open source projects using modern development tools and frameworks.",
    category: "Development",
    author: "Sarah Chen",
    date: "Nov 2, 2025",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    url: "https://medium.com/@open-source/building-scalable-open-source-apps", // ✅ external article
  },
  {
    id: 2,
    title:
      "AI vs ML vs Data Scientist vs GenAI Developer: Understanding the Real Roles in Tech 2025",
    excerpt:
      "An in-depth look at emerging variety in multiple roles, their responsibilities, and how they shape the future of technology.",
    category: "Insights",
    author: "Kshitija Sharma",
    date: "Nov 7, 2025",
    readTime: "8 min read",
    image: Article1,
    url: "https://medium.com/@kshitijasharma01/ai-vs-ml-vs-data-scientist-vs-genai-developer-understanding-the-real-roles-3868fd398d60", // ✅ your Medium link
  },
  {
    id: 3,
    title: "Contributing to Open Source: A Beginner's Complete Guide",
    excerpt:
      "Learn how to make your first contribution to open source projects, from finding the right project to submitting your first pull request.",
    category: "Tutorial",
    author: "Emily Watson",
    date: "Oct 28, 2025",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    url: "https://medium.com/@opensource/contributing-to-open-source", // example link
  },
  {
    id: 4,
    title: "Security Best Practices for Open Source Projects",
    excerpt:
      "Protect your open source project and its users with these essential security practices and tools.",
    category: "Security",
    author: "David Kim",
    date: "Oct 25, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    url: "https://medium.com/@opensource/security-best-practices", // example link
  },
  {
    id: 5,
    title: "Community Building: Growing Your Open Source Project",
    excerpt:
      "Strategies for attracting contributors, building a welcoming community, and sustaining long-term project growth.",
    category: "Community",
    author: "Jessica Park",
    date: "Oct 22, 2025",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=400&fit=crop",
    url: "https://medium.com/@opensource/community-building", // example link
  },
  {
    id: 6,
    title: "Open Source Licensing Explained: Choosing the Right License",
    excerpt:
      "A comprehensive guide to understanding different open source licenses and selecting the best one for your project.",
    category: "Legal",
    author: "Robert Chang",
    date: "Oct 20, 2025",
    readTime: "14 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
    url: "https://medium.com/@opensource/open-source-licensing", // example link
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Open Source <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Articles, tutorials, and insights from the latest technology.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts[0] && (
            <a
              href={blogPosts[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="mb-12 overflow-hidden border-border bg-card hover:border-primary/50 transition-all hover:scale-[1.02] cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge
                      variant="outline"
                      className="w-fit mb-4 border-primary text-primary"
                    >
                      {blogPosts[0].category}
                    </Badge>
                    <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {blogPosts[0].author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </a>
          )}

          {/* Recent Posts Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge
                        variant="outline"
                        className="mb-3 border-primary text-primary"
                      >
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {post.author}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
