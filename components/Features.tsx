export default function Features() {
  const features: Array<{
    icon: string;
    title: string;
    description: string;
    highlight: string;
  }> = [
    {
      icon: "🎯",
      title: "Ciblage intelligent",
      description:
        "Notre algorithme analyse votre poste et votre culture d'entreprise pour générer des descriptions qui attirent exactement les profils recherchés.",
      highlight: "93% de matching",
    },
    {
      icon: "⚡",
      title: "Génération instantanée",
      description:
        "Plus besoin de passer des heures à rédiger. Obtenez une job description professionnelle en moins de 2 minutes.",
      highlight: "2 min max",
    },
    {
      icon: "🎚️",
      title: "Contrôle du flou",
      description:
        "Ajustez le niveau de détail avec notre slider unique. Trouvez le sweet spot entre transparence et attractivité.",
      highlight: "100% personnalisable",
    },
    {
      icon: "📊",
      title: "Analytics intégrés",
      description:
        "Suivez les performances de vos descriptions : vues, candidatures, et taux de conversion pour optimiser continuellement.",
      highlight: "Data-driven",
    },
    {
      icon: "🔄",
      title: "Templates startup",
      description:
        "Bibliothèque de templates optimisés pour les startups tech. Sales, Engineering, Product, Marketing - tout y est.",
      highlight: "50+ templates",
    },
    {
      icon: "🌍",
      title: "Multi-langue",
      description:
        "Générez vos descriptions en français, anglais ou espagnol. Parfait pour les équipes internationales.",
      highlight: "3 langues",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
            Fonctionnalités
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tout ce dont vous avez besoin pour{" "}
            <span className="gradient-text">recruter mieux</span>
          </h2>
          <p className="text-lg text-gray-400">
            Des outils puissants conçus spécifiquement pour les HR managers de
            startups tech. Simple, efficace, et délicieusement flou.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-navy-800/50 border border-navy-700 hover:border-electric-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-navy-700 flex items-center justify-center text-2xl mb-5 group-hover:bg-electric-500/20 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Highlight Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 text-xs font-medium mb-4">
                {feature.highlight}
              </span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Et bien plus encore à découvrir...
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-medium transition-colors"
          >
            <span>Voir tous les tarifs</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
