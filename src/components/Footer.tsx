import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black py-20 overflow-hidden">
      {/* 🔮 Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/80" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 blur-[200px] rounded-full" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-500/10 blur-[180px] rounded-full" />

      <div className="relative container mx-auto px-6 text-center md:text-left z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* 🌟 Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-wide font-[Georgia,serif]">
              <span className="text-purple-400">tr</span>
              <span className="text-pink-500 mx-[1px]">a</span>
              <span className="text-purple-400">wl</span>

            </h3>
            <span className="text-lg text-gray-400 leading-relaxed max-w-sm">
              Building open-source solutions for a brighter tomorrow — together
              with the global developer community.
            </span>
          </div>

          {/* ⚡ Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-yellow-400 text-lg transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-yellow-400 text-lg transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-yellow-400 text-lg transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-yellow-400 text-lg transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* 💛 Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">
              Connect With Us
            </h4>
            <div className="flex gap-6 justify-center md:justify-start">
              {[
                {
                  icon: Github,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:contact@trawl.co.in",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 border border-yellow-400/40 
                             hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300 shadow-md hover:shadow-yellow-400/30"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 🌍 Bottom Line */}
        <div className="mt-16 pt-8 border-t border-yellow-500/20 text-center text-gray-500">
          <p className="text-base md:text-lg">
            &copy; {currentYear}{" "}
            <span className="text-white">Trawl</span> Built with{" "}
            <span className="text-yellow-500">❤</span> by the open-source
            community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
