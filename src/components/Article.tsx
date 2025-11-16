import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn, staggerItem } from "@/animations/commonAnimations";

export const ArticleHeader = ({ article }) => (
    <motion.div
        className="mb-10 space-y-3"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
    >
        <h1 className="text-5xl font-bold font-mono glow-purple">{article.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono mt-4">
            <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} read</span>
            </div>
        </div>


        <div className="flex flex-wrap gap-2 mt-4">
            {article.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/30 text-primary">
                    {tag}
                </Badge>
            ))}
        </div>
    </motion.div>
);

export const ArticleContent = ({ content }) => (
    <motion.div
        className="prose prose-invert max-w-none font-sans leading-relaxed text-lg"
        variants={fadeIn}
        initial="initial"
        animate="animate"
    >
        {content?.map((block, idx) => (
            <motion.div key={idx} {...staggerItem(idx * 0.05)}>
                {block.type === "paragraph" && <p>{block.text}</p>}
                {block.type === "heading" && (
                    <h2 className="text-3xl font-bold mt-8 mb-4 font-mono">{block.text}</h2>
                )}
            </motion.div>
        ))}
    </motion.div>
);

export const ArticleFooterCard = () => (
    <motion.div
        variants={scaleIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-16"
    >
        <Card className="glass-panel p-8 text-center">
            <p className="text-muted-foreground font-mono">
                <span className="text-accent">{">"}</span> Thanks for reading!
            </p>
        </Card>
    </motion.div>
);