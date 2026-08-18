const chains = [
  "Arbitrum",
  "Stellar",
  "Solana",
  "Algorand",
  "Injective",
  "Ethereum",
  "Polygon",
];

export default function ChainMarquee() {
  const items = [...chains, ...chains];

  return (
    <div className="relative border-y border-border bg-surface/40 py-5 overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent z-10"
        aria-hidden="true"
      />
      <div className="flex w-max animate-marquee gap-10 sm:gap-16" aria-hidden="true">
        {items.map((chain, i) => (
          <span
            key={`${chain}-${i}`}
            className="font-display text-lg sm:text-xl font-medium text-faint/70 whitespace-nowrap tracking-wide"
          >
            {chain}
          </span>
        ))}
      </div>
      <span className="sr-only">
        Shipped on Arbitrum, Stellar, Solana, Algorand, Injective, Ethereum, and Polygon
      </span>
    </div>
  );
}
