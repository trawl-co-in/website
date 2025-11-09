import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      name: "NeuralForge",
      description:
        "High-performance neural network training framework with automatic mixed precision and distributed training support.",
      stars: "24.5K",
      forks: "3.8K",
      language: "Python",
    },
    {
      name: "VisionAI Core",
      description:
        "Computer vision library with pre-trained models for object detection, segmentation, and facial recognition.",
      stars: "18.2K",
      forks: "2.9K",
      language: "PyTorch",
    },
    {
      name: "LangChain Pro",
      description:
        "Advanced NLP toolkit for building conversational AI and language understanding applications at scale.",
      stars: "32.1K",
      forks: "5.2K",
      language: "Python",
    },
    {
      name: "AutoML Studio",
      description:
        "Automated machine learning platform with neural architecture search and hyperparameter optimization.",
      stars: "15.7K",
      forks: "2.4K",
      language: "TensorFlow",
    },
    {
      name: "EdgeInference",
      description:
        "Optimized inference engine for deploying AI models on edge devices with minimal latency and memory footprint.",
      stars: "11.3K",
      forks: "1.7K",
      language: "C++",
    },
    {
      name: "DataPipeline AI",
      description:
        "Scalable data processing framework with built-in feature engineering and real-time streaming capabilities.",
      stars: "9.8K",
      forks: "1.5K",
      language: "Spark",
    },
  ];

  return (
    <>
      {/* 🧭 Navigation Bar */}
      <Navigation />

      {/* 🚀 Projects Section */}
      <section id="projects" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-yellow-500 tracking-wide">
              Featured AI Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Production-ready AI frameworks and libraries powering intelligent applications globally.
            </p>
          </div>

          {/* 💻 Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 via-gray-950 to-black border border-pink-500/30 rounded-2xl p-6 shadow-md hover:shadow-pink-500/30 hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-pink-500/80 p-3 rounded-lg shadow-lg">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-pink-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-5 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-5 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-pink-400" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4 text-pink-400" />
                    {project.forks}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500" />
                  <span className="text-sm text-gray-400">{project.language}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold text-lg px-10 py-6 shadow-md hover:shadow-pink-500/40 transition-all duration-300 rounded-full"
            >
              <Github className="mr-2 h-5 w-5 text-white" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
