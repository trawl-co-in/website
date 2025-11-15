import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Terminal } from "@/components/Terminal";
import { ProjectCard } from "@/components/ProjectCard";
import { Inspector } from "@/components/Inspector";
import { HelpModal } from "@/components/HelpModal";
import { sampleProjects, Project } from "@/data/sampleProjects";
import { toast } from "sonner";
import { HelpCircle } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  staggerItem,
} from "@/animations/commonAnimations";

const Projects = () => {
  const [results, setResults] = useState<Project[]>(sampleProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  const handleCommand = (command: string) => {
    const lowerCommand = command.toLowerCase().trim();

    if (lowerCommand === "help") {
      setShowHelp(true);
      return;
    }

    if (lowerCommand === "clear") {
      setResults([]);
      setSelectedProject(null);
      toast.success("Terminal cleared");
      return;
    }

    if (lowerCommand.startsWith("search:") || lowerCommand.startsWith("search ")) {
      const query = lowerCommand.replace(/^search:?\s*/, "").trim();
      if (query) {
        const filtered = sampleProjects.filter(
          (project) =>
            project.name.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query)
        );
        setResults(filtered);

        if (filtered.length === 0) {
          toast.error("No results", { description: "Try a broader term or type 'help'" });
        } else {
          toast.success(`Found ${filtered.length} project${filtered.length === 1 ? "" : "s"}`);
        }
      }
      return;
    }

    if (lowerCommand.startsWith("filter language:")) {
      const language = lowerCommand.replace("filter language:", "").trim();
      const filtered = sampleProjects.filter(
        (project) => project.language.toLowerCase() === language
      );
      setResults(filtered);

      if (filtered.length === 0) {
        toast.error("No projects found", { description: `No projects using ${language}` });
      } else {
        toast.success(`Found ${filtered.length} ${language} project${filtered.length === 1 ? "" : "s"}`);
      }
      return;
    }

    if (lowerCommand.startsWith("open ")) {
      const projectName = lowerCommand.replace("open ", "").trim();
      const project = sampleProjects.find(
        (p) => p.name.toLowerCase() === projectName
      );
      if (project) {
        setSelectedProject(project);
        toast.success("Project opened", { description: `Viewing ${project.name}` });
      } else {
        toast.error("Project not found", { description: "Check the name and try again" });
      }
      return;
    }

    if (lowerCommand.startsWith("star ")) {
      const projectName = lowerCommand.replace("star ", "").trim();
      const project = sampleProjects.find(
        (p) => p.name.toLowerCase() === projectName
      );
      if (project) {
        toast.success("Star added!", { description: "Thanks for supporting open source!" });
      } else {
        toast.error("Project not found");
      }
      return;
    }

    toast.error("Unknown command", { description: "Type 'help' for available commands" });
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 pl-16">

        {/* Header */}
        <motion.header
          className="glass-panel border-b border-border px-6 py-3 flex items-center justify-between"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div>
            <h1 className="text-lg font-bold text-foreground glow-purple">OpenSource Hub</h1>
            <p className="text-xs text-muted-foreground">Command your open source journey</p>
          </div>

          <button
            onClick={() => setShowHelp(true)}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
          >
            <HelpCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </motion.header>

        {/* Main Section */}
        <div className="flex-1 flex overflow-hidden">

          <div className="flex-1 flex flex-col min-w-0">

            {/* Terminal */}
            <motion.div variants={scaleIn} initial="initial" animate="animate">
              <Terminal onCommand={handleCommand} results={results} />
            </motion.div>

            {/* Results */}
            <AnimatePresence>
              {results.length > 0 && (
                <motion.div
                  className="border-t border-border bg-card/30 p-6 overflow-y-auto max-h-96"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-primary">→</span>
                    Results ({results.length})
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.map((project, idx) => (
                      <motion.div key={project.id} {...staggerItem(idx * 0.05)}>
                        <ProjectCard
                          project={project}
                          onClick={() => setSelectedProject(project)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Inspector Panel */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.3 }}
              >
                <Inspector project={selectedProject} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <HelpModal open={showHelp} onOpenChange={setShowHelp} />
    </div>
  );
};

export default Projects;
