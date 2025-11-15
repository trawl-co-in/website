import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why We Don't Have a Product Roadmap (And Why That's Actually Fine)",
    excerpt: "Roadmaps are for people who know where they're going. We prefer the scenic route with occasional detours into rabbit holes.",
    author: "Alex the Caffeinated",
    date: "2024-01-15",
    readTime: "5 min",
    tags: ["philosophy", "chaos"],
  },
  {
    id: 2,
    title: "The Art of Writing Commits Nobody Will Ever Read",
    excerpt: "A comprehensive guide to crafting commit messages that are technically accurate but spiritually meaningless.",
    author: "Sam the Sarcastic",
    date: "2024-01-10",
    readTime: "3 min",
    tags: ["git", "humor"],
  },
  {
    id: 3,
    title: "Open Source Burnout: A Love Story",
    excerpt: "How we learned to stop worrying and love the GitHub notifications... just kidding, we hate them.",
    author: "Jordan the Tired",
    date: "2024-01-05",
    readTime: "7 min",
    tags: ["mental-health", "real-talk"],
  },
  {
    id: 4,
    title: "That Time We Broke Production (This Month)",
    excerpt: "A post-mortem of our latest adventure in accidentally deploying to main at 3 AM. Spoiler: coffee was involved.",
    author: "Casey the Reckless",
    date: "2023-12-28",
    readTime: "6 min",
    tags: ["incidents", "learning"],
  },
  {
    id: 5,
    title: "Documentation: The Code We Never Wrote",
    excerpt: "Why good documentation is like a unicorn: everyone talks about it, nobody's actually seen it.",
    author: "Morgan the Mythical",
    date: "2023-12-20",
    readTime: "4 min",
    tags: ["docs", "satire"],
  },
  {
    id: 6,
    title: "Contributing to Open Source Without Losing Your Mind",
    excerpt: "Practical tips for your first PR, including how to interpret 'LGTM' and other ancient developer runes.",
    author: "Riley the Reasonable",
    date: "2023-12-15",
    readTime: "8 min",
    tags: ["tutorial", "community"],
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto pl-16">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <h1 className="text-5xl font-bold font-mono glow-purple">
              The Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, tutorials, and occasionally coherent rants about open source development
            </p>
            <p className="text-sm text-accent font-mono">
              Warning: May contain traces of sarcasm and strong opinions about tabs vs spaces
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="glass-panel p-6 hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold font-mono group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State / Coming Soon */}
          <Card className="glass-panel p-8 text-center mt-12">
            <p className="text-muted-foreground font-mono">
              <span className="text-accent">{">"}</span> More articles coming soon... 
              <br />
              (Right after we finish that feature we've been "almost done" with for 3 months)
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Blog;
