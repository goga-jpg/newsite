# 5DM Group — Website

Interactive company profile for [5DM Group](https://5dm.africa), Africa's audience-intelligence partner. Built with React, TypeScript, Three.js (via `@react-three/fiber`), Tailwind, Framer Motion and Lenis smooth scroll.

## Stack

- **Vite + React + TypeScript** — fast, typed foundation
- **@react-three/fiber + drei** — 3D scenes (hero globe, data mesh, intelligence core)
- **Framer Motion** — section reveals and micro-interactions
- **Tailwind CSS** — design system
- **Lenis** — buttery smooth scrolling

## Dev

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build
npm run preview   # serve dist/
```

## Structure

```
src/
├── App.tsx              # shell + smooth scroll init
├── components/          # Nav, Logo, Cursor, ScrollProgress
├── three/               # R3F scenes
│   ├── AfricaGlobe.tsx  # hero 3D globe (Africa highlighted)
│   ├── DataMesh.tsx     # animated wireframe icosahedron
│   └── IntelligenceCore.tsx # multi-ring AI engine
├── sections/            # one file per page section
└── lib/data.ts          # copy, clients, team, verticals
```
