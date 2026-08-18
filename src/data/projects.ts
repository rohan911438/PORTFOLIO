export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  chain: string;
  stack: string[];
  highlights: string[];
  github: string;
  live?: string;
  accent: "cyan" | "violet" | "amber" | "rose" | "emerald";
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    slug: "arbitpy",
    title: "ArbitPy",
    tagline: "Python-to-Blockchain compiler & deployment platform",
    description:
      "Compiles Python-style smart contracts to Solidity and Rust/Stylus, cutting gas costs by up to 40% on Arbitrum. Ships with a published TypeScript SDK, a full-stack deployment platform, and an AI code review assistant built on Gemini.",
    role: "Lead Developer, Team BROTHERHOOD",
    chain: "Arbitrum",
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
    flagship: true,
  },
  {
    slug: "a2a-protocol",
    title: "A2A Protocol",
    tagline: "Autonomous agents that negotiate, transact, and execute on-chain",
    description:
      "Users define a task once; buyer, seller, and verifier agents autonomously negotiate terms through an LLM-based negotiation engine, settle through x402-style micropayments, and lock funds in Soroban escrow until a verifier agent confirms completion.",
    role: "Builder",
    chain: "Stellar",
    stack: ["React", "Vite", "FastAPI", "Soroban", "Stellar SDK", "x402", "LLM Agents"],
    highlights: [
      "Five-layer stack: user, agent, intelligence, payment, and trust layers",
      "x402-style payment gates plus Soroban smart-contract escrow",
      "Verifier agents enforce trustless completion before funds release",
      "Live demo deployed on Netlify + Render with a native A2AT token",
    ],
    github: "https://github.com/rohan911438/A2A-Protocol",
    live: "https://a2aprotocol.netlify.app/",
    accent: "violet",
  },
  {
    slug: "grantloop",
    title: "GRANTLOOP",
    tagline: "Milestone-based research funding protocol on Solana",
    description:
      "Automates grant disbursement through decentralized milestone validation, releasing funds via smart contracts and rewarding contributors with a non-speculative loyalty token — bridging traditional research grants with Web3-native mechanisms.",
    role: "Builder",
    chain: "Solana",
    stack: ["Solana", "Anchor", "SPL Token", "React", "Vite", "Node.js", "Solana Actions"],
    highlights: [
      "On-chain registry with cryptographic milestone verification",
      "Automated fund release on milestone consensus via Anchor programs",
      "Contributor analytics and segmentation for ecosystem growth",
      "Live on Solana Devnet with an integrated Solana Actions (Blinks) flow",
    ],
    github: "https://github.com/rohan911438/GranTLooP",
    live: "https://grantloop.netlify.app/",
    accent: "amber",
  },
  {
    slug: "agent-market",
    title: "AgentMarket",
    tagline: "x402-native marketplace for AI financial-intelligence APIs",
    description:
      "A metered marketplace where AI agents pay per call for decision-focused financial intelligence — buy/sell calls with confidence scores and reasoning, not raw data — settled in USDC on Algorand behind an x402 payment gate.",
    role: "Builder",
    chain: "Algorand",
    stack: ["Next.js", "Fastify", "Prisma", "Algorand", "x402", "Turborepo", "OpenTelemetry"],
    highlights: [
      "Metered endpoints ($0.02–$0.05/call) for analysis, sentiment, and risk",
      "Agent-native TypeScript & Python SDKs that handle the payment loop",
      "Real on-chain USDC settlement on Algorand TestNet",
      "Supports OpenAPI, Model Context Protocol (MCP), and A2A discovery",
    ],
    github: "https://github.com/rohan911438/Agent-Market",
    accent: "emerald",
  },
  {
    slug: "fanpass",
    title: "FanPass",
    tagline: "AI trust network for peer-to-peer World Cup ticket resale",
    description:
      "Six independent AI agents verify ticket authenticity — QR validity, duplicate detection, metadata matching, tamper checks, seller ownership, and fair pricing — before a certificate can be minted, backed by non-custodial escrow contracts on Injective.",
    role: "Builder",
    chain: "Injective",
    stack: ["Next.js", "wagmi", "RainbowKit", "Express", "Solidity", "Hardhat", "OpenZeppelin"],
    highlights: [
      "6-agent Trust Engine gates minting behind a Trust Score ≥ 70",
      "OwnershipRegistry (ERC-721), EscrowMarketplace, and AttendanceRegistry contracts",
      "Non-custodial: wallet-signed transactions, backend never touches funds",
      "Built on Injective EVM Testnet for sub-second, low-overhead settlement",
    ],
    github: "https://github.com/rohan911438/FanPass",
    accent: "rose",
  },
  {
    slug: "agentic-exchange",
    title: "Agentic-Exchange",
    tagline: "Operating system for autonomous AI digital labor on Algorand",
    description:
      "A marketplace and settlement layer where AI agents can list, discover, and transact for digital labor, backed by on-chain escrow on Algorand.",
    role: "Lead Developer",
    chain: "Algorand",
    stack: ["Algorand", "JavaScript", "Smart Contracts", "AI Agents", "Escrow"],
    highlights: [
      "On-chain escrow for agent-to-agent digital labor transactions",
      "Discovery layer for autonomous AI agents to list & find work",
      "Built on Algorand for fast, low-cost settlement",
    ],
    github: "https://github.com/rohan911438/Agentic-Exchange",
    accent: "cyan",
  },
  {
    slug: "mycelium",
    title: "Mycelium",
    tagline: "Python-first framework for smart contracts & agentic orchestration on Stellar",
    description:
      "Lets developers write, test, and deploy Stellar smart contracts without learning Rust or Soroban directly, alongside orchestration tooling for autonomous AI agents operating on-chain.",
    role: "Core Contributor",
    chain: "Stellar",
    stack: ["Python", "Rust", "Soroban", "Stellar SDK", "AI Agents"],
    highlights: [
      "Abstracts Soroban/Rust complexity behind a Python-first API",
      "Orchestration layer for autonomous, agentic workflows",
      "Built for Stellar's smart contract ecosystem",
    ],
    github: "https://github.com/MyceliumStellar/Mycelium",
    accent: "violet",
  },
];

export const flagshipProject = projects.find((p) => p.flagship)!;
export const gridProjects = projects.filter((p) => !p.flagship);
export const githubProfile = "https://github.com/rohan911438";
