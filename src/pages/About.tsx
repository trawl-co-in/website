import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Code2, Users, Zap, Heart, Coffee, Terminal } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <h1 className="text-5xl font-bold font-mono glow-purple">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We're just a bunch of developers who think software should be free, transparent, and not owned by billionaires.
            </p>
          </div>

          {/* Mission */}
          <Card className="glass-panel p-8 mb-8">
            <h2 className="text-3xl font-bold font-mono mb-4 text-secondary glow-magenta">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              To build software that respects users' freedom, privacy, and intelligence. 
              We believe code should be open, communities should be inclusive, and tech companies 
              shouldn't know more about you than your therapist.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Also, we're trying to prove that you can build great software without selling your soul, 
              your data, or your firstborn to venture capitalists. So far, so good.
            </p>
          </Card>

          {/* Team Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="glass-panel p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Open by Default</h3>
              <p className="text-muted-foreground">
                Every line of code is public. Every decision is documented. 
                Every bug is... well, also public. We're not perfect, but we're honest about it.
              </p>
            </Card>

            <Card className="glass-panel p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Community First</h3>
              <p className="text-muted-foreground">
                We're built by the community, for the community. No board meetings, 
                no quarterly earnings calls. Just developers helping developers.
              </p>
            </Card>

            <Card className="glass-panel p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-mono">Move Fast, Fix Things</h3>
              <p className="text-muted-foreground">
                We iterate quickly, but we also debug thoroughly. Breaking production is not a feature, 
                despite what Silicon Valley might tell you.
              </p>
            </Card>

            <Card className="glass-panel p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-mono">Built with Love</h3>
              <p className="text-muted-foreground">
                And caffeine. Lots of caffeine. But mostly love for what we do 
                and the people who use our software.
              </p>
            </Card>
          </div>

          {/* Fun Stats */}
          <Card className="glass-panel p-8 mb-8">
            <h2 className="text-2xl font-bold font-mono mb-6 text-accent glow-yellow">
              Some Numbers (That We Probably Made Up)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-mono">42k+</div>
                <div className="text-sm text-muted-foreground mt-2">Lines of Code</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary font-mono">∞</div>
                <div className="text-sm text-muted-foreground mt-2">Cups of Coffee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent font-mono">137</div>
                <div className="text-sm text-muted-foreground mt-2">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary font-mono">0</div>
                <div className="text-sm text-muted-foreground mt-2">VC Funding</div>
              </div>
            </div>
          </Card>

          {/* Join Us */}
          <Card className="glass-panel p-8 text-center">
            <Terminal className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-mono mb-4">
              Want to Join?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for contributors, whether you write code, docs, or just really good bug reports.
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
        </div>
      </main>
    </div>
  );
};

export default About;
