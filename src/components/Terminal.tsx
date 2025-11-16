import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Project } from "@/data/projects-data";
import TerminalHistory from "./TerminalHistory";

interface TerminalProps {
  onCommand: (command: string) => void;
  results: Project[];
}

const COMMANDS = [
  "search: react",
  "search: python",
  "filter language:typescript",
  "help",
  "clear",
];

export const Terminal = ({ onCommand, results }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.length > 0) {
      const filtered = COMMANDS.filter(cmd =>
        cmd.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory([...history, input]);
      onCommand(input);
      setInput("");
      setHistoryIndex(-1);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab" && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col relative terminal-scanlines terminal-vignette overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <TerminalHistory history={history} results={results} />
      </div>

      <div className="border-t border-border bg-card/50 backdrop-blur-sm p-4">
        <form onSubmit={handleSubmit} className="relative">
          {showSuggestions && (
            <div className="absolute bottom-full mb-2 left-0 right-0 glass-panel p-2 rounded-lg space-y-1">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setInput(suggestion);
                    setShowSuggestions(false);
                    inputRef.current?.focus();
                  }}
                  className="w-full text-left px-3 py-2 rounded hover:bg-primary/10 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <ChevronRight className="w-5 h-5 text-primary glow-green" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Try "search: react calendar" or type "help"'
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-mono"
              autoFocus
            />
            <span className="w-2 h-5 bg-primary cursor-blink" />
          </div>
        </form>
        <p className="text-xs text-muted-foreground mt-2 pl-7">
          Use ↑↓ for history, Tab to autocomplete
        </p>
      </div>
    </div>
  );
};
