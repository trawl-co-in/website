import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black">
      {/* 🎞️ Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-110 contrast-110"
      >
        <source src="videos/background_home.mp4" type="video/mp4" />
      </video>

      {/* 🌌 Layered Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-500/20 blur-[200px] rounded-full z-0 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[180px] rounded-full z-0 animate-pulse-slow" />

      {/* ✨ Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          we develop open-source solutions for{" "}
          <span className="text-pink-500">
            Everyone
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mt-8 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          building the future together through community-driven innovation,
          transparency, and collaborative development.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
          <Button className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white font-semibold text-lg px-10 py-6 shadow-lg hover:shadow-pink-500/40 rounded-full transition-all duration-300 animate-float-slow">
            Explore Projects
            <ArrowRight className="ml-2" size={22} />
          </Button>

          <Button
            variant="outline"
            className="border-2 border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-black font-semibold text-lg px-10 py-6 rounded-full transition-all duration-300 hover:shadow-lg animate-float-slow delay-200"
          >
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
