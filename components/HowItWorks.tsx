export default function HowItWorks() {
  const steps: Array<{
    number: string;
    title: string;
    description: string;
    details: string[];
  }> = [
    {
      number: "01",
      title: "Décrivez votre poste",
      description:
        "Entrez le titre du poste et quelques responsabilités clés. Notre IA fait le reste.",
      details: [
        "Titre du poste",
        "3-5 responsabilités principales",
        "Stack technique (optionnel)",
      ],
    },
    {
      number: "02",
      title: "Ajustez le niveau de flou",
      description:
        "Utilisez notre slider unique pour trouver le parfait équilibre entre détail et attractivité.",
      details: [
        "Précis : tous les détails techniques",
        "Équilibré : professionnel et engageant",
        "Attractif : mystérieux et inspirant",
      ],
    },
    {
      number: "03",
      title: "Publiez et attirez",
      description:
        "Copiez votre description optimisée et publiez-la sur vos canaux de recrutement préférés.",
      details: [
        "Export en un clic",
        "Compatible tous jobboards",
        "Analytics de performance",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
            Comment ça marche
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">3 étapes</span> pour des job
            descriptions parfaites
          </h2>
          <p className="text-lg text-gray-400">
            Simple comme bonjour. Efficace comme jamais.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-electric-500/50 via-electric-500 to-electric-500/50" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="p-6 lg:p-8 rounded-2xl bg-navy-800/30 border border-navy-700 hover:border-electric-500/30 transition-all duration-300">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-electric-400 flex items-center justify-center mx-auto lg:mx-0">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Dot for connection line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 lg:left-8 transform -translate-y-1/2 w-4 h-4 bg-electric-500 rounded-full border-4 border-navy-900" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-center lg:text-left">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-electric-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-electric-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo Video Placeholder */}
        <div className="mt-16 lg:mt-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl bg-navy-800 border border-navy-700 overflow-hidden">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-electric-500/20 flex items-center justify-center group cursor-pointer hover:bg-electric-500/30 transition-colors">
                    <svg
                      className="w-8 h-8 text-electric-400 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400">
                    Voir JobFlou en action (1min30)
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-500/20 via-electric-400/10 to-electric-500/20 rounded-2xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
