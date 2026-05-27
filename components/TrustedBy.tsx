export default function TrustedBy() {
  const logos: Array<{ name: string; initial: string }> = [
    { name: "TechFlow", initial: "TF" },
    { name: "DataPulse", initial: "DP" },
    { name: "CloudNine", initial: "C9" },
    { name: "FinStack", initial: "FS" },
    { name: "GreenTech", initial: "GT" },
    { name: "DevOps.io", initial: "DO" },
  ];

  return (
    <section className="py-12 lg:py-16 relative border-y border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">
            Utilisé par 500+ startups tech innovantes
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity cursor-default"
            >
              <div className="w-8 h-8 rounded bg-navy-700 flex items-center justify-center text-xs font-bold text-electric-400">
                {logo.initial}
              </div>
              <span className="text-gray-400 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
