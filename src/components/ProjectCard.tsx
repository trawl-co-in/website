import { Star, GitFork, FileText } from "lucide-react";
import { Project } from "@/data/sampleProjects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "hsl(210 100% 66%)",
  JavaScript: "hsl(53 93% 54%)",
  Python: "hsl(207 51% 44%)",
  Rust: "hsl(16 100% 50%)",
  Go: "hsl(180 60% 65%)",
};

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const languageColor = LANGUAGE_COLORS[project.language] || "hsl(var(--muted-foreground))";

  return (
    <div 
      onClick={onClick}
      className="glass-panel p-4 rounded-lg hover:bg-primary/5 transition-all cursor-pointer result-card-enter group border border-border/50 hover:border-primary/30"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs flex-wrap">
        <span 
          className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-card/50"
          style={{ color: languageColor }}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColor }} />
          {project.language}
        </span>
        
        {/* <span className="flex items-center gap-1 text-muted-foreground">
          <Star className="w-3 h-3" />
          {project.stars.toLocaleString()}
        </span> */}
        
        <span className="flex items-center gap-1 text-muted-foreground">
          <FileText className="w-3 h-3" />
          {project.license}
        </span>
      </div>

      <button className="mt-3 w-full px-3 py-1.5 rounded bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors border border-primary/30">
        Open Project
      </button>
    </div>
  );
};
