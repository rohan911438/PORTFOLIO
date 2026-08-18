export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Solidity", "SQL", "Rust"],
  },
  {
    category: "AI / ML",
    items: [
      "Generative AI",
      "Predictive Modeling",
      "Feature Engineering",
      "EDA",
      "Model Evaluation",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
    ],
  },
  {
    category: "Full Stack",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
      "Tailwind CSS",
      "MySQL",
    ],
  },
  {
    category: "Web3 / Blockchain",
    items: [
      "Foundry",
      "Hardhat",
      "Ethers.js",
      "Viem",
      "Wagmi",
      "OpenZeppelin",
      "Ethereum",
      "Arbitrum",
      "Solana",
      "Stellar",
      "Algorand",
      "Polygon",
    ],
  },
  {
    category: "Community & DevRel",
    items: [
      "Developer Onboarding",
      "Community Activation",
      "Ecosystem Partnerships",
      "Event Organization",
      "Public Speaking",
      "Mentorship",
    ],
  },
];
