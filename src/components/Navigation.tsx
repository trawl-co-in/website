import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Contribute", href: "/donate" }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-white/5 shadow-[0_2px_10px_rgba(255,105,180,0.1)]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* 🧠 Stylized Brand */}
          <Link to="/" className="flex items-center select-none">
            <img src="/images/logo-dark.png" alt="Trawl Logo" className="h-10 mr-2" />
          </Link>

          {/* 💻 Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-lg text-gray-200 font-medium tracking-wide hoverable transition-all duration-300
                  before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hoverable transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* 📱 Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 text-center bg-black/80 backdrop-blur-lg rounded-xl mt-2 border border-yellow-500/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-xl text-gray-100 hoverable font-medium py-2 tracking-wide transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
