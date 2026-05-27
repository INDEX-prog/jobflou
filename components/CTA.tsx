import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/10 via-electric-400/5 to-electric-500/10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            <span className="text-electric-300 text-sm font-medium">
              Offre de lancement : -20% sur l&apos;abonnement annuel
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à recruter avec
            <br />
            <span className="gradient-text">le bon niveau de flou ?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Rejoignez 500+ startups tech qui ont transformé leurs recrutements.
            Commencez votre essai gratuit de 14 jours maintenant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-electric-500 hover:bg-electric-400 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-electric-500/25 animate-pulse-glow"
            >
              Démarrer l&apos;essai gratuit
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 bg-navy-700 hover:bg-navy-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 border border-navy-600 hover:border-electric-500/50"
            >
              Voir la démo
            </Link>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-electric-400"
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
              <span>Sans carte bancaire</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-electric-400"
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
              <span>14 jours d&apos;essai</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-electric-400"
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
              <span>Annulation en 1 clic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
