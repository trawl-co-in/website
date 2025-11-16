import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

// Shared animation presets
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  staggerItem,
} from "@/animations/commonAnimations";
import { Footer } from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title:
      "AI vs ML vs Data Scientist vs GenAI Developer: Understanding the Real Roles in Tech 2025",
    excerpt:
      "An in-depth look at emerging variety in multiple roles, their responsibilities, and how they shape the future of technology.",
    author: "Kshitija Sharma",
    date: "2025-11-07",
    readTime: "8 min",
    tags: ["insights", "medium"],
    url: "https://medium.com/@kshitijasharma01/ai-vs-ml-vs-data-scientist-vs-genai-developer-understanding-the-real-roles-3868fd398d60",
  },
  {
    id: 2,
    title:
      "How Your Voice Becomes Digital: A Simple Guide to Sampling, Bit Depth, and What Audio Data Really Looks Like.",
    excerpt:
      "In this article, we’ll break down the entire journey from real air vibrations to digital samples and actually look at the real data behind a sound wave.",
    author: "Kshitija Sharma",
    date: "2025-11-14",
    readTime: "5 min",
    tags: ["guide", "hashnode"],
    url: "https://how-your-voice-becomes-digital.hashnode.dev/how-your-voice-becomes-digital-a-simple-guide-to-sampling-bit-depth-and-what-audio-data-really-looks-like",
  },
  {
    id: 3,
    title: "Documentation: We Never Wrote",
    excerpt:
      "Why good documentation is like a unicorn: everyone talks about it, nobody's actually seen it.",
    author: "PS",
    date: "2025-10-15",
    readTime: "4 min",
    tags: ["docs", "satire"],
    url: "/blog/documentation-we-never-wrote",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
     <main className="flex-1 overflow-auto pt-16 sm:pt-0 sm:pl-16">




        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            className="mb-12 space-y-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold font-mono glow-purple">
              The Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, tutorials, and insights shaping today’s software development.
            </p>
            <p className="text-sm text-accent font-mono">
              Warning: May contain traces of sarcasm and strong opinions about tabs vs spaces
            </p>
          </motion.div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {[...blogPosts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post, idx) => (
                <motion.div key={post.id} {...staggerItem(idx * 0.08)}>
                  <a href={post.url} target={post.url.startsWith("http") ? "_blank" : "_self"} rel={post.url.startsWith("http") ? "noopener noreferrer" : undefined}>
                    <Card className="glass-panel p-6 hover:scale-[1.02] transition-all cursor-pointer group">
                      <div className="space-y-4">
                        {/* Tags */}
                        <motion.div
                          className="flex flex-wrap gap-2"
                          variants={fadeIn}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.1 }}
                        >
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="border-primary/30 text-primary"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                          className="text-2xl font-bold font-mono group-hover:text-primary transition-colors"
                          variants={fadeInUp}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.15 }}
                        >
                          {post.title}
                        </motion.h2>

                        {/* Excerpt */}
                        <motion.p
                          className="text-muted-foreground leading-relaxed"
                          variants={fadeIn}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.2 }}
                        >
                          {post.excerpt}
                        </motion.p>

                        {/* Metadata */}
                        <motion.div
                          className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono"
                          variants={fadeIn}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.25 }}
                        >
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
                        </motion.div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="glass-panel p-8 text-center">
              <p className="text-muted-foreground font-mono">
                <span className="text-accent">{" > "}</span> More articles coming soon...
                <br />
                (Right after we finish that feature we've been "almost done" with for 3 months)
              </p>
            </Card>
          </motion.div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Blog;
