export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  license: string;
  readme: string;
  contributors: number;
  lastCommit: string;
}

export const sampleProjects: Project[] = [
  {
    id: "1",
    name: "denoiser-app",
    description: "Lightweight real-time voice denoising powered by AI — focused solely on removing background noise.",
    language: "Python",
    stars: 12847,
    license: "MIT",
    readme: `# Denoiser App

A lightweight real-time voice denoising engine designed to clean microphone input using advanced AI noise reduction. Built for developers who want simple, high-quality voice cleanup without unnecessary extras.

🚧 **Currently in active development — major features coming soon!**

## Features (Current & Planned)
- 🔇 Real-time background noise removal
- 🎤 Works with any microphone input
- ⚡ Low-latency audio processing

## License
MIT
` , contributors: 23,
    lastCommit: "1 day ago",
  },

//   {
//     id: "2",
//     name: "tailwind-plugins",
//     description: "Essential Tailwind CSS plugins for modern web design",
//     language: "JavaScript",
//     stars: 8934,
//     license: "MIT",
//     readme: `# Tailwind Plugins Collection

// A curated collection of useful Tailwind CSS plugins.

// ## Included Plugins
// - Glass morphism utilities
// - Advanced gradients
// - Text effects
// - Animation helpers
// - Container queries

// ## Installation
// \`\`\`bash
// npm install @tailwind/plugins-collection
// \`\`\``,
//     contributors: 23,
//     lastCommit: "1 day ago",
//   }
];
