import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const TerminalHistory = ({ history, results }) => {
    const bottomRef = useRef(null);

    // Scroll to bottom whenever history changes
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history, results]);

    const showWelcome = history.length === 0 && results.length === 0;

    return (
        <div className="overflow-y-auto p-2 space-y-1">
            {showWelcome && (
                <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span>Welcome to trawl Terminal</span>
                    </p>
                    <p className="pl-6 text-sm">
                        Type your first command — try "search: react form"
                    </p>
                    <p className="pl-6 text-sm">
                        Or type "help" for available commands
                    </p>
                </div>
            )}

            {history.map((cmd, i) => (
                <div key={i} className="flex items-center gap-1 text-terminal-command">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span>{cmd}</span>
                </div>
            ))}

            {/* invisible anchor used for auto-scroll */}
            <div ref={bottomRef} />
        </div>
    );
};

export default TerminalHistory;
