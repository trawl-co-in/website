import { Project } from "@/data/projects-data";
import { Star, GitFork, Copy, ExternalLink, Users, Clock } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

interface InspectorProps {
  project: Project | null;
}

export const Inspector = ({ project }: InspectorProps) => {
  if (!project) {
    return (
      <aside className="w-[40vw] glass-panel border-l border-border p-6 overflow-y-auto">
        <div className="text-center text-muted-foreground space-y-2">
          <div className="w-16 h-16 mx-auto rounded-full bg-muted/20 flex items-center justify-center mb-4">
            <ExternalLink className="w-8 h-8" />
          </div>
          <p className="text-sm">Select a project to view details</p>
        </div>
      </aside>
    );
  }

  const handleClone = () => {
    const cloneCommand = `git clone https://github.com/example/${project.name}.git`;
    navigator.clipboard.writeText(cloneCommand);
    toast.success("Clone command copied!", {
      description: "Ready to paste in your terminal",
    });
  };

  const handleStar = () => {
    toast.success("Star added!", {
      description: "Thanks for supporting open source!",
    });
  };

  return (
    <aside className="w-[40vw] glass-panel border-l border-border overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-2 glow-green">
            {project.name}
          </h2>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>

        {/* <div className="flex gap-2">
          <button 
            onClick={handleStar}
            className="flex-1 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors border border-primary/30 flex items-center justify-center gap-2"
          >
            <Star className="w-4 h-4" />
            Star
          </button>
          <button className="flex-1 px-3 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary text-sm font-medium transition-colors border border-secondary/30 flex items-center justify-center gap-2">
            <GitFork className="w-4 h-4" />
            Fork
          </button>
        </div> */}

        {/* <div className="glass-panel p-4 rounded-lg space-y-3 border border-border/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Contributors
            </span>
            <span className="font-medium">{project.contributors}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Last commit
            </span>
            <span className="font-medium">{project.lastCommit}</span>
          </div>
        </div> */}

        <button
          // onClick={handleClone}
          className="w-full px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium transition-colors border border-accent/30 flex items-center justify-center gap-2"
        >
          the repo is going public soon!
          {/* <Copy className="w-4 h-4" />
          Copy Clone Command */}
        </button>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            README
          </h3>
          <div className="glass-panel p-6 rounded-xl border border-border/30">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
    >
      {project.readme}
    </ReactMarkdown>
</div>

        </div>
      </div>
    </aside>
  );
};
