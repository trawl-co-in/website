import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Terminal, Search, Filter, Star, Copy, HelpCircle } from "lucide-react";

interface HelpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const COMMAND_EXAMPLES = [
  {
    icon: Search,
    command: "search: react calendar",
    description: "Search for projects by keywords",
  },
  {
    icon: Filter,
    command: "filter language:python",
    description: "Filter projects by programming language",
  },
  {
    icon: Star,
    command: "star <project-name>",
    description: "Star a project (select it first)",
  },
  {
    icon: Copy,
    command: "clone <project-name>",
    description: "Copy clone command to clipboard",
  },
  {
    icon: Terminal,
    command: "clear",
    description: "Clear the terminal",
  },
];

const KEYBOARD_SHORTCUTS = [
  { keys: "↑ ↓", description: "Navigate command history" },
  { keys: "Tab", description: "Autocomplete suggestion" },
  { keys: "Ctrl+L", description: "Focus terminal input" },
  { keys: "Esc", description: "Clear current input" },
];

export const HelpModal = ({ open, onOpenChange }: HelpModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel border-primary/30 max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl glow-green">
            <HelpCircle className="w-6 h-6" />
            Terminal Commands
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your guide to navigating OpenTerminal
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              Available Commands
            </h3>
            <div className="space-y-2">
              {COMMAND_EXAMPLES.map((example, i) => (
                <div
                  key={i}
                  className="glass-panel p-3 rounded-lg border border-border/30 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <example.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <code className="text-sm font-mono text-secondary">
                        {example.command}
                      </code>
                      <p className="text-xs text-muted-foreground mt-1">
                        {example.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Keyboard Shortcuts
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {KEYBOARD_SHORTCUTS.map((shortcut, i) => (
                <div
                  key={i}
                  className="glass-panel p-3 rounded-lg border border-border/30 flex items-center gap-2"
                >
                  <kbd className="px-2 py-1 bg-muted/50 rounded text-xs font-mono border border-border">
                    {shortcut.keys}
                  </kbd>
                  <span className="text-xs text-muted-foreground">
                    {shortcut.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-4 rounded-lg border border-accent/30 bg-accent/5">
            <p className="text-sm text-foreground">
              <strong className="text-accent">Pro tip:</strong> Start typing any command and press Tab to autocomplete. 
              Commands are case-insensitive and flexible!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
