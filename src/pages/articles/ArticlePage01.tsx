import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

export const ArticlePage01 = () => {
    return (
        <div className="min-h-screen flex w-full">
            <Sidebar />
           <main className="flex-1 overflow-auto pt-16 sm:pt-0 sm:pl-16">





                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-5xl font-bold font-mono glow-purple">Documentation: we never wrote</h1>
                    <div className="mb-10 space-y-3">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono mt-4">
                            <div className="flex items-center gap-1"><User className="h-4 w-4" /><span>PS</span></div>
                            <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /><span>2025-11-15</span></div>
                            <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>3 min read</span></div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <Badge key="docs" variant="outline" className="border-primary/30 text-primary">docs</Badge>
                       <Badge key="satire" variant="outline" className="border-primary/30 text-primary">satire</Badge>
                        </div>
                    </div>

                    <div className="max-w-none font-sans leading-relaxed text-lg">
                        <p className="mb-6 text-xl text-muted-foreground">
                            Why good documentation is like a unicorn: everyone talks about it, nobody's actually seen it.</p>
                        <p className="mb-6 text-xl text-muted-foreground">
                            Let's admit the truth. Every developer wants good documentation in the same way every person
                            wants to start a daily workout routine. It sounds amazing in theory, and then life taps you
                            on the shoulder and says, <span className="italic">"Absolutely not."</span> So we nod to
                            ourselves, close the editor, and whisper the classic line:{" "}
                            <span className="italic">"I'll write the docs later."</span> And we believe it for about twelve
                            seconds. Weeks pass... someone opens the file. They stare at a function that looks like it
                            came from a crime scene.
                        </p>

                        <pre className="bg-muted p-4 rounded">
                            <code>// TODO: Write documentation for this</code>
                        </pre>

                        <p className="mb-6 text-xl text-muted-foreground">
                            A tiny time capsule from past you. A bold promise that present you has absolutely no memory of
                            making.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4 font-mono">
                            Auto-generated docs: The participation trophy of documentation
                        </h3>

                        <p className="mb-6 text-xl text-muted-foreground">
                            Eventually someone on the team gets inspired and says,{" "}
                            <span className="italic">"Let's just auto-generate the documentation. Easy win."</span>
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground">
                            So you run the tool. It proudly generates 400 pages of content that looks very official and
                            explains absolutely nothing. You get helpful insights such as:
                            <pre className="bg-muted p-4 rounded mt-4">
                                <code>handleRequest(req, res): Handles a request.</code>
                            </pre>
                            <span className="italic">Truly groundbreaking!</span>
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground">
                            You commit the folder because deleting it would feel rude after all the work the tool put in.
                            Then you close it and never open it again. It becomes that one kitchen appliance you bought
                            with enthusiasm and then immediately ignored.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4 font-mono">The dream of “good documentation”</h3>

                        <p className="mb-6 text-xl text-muted-foreground">
                            Every team has a meeting where someone says, “We should really invest in documentation.”
                            Everyone nods. Everyone agrees. Everyone feels responsible and grown-up.
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground">
                            Then the sprint starts and the documentation dream floats off into the sunset like a balloon
                            someone let go of in a parking lot.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4 font-mono">Will AI save us?</h3>

                        <p className="mb-6 text-xl text-muted-foreground">
                            Maybe. AI can help write drafts when we are tired or confused or simply pretending to be
                            productive. Sometimes it even explains our own code better than we can, which is impressive
                            and slightly unsettling.
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground">
                            Of course, sometimes it also describes a simple loop as if it is performing advanced
                            astrophysics. But that is a different problem.
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground">
                            AI can help move things along, but it still needs a human touch. Only we know why we wrote the
                            code the way we did, and only we can prevent the documentation from becoming fiction.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4 font-mono">Why even small documentation matters</h3>

                        <p className="mb-6 text-xl text-muted-foreground">
                            The truth is that documentation does not have to be perfect. It just needs to be a little
                            helpful.
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground italic">
                            A short paragraph here. A tiny comment there. A small note that prevents your teammate from
                            sending you a message that starts with "Quick question…" Your future self will be grateful
                            too.
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground">
                            Documentation may always feel like the code we forgot to write, but it does not have to stay
                            that way. A few honest sentences, a sprinkle of sarcasm, a little AI assistance if needed—it
                            all helps. And if all else fails, remember this:
                        </p>

                        <p className="mb-6 text-xl text-muted-foreground italic">
                            Half the battle is simply writing more documentation than the person who came before you. A low bar, but a bar nonetheless.
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
};
