import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Coffee } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navigation />

      <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-32 pb-28 overflow-hidden">
        {/* ✨ Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-pink-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/10 blur-[160px] rounded-full" />

        {/* 💬 Content */}
        <div className="relative z-10 max-w-3xl text-center space-y-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Let’s <span className="text-pink-500">Talk!</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We love hearing from you unless it’s about adding a “dark mode” toggle
            (spoiler: we already live there).  
            Drop us a message, and we’ll get back to you right after our next caffeine reboot.
          </p>

          {/* 💌 Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
        <a
        href="mailto:contact@trawl.co.in"
        className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md hover:shadow-pink-500/40 transition-all duration-300"
    >
        <Mail className="w-5 h-5" />
        Email Us
    </a>

    <a
    href="#"
    className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md hover:shadow-pink-500/40 transition-all duration-300"
  >
    <MessageCircle className="w-5 h-5" />
    Send a Message
  </a>
</div>


          {/* ☕ Ending Section */}
          <div className="pt-16 space-y-4">
            <h2 className="text-3xl font-semibold text-yellow-400">
              Prefer real human contact?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              Great! So do we. Unfortunately, our team is remote, allergic to sunlight,
              and powered exclusively by coffee and mild sarcasm.
            </p>
            <div className="flex justify-center pt-4">
              <Coffee className="w-8 h-8 text-pink-500 opacity-90" />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Contact;
