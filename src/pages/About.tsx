import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Code2, Users, Zap, Heart, Terminal } from "lucide-react";
import { motion } from "framer-motion";

// Shared animations
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  staggerItem,
} from "@/animations/commonAnimations";

const About = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto pl-16">
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
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We're an open-source group of developers who spend our free time
              building software we hope makes someone's day easier (preferably yours).
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel p-8 mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 text-secondary glow-magenta">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To build open-source software shaped by the community, for the community.
                We believe great ideas grow best in the open, where anyone can contribute,
                collaborate, and occasionally argue over naming things.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is simple: build tools people genuinely like using.
              </p>
            </Card>
          </motion.div>

          {/* Team Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div key={idx} {...staggerItem(idx * 0.1)}>
                <Card className="glass-panel p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    {idx === 0 && <Code2 className="h-6 w-6 text-primary" />}
                    {idx === 1 && <Users className="h-6 w-6 text-secondary" />}
                    {idx === 2 && <Zap className="h-6 w-6 text-accent" />}
                    {idx === 3 && <Heart className="h-6 w-6 text-secondary" />}
                  </div>

                  <h3 className="text-xl font-bold font-mono">
                    {[
                      "Open by Default",
                      "Community First",
                      "Move Fast, Fix Things",
                      "Built with Love",
                    ][idx]}
                  </h3>

                  <p className="text-muted-foreground">
                    {[
                      "Every line of code is public. Every decision is documented. Every bug is... also public. We're not perfect, but we're honest.",
                      "We're built by the community, for the community. No bosses, no deadlines—just people turning ideas (and coffee) into code.",
                      "We iterate quickly, but debug thoroughly. Plot twists are great in movies, not production logs.",
                      "And caffeine. Lots of caffeine. But mostly love for what we do and the people who use our software.",
                    ][idx]}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Fun Stats */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="glass-panel p-8 mb-8">
              <h2 className="text-2xl font-bold font-mono mb-6 text-accent glow-yellow">
                Some Numbers (That We Probably Made Up)
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary font-mono">
                      42k+
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Lines of Code
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary font-mono">
                      ∞
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Cups of Coffee
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Join Us */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-panel p-8 text-center">
              <Terminal className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-mono mb-4">Want to Join?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're always looking for contributors—whether you write code,
                docs, or just really good bug reports.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://github.com"
                  className="px-6 py-3 rounded-lg bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-colors font-mono"
                >
                  Check our GitHub
                </a>
                <a
                  href="https://discord.com"
                  className="px-6 py-3 rounded-lg bg-secondary/20 border border-secondary/30 text-secondary hover:bg-secondary/30 transition-colors font-mono"
                >
                  Join Discord
                </a>
              </div>
            </Card>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default About;
