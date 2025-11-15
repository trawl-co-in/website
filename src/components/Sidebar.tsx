import { Home, Search, FileText, Mail, Heart } from "lucide-react";
import { NavLink } from "./NavLink";
import logo from "@/assets/logo.png";
import { GithubIcon } from "./icons/GithubIcon";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 glass-panel flex flex-col items-center py-6 gap-6 border-r border-border z-[999]">
      {/* Logo */}
      <NavLink to="/about" className="flex items-center justify-center" title="About">
        <img
          src={logo}
          alt="trawl Logo"
          className="w-10 h-10 rounded-lg hover:scale-110 transition-transform"
        />
      </NavLink>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 flex-1">
        <NavLink
          to="/"
          end
          className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-all group"
          activeClassName="bg-primary/20 border border-primary/30"
          title="Home"
        >
          <Home className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </NavLink>

        <NavLink
          to="/projects"
          className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-all group"
          activeClassName="bg-primary/20 border border-primary/30"
          title="Projects"
        >
          <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </NavLink>

        <NavLink
          to="/blog"
          className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-all group"
          activeClassName="bg-secondary/20 border border-secondary/30"
          title="Blog"
        >
          <FileText className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
        </NavLink>

        <NavLink
          to="/contact"
          className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-all group"
          activeClassName="bg-accent/20 border border-accent/30"
          title="Contact"
        >
          <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
        </NavLink>

        <NavLink
          to="/contribute"
          className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-all group"
          activeClassName="bg-secondary/20 border border-secondary/30"
          title="Contribute"
        >
          <Heart className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
        </NavLink>
      </nav>

      {/* Bottom Help Link */}
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/trawl-co-in"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg hover:bg-primary/10 flex items-center justify-center transition-colors group"
          title="GitHub"
        >
          <GithubIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </div>
    </aside>
  );
};
