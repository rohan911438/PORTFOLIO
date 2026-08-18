export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  highlights: string[];
  github: string;
  live?: string;
  accent: "cyan" | "violet" | "amber";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "arbitpy",
    title: "ArbitPy",
    tagline: "Python-to-Blockchain compiler & deployment platform",
    description:
      "Compiles Python-style smart contracts to Solidity and Rust/Stylus, cutting gas costs by up to 40% on Arbitrum. Ships with a published TypeScript SDK, a full-stack deployment platform, and an AI code review assistant.",
    role: "Lead Developer, Team BROTHERHOOD",
    stack: [
      "Python",
      "Solidity",
      "Rust/Stylus",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Gemini API",
    ],
    highlights: [
      "Up to 40% gas savings on Arbitrum vs. hand-written Solidity",
      "Published arbitpy-sdk on npm — works across 8+ EVM networks",
      "AI-powered code review assistant built on Gemini",
      "Live contract verified on Arbitrum Sepolia",
    ],
    github: "https://github.com/rohan911438/ArbitPy",
    accent: "cyan",
    featured: true,
  },
  {
    slug: "mycelium",
    title: "Mycelium",
    tagline: "Python-first framework for smart contracts & agentic orchestration on Stellar",
    description:
      "Lets developers write, test, and deploy Stellar smart contracts without learning Rust or Soroban directly, alongside orchestration tooling for autonomous AI agents operating on-chain.",
    role: "Core Contributor",
    stack: ["Python", "Rust", "Soroban", "Stellar SDK", "AI Agents"],
    highlights: [
      "Abstracts Soroban/Rust complexity behind a Python-first API",
      "Orchestration layer for autonomous, agentic workflows",
      "Built for Stellar's smart contract ecosystem",
    ],
    github: "https://github.com/MyceliumStellar/Mycelium",
    accent: "violet",
    featured: true,
  },
  {
    slug: "agentic-exchange",
    title: "Agentic-Exchange",
    tagline: "Operating system for autonomous AI digital labor on Algorand",
    description:
      "A marketplace and settlement layer where AI agents can list, discover, and transact for digital labor, backed by on-chain escrow on Algorand.",
    role: "Lead Developer",
    stack: ["Algorand", "Python", "Smart Contracts", "AI Agents", "Escrow"],
    highlights: [
      "On-chain escrow for agent-to-agent digital labor transactions",
      "Discovery layer for autonomous AI agents to list & find work",
      "Built on Algorand for fast, low-cost settlement",
    ],
    github: "https://github.com/rohan911438/Agentic-Exchange",
    accent: "amber",
    featured: true,
  },
];

export const githubProfile = "https://github.com/rohan911438";
export const githubRepoCount = "73+";
