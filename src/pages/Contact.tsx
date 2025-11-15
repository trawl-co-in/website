import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! (Not really)",
      description: "We're still working on the backend. But we appreciate the thought! 💜",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <h1 className="text-5xl font-bold font-mono glow-magenta">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Found a bug? Just want to tell us we're doing it wrong?
            </p>
            <p className="text-sm text-accent font-mono">
              We promise to read your message... eventually... probably...
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-panel p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your actual name (or cool alias)"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="definitely.not.spam@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's on your mind?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us everything. We have time. (We don't, but pretend we do)"
                      rows={8}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-panel p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      hello@opensource.dev
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      (Checked daily-ish)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-1">Discord</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our server
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      We're probably in #off-topic
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      The Internet
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      (We work remotely, obviously)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6 space-y-2">
                <h3 className="font-bold font-mono text-accent">Quick Tips:</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Bug reports go to GitHub Issues</li>
                  <li>• PRs are always welcome</li>
                  <li>• For urgent issues: it's open source, fix it yourself 😉</li>
                  <li>• Hate mail goes to /dev/null</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
