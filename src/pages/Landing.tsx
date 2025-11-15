import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Code2, Heart, Sparkles, Terminal, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import banner from "@/assets/banner.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Shared animations
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  floatLoop,
  staggerItem,
} from "@/animations/commonAnimations";

// Text constants
const HERO_TAGLINE = "Because proprietary software is so last decade";
const HERO_DESCRIPTION =
  "We make software that's open, adaptable, and community-driven, built by people who enjoy making things that others can actually use.";
const HERO_DESCRIPTION_EMPH = "Simple, honest, human-made.";

const FEATURE_TITLES = ["Transparency", "Community", "Innovation"];
const FEATURE_TEXT = [
  "Every line of code is visible. No hidden trackers, no mysterious 'features', no venture capitalist surveillance fantasies.",
  "Built by developers who use it, not by product managers who... well, we're still figuring out what they do.",
  "We move fast and fix things. Unlike some companies that move fast and break democracies.",
];

const CTA_TITLE = "Open Source Shift";
const CTA_SUBTEXT = "Or at least star our repos. We're not picky.";

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
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <motion.div
              className="inline-block"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
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
              variants={scaleIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.img
                src={banner}
                alt="OpenSource Hub"
                className="w-full h-auto rounded-lg shadow-2xl glow-purple"
                animate={floatLoop}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={fadeIn}
              initial="initial"
              animate="animate"
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
              variants={fadeIn}
              initial="initial"
              animate="animate"
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
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why We Build{" "}
              <span className="text-accent glow-yellow">Free Software</span>
            </motion.h2>

            <motion.p
              className="text-center text-muted-foreground mb-16 text-lg"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              (Spoiler: It's not just for the GitHub stars)
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((idx) => (
                <motion.div key={idx} {...staggerItem(idx * 0.15)}>
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
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="glass-panel p-12 text-center space-y-6">
                <h2 className="text-4xl font-bold font-mono">
                  Join the <span className="text-secondary">{CTA_TITLE}</span>
                </h2>
                <p className="text-xl text-muted-foreground">{CTA_SUBTEXT}</p>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button asChild size="lg">
                    <Link to="/blog">Read Our Blog</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
