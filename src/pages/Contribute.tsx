import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coffee, Github, Heart, Sparkles, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contribute = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("5");

  const handleBuyMeCoffee = () => {
    toast({
      title: "☕ Thanks for the coffee!",
      description: "Just kidding, we haven't set up payments yet. But we appreciate the intention!",
    });
  };

  const handleGitHubSponsor = () => {
    toast({
      title: "💜 You're awesome!",
      description: "GitHub Sponsors coming soon. In the meantime, stars are free!",
    });
  };

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto pl-16">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-mono text-accent">Keep the lights on</span>
            </div>
            <h1 className="text-5xl font-bold font-mono glow-yellow">
              Support Our Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build free software because we believe in it. But servers, coffee, and late-night debugging sessions aren't free.
            </p>
          </div>

          {/* Ways to Support */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Buy Me a Coffee */}
            <Card className="glass-panel p-8 space-y-6">
              <div className="space-y-2">
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Coffee className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold font-mono">Buy Us a Coffee</h2>
                <p className="text-muted-foreground">
                  One-time support to fuel our caffeine addiction and late-night coding sessions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <div className="flex gap-2">
                    <Button
                      variant={amount === "5" ? "default" : "outline"}
                      onClick={() => setAmount("5")}
                      className="flex-1"
                    >
                      $5
                    </Button>
                    <Button
                      variant={amount === "10" ? "default" : "outline"}
                      onClick={() => setAmount("10")}
                      className="flex-1"
                    >
                      $10
                    </Button>
                    <Button
                      variant={amount === "20" ? "default" : "outline"}
                      onClick={() => setAmount("20")}
                      className="flex-1"
                    >
                      $20
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom">Or enter custom amount</Label>
                  <Input
                    id="custom"
                    type="number"
                    placeholder="Any amount helps"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <Button
                  onClick={handleBuyMeCoffee}
                  size="lg"
                  className="w-full"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  Buy Us a Coffee
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Approximately {Math.floor(Number(amount) / 5)} cups of mediocre coffee
                </p>
              </div>
            </Card>

            {/* GitHub Sponsors */}
            <Card className="glass-panel p-8 space-y-6">
              <div className="space-y-2">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Github className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-mono">GitHub Sponsors</h2>
                <p className="text-muted-foreground">
                  Monthly support to help us work on open source full-time (or at least part-time).
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Card className="p-4 border-primary/30 bg-primary/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold font-mono">$5/month</p>
                        <p className="text-sm text-muted-foreground">Coffee Supporter</p>
                      </div>
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                  </Card>

                  <Card className="p-4 border-secondary/30 bg-secondary/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold font-mono">$25/month</p>
                        <p className="text-sm text-muted-foreground">Code Enthusiast</p>
                      </div>
                      <Heart className="h-5 w-5 text-secondary" />
                    </div>
                  </Card>

                  <Card className="p-4 border-accent/30 bg-accent/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold font-mono">$100/month</p>
                        <p className="text-sm text-muted-foreground">Open Source Hero</p>
                      </div>
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                  </Card>
                </div>

                <Button
                  onClick={handleGitHubSponsor}
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Cancel anytime. No hard feelings, we get it.
                </p>
              </div>
            </Card>
          </div>

          {/* Other Ways to Help */}
          <Card className="glass-panel p-8">
            <h2 className="text-2xl font-bold font-mono mb-6">
              Don't Have Cash? <span className="text-accent">We Get It.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-bold font-mono text-primary">Star Our Repos</h3>
                <p className="text-sm text-muted-foreground">
                  It's free and makes us feel special. We're simple people.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold font-mono text-secondary">Contribute Code</h3>
                <p className="text-sm text-muted-foreground">
                  PRs are like love letters. We read every single one.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold font-mono text-accent">Write Docs</h3>
                <p className="text-sm text-muted-foreground">
                  Seriously, please. Our docs are... well, they exist.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold font-mono text-primary">Spread the Word</h3>
                <p className="text-sm text-muted-foreground">
                  Tell your friends. Tweet about us. Skywrite our URL. Whatever works.
                </p>
              </div>
            </div>
          </Card>

          {/* Thank You Message */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-2xl font-mono">
              <span className="text-secondary">Thank you</span> for keeping open source alive.
            </p>
            <p className="text-muted-foreground">
              Every contribution, big or small, helps us build software that respects users' freedom.
            </p>
            <p className="text-sm text-accent font-mono">
              (And yes, we're being sincere for once)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contribute;
