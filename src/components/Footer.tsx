import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="border-t border-border py-12 px-4 pl-16">
            <div className="max-w-6xl mx-auto ">
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

                <div className="text-center text-muted-foreground pt-8">
                    <p className="font-mono text-sm">
                        Made with {" "}
                        <Heart className="h-4 w-4 text-accent fill-accent inline-block" />
                        {" "} and excessive amounts of caffeine
                    </p>
                    <p className="text-xs mt-2">
                        © 2025 trawl. Licensed under the Zero Liability License: contribute responsibly.
                    </p>
                </div>
            </div>
        </footer>
    );
};
