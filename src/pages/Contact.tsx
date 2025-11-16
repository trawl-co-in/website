import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/commonAnimations";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 overflow-auto pl-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            className="mb-12 space-y-4 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold font-mono glow-purple">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Found a bug? Just want to tell us we're doing it wrong?
            </p>
            <p className="text-sm text-accent font-mono">
              We promise to read your message... eventually... probably...
            </p>
          </motion.div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Email + Location */}
            <div className="space-y-8">
              {/* Email */}
              <Card className="glass-panel p-6 w-full max-w-md space-y-4 mx-auto">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold font-mono mb-1">Email</h3>
                    <a href="mailto:hello@trawl.co.in" className="text-sm text-muted-foreground underline">
                      hello@trawl.co.in
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">(Checked daily-ish)</p>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card className="glass-panel p-6 w-full max-w-md space-y-4 mx-auto">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold font-mono mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">The Internet</p>
                    <p className="text-xs text-muted-foreground mt-1">(We work remotely, obviously)</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: Quick Tips */}
            <div className="flex justify-center">
              <Card className="glass-panel p-6 w-full max-w-2xl space-y-2">
                <h3 className="font-bold font-mono text-accent">Quick Tips:</h3>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• Bug reports go to GitHub Issues</li>
                  <li>• PRs are always welcome</li>
                  <li>• For urgent issues: it's open source, fix it yourself 😉</li>
                  <li>• Hate mail goes to /dev/null</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
