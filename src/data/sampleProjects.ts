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
    name: "react-calendar-pro",
    description: "A powerful, accessible calendar component for React with drag-and-drop",
    language: "TypeScript",
    stars: 12847,
    license: "MIT",
    readme: `# React Calendar Pro

A highly customizable and accessible calendar component for React applications.

## Features
- 📅 Full calendar, month, week, and day views
- 🎨 Fully customizable themes
- ♿ WCAG 2.1 Level AA compliant
- 🖱️ Drag and drop support
- 📱 Mobile responsive
- 🌍 i18n support

## Installation
\`\`\`bash
npm install react-calendar-pro
\`\`\`

## Quick Start
\`\`\`jsx
import { Calendar } from 'react-calendar-pro';

function App() {
  return <Calendar events={events} />;
}
\`\`\``,
    contributors: 47,
    lastCommit: "2 hours ago",
  },
  {
    id: "2",
    name: "tailwind-plugins",
    description: "Essential Tailwind CSS plugins for modern web design",
    language: "JavaScript",
    stars: 8934,
    license: "MIT",
    readme: `# Tailwind Plugins Collection

A curated collection of useful Tailwind CSS plugins.

## Included Plugins
- Glass morphism utilities
- Advanced gradients
- Text effects
- Animation helpers
- Container queries

## Installation
\`\`\`bash
npm install @tailwind/plugins-collection
\`\`\``,
    contributors: 23,
    lastCommit: "1 day ago",
  },
  {
    id: "3",
    name: "ember-thing",
    description: "Modern state management for Ember.js applications",
    language: "JavaScript",
    stars: 6521,
    license: "BSD-3",
    readme: `# Ember Thing

Lightweight and intuitive state management for Ember.js.

## Why Ember Thing?
- 🚀 Zero dependencies
- 💡 Intuitive API
- 🔄 Time-travel debugging
- 📦 Tree-shakeable

## Usage
\`\`\`js
import { createStore } from 'ember-thing';

const store = createStore({
  count: 0,
  increment() {
    this.count++;
  }
});
\`\`\``,
    contributors: 12,
    lastCommit: "3 days ago",
  },
  {
    id: "4",
    name: "python-ml-toolkit",
    description: "Comprehensive machine learning toolkit with pre-trained models",
    language: "Python",
    stars: 19283,
    license: "Apache-2.0",
    readme: `# Python ML Toolkit

Professional-grade machine learning toolkit for Python developers.

## Features
- 🧠 50+ pre-trained models
- 📊 Advanced visualization tools
- ⚡ GPU acceleration support
- 🔬 Experiment tracking

## Installation
\`\`\`bash
pip install python-ml-toolkit
\`\`\`

## Example
\`\`\`python
from ml_toolkit import Model

model = Model.load('resnet50')
predictions = model.predict(image)
\`\`\``,
    contributors: 89,
    lastCommit: "5 hours ago",
  },
  {
    id: "5",
    name: "vue-form-wizard",
    description: "Beautiful multi-step form wizard component for Vue 3",
    language: "TypeScript",
    stars: 5678,
    license: "MIT",
    readme: `# Vue Form Wizard

Create stunning multi-step forms with ease.

## Features
- ✨ Beautiful default styles
- 🎯 Step validation
- 💾 Auto-save progress
- 📱 Mobile-first design
- 🎨 Themeable

## Installation
\`\`\`bash
npm install vue-form-wizard
\`\`\``,
    contributors: 31,
    lastCommit: "1 week ago",
  },
  {
    id: "6",
    name: "rust-web-server",
    description: "Lightning-fast HTTP server framework built with Rust",
    language: "Rust",
    stars: 14567,
    license: "MIT",
    readme: `# Rust Web Server

Blazingly fast web server framework for Rust.

## Performance
- ⚡ Sub-millisecond response times
- 🔥 Zero-cost abstractions
- 🛡️ Memory safe by default
- 📈 Handles millions of requests/sec

## Quick Start
\`\`\`rust
use rust_web_server::Server;

#[tokio::main]
async fn main() {
    let server = Server::new()
        .route("/", handler)
        .start("0.0.0.0:3000")
        .await;
}
\`\`\``,
    contributors: 67,
    lastCommit: "4 hours ago",
  },
  {
    id: "7",
    name: "go-microservices",
    description: "Production-ready microservices framework with gRPC support",
    language: "Go",
    stars: 11234,
    license: "MIT",
    readme: `# Go Microservices

Enterprise-grade microservices framework for Go.

## Features
- 🔌 gRPC & REST support
- 📊 Built-in monitoring
- 🔐 JWT authentication
- 🌐 Service discovery
- 💾 Database migrations

## Installation
\`\`\`bash
go get github.com/example/go-microservices
\`\`\``,
    contributors: 45,
    lastCommit: "2 days ago",
  },
  {
    id: "8",
    name: "svelte-animations",
    description: "Smooth, performant animations library for Svelte",
    language: "TypeScript",
    stars: 7890,
    license: "MIT",
    readme: `# Svelte Animations

Silky-smooth animations for Svelte applications.

## Features
- 🎭 Physics-based animations
- 🎨 Easy spring configurations
- 🔄 Automatic cleanup
- 📦 Tiny bundle size (2KB)
- ♿ Respects prefers-reduced-motion

## Usage
\`\`\`svelte
<script>
  import { spring } from 'svelte-animations';
  let coords = spring({ x: 0, y: 0 });
</script>

<div style="transform: translate({$coords.x}px, {$coords.y}px)">
  Animated!
</div>
\`\`\``,
    contributors: 28,
    lastCommit: "6 days ago",
  },
];
