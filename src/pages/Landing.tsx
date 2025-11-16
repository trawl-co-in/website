import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Code2, Heart, Sparkles, Terminal, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import banner from "@/assets/banner.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Footer } from "@/components/Footer";

// Text constants
const HERO_TAGLINE = "Because proprietary software is so last decade";
const HERO_DESCRIPTION =
  "We make software that's open, adaptable, and community-driven, built by people who enjoy making things that others can actually use.";
const HERO_DESCRIPTION_EMPH = "Simple, honest, human-made.";

const FEATURE_TITLES = ["Transparency", "Community", "Innovation"];

const FEATURE_TEXT = [
  "Everything's right out in the open—no smoke, no mirrors, just code trying its best to look presentable.",
  "Made by developers who try things, break things, share a laugh, and fix it before anyone notices.",
  "We test new ideas, celebrate the wins, and politely pretend the strange experiments never happened.",
];


const FOOTER_NAV = {
  Navigate: ["Home", "Projects", "Blog", "About"],
  Connect: ["Contact", "GitHub", "Discord", "Twitter"],
  Support: ["Contribute", "Documentation", "Community", "FAQ"],
  Legal: ["MIT License", "Privacy", "Terms", "Code of Conduct"],
};

const Landing = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["0 1", "1 0"],
  });

  // Scroll-linked transforms
  const fadeOut = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto pl-16">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="overflow-x-hidden relative min-h-screen flex items-center justify-center px-4 py-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

          <motion.div
            className="relative max-w-5xl mx-auto text-center space-y-8"
            style={{ opacity: fadeOut }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ scale: heroScale }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">
                  {HERO_TAGLINE}
                </span>
              </div>
            </motion.div>

            {/* Banner Image */}
            <motion.div
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.img
                src={banner}
                alt="OpenSource Hub"
                className="w-full h-auto rounded-lg shadow-2xl glow-purple"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>


            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ scale: heroScale }}
            >
              {HERO_DESCRIPTION}
              <br />
              <span className="text-accent font-semibold">
                {HERO_DESCRIPTION_EMPH}
              </span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="text-lg">
                  <Link to="/projects">
                    <Terminal className="mr-2 h-5 w-5" />
                    Browse Projects
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/contribute">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 overflow-x-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold font-mono text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why We Build{" "}
              <span className="text-accent glow-yellow">Free Software</span>
            </motion.h2>

            <motion.p
              className="text-center text-muted-foreground mb-16 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              (Spoiler: It's not just for the GitHub stars)
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="glass-panel p-6 space-y-4 hover:scale-105 transition-transform">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      {idx === 0 && <Code2 className="h-6 w-6 text-primary" />}
                      {idx === 1 && <Users className="h-6 w-6 text-secondary" />}
                      {idx === 2 && <Zap className="h-6 w-6 text-accent" />}
                    </div>

                    <h3 className="text-xl font-bold font-mono">
                      {FEATURE_TITLES[idx]}
                    </h3>
                    <p className="text-muted-foreground">{FEATURE_TEXT[idx]}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 overflow-x-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="glass-panel p-12 text-center space-y-6">
                <h2 className="text-4xl font-bold font-mono">
                  Discover Our Latest {" "}<span className="text-secondary space-x-1">Experiments</span>
                </h2>
                <p className="text-l text-muted-foreground">Read the blog for the fun parts and contact us for the confusing bits.</p>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <Link to="/blog" className="bg-primary/20 border border-primary/30 hover:bg-primary/30">Read Our Blog</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
