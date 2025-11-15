import { Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Code2, Heart, Sparkles, Terminal, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import banner from "@/assets/banner.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          
          <div className="relative max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">Because proprietary software is so last decade</span>
              </div>
            </div>

            {/* Banner Logo */}
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src={banner} 
                alt="OpenSource Hub" 
                className="w-full h-auto rounded-lg shadow-2xl glow-purple"
              />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We make software that's open, adaptable, and community-driven, built by people who enjoy making things that others can actually use. 
              <br></br>
              <span className="text-accent font-semibold">Simple, honest, human-made.</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/projects">
                  <Terminal className="mr-2 h-5 w-5" />
                  Browse Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/contribute">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-mono text-center mb-4">
              Why We Build <span className="text-accent glow-yellow">Free Software</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              (Spoiler: It's not just for the GitHub stars)
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-panel p-6 space-y-4 hover:scale-105 transition-transform">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-mono">Transparency</h3>
                <p className="text-muted-foreground">
                  Every line of code is visible. No hidden trackers, no mysterious "features", 
                  no venture capitalist surveillance fantasies.
                </p>
              </Card>

              <Card className="glass-panel p-6 space-y-4 hover:scale-105 transition-transform">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-mono">Community</h3>
                <p className="text-muted-foreground">
                  Built by developers who use it, not by product managers who... 
                  well, we're still figuring out what they do.
                </p>
              </Card>

              <Card className="glass-panel p-6 space-y-4 hover:scale-105 transition-transform">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-mono">Innovation</h3>
                <p className="text-muted-foreground">
                  We move fast and fix things. Unlike some companies that move fast 
                  and break democracies.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-panel p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold font-mono">
                Join the <span className="text-secondary">Revolution</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Or at least star our repos. We're not picky.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link to="/blog">Read Our Blog</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold font-mono text-primary mb-4">Navigate</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-mono text-secondary mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                  <li><a href="https://github.com" className="hover:text-secondary transition-colors">GitHub</a></li>
                  <li><a href="https://discord.com" className="hover:text-secondary transition-colors">Discord</a></li>
                  <li><a href="https://twitter.com" className="hover:text-secondary transition-colors">Twitter</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-mono text-accent mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/contribute" className="hover:text-accent transition-colors">Contribute</Link></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-mono text-primary mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">MIT License</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Code of Conduct</a></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center text-muted-foreground border-t border-border pt-8">
              <p className="font-mono">
                Made with <span className="text-secondary">♥</span> and excessive amounts of caffeine
              </p>
              <p className="text-sm mt-2">
                © 2024 OpenSource Hub. Licensed under "do whatever you want, just don't sue us"
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing;
