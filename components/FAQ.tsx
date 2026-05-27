"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Qu'est-ce que le 'niveau de flou' exactement ?",
      answer:
        "Le niveau de flou est notre fonctionnalité signature. C'est un slider qui vous permet d'ajuster le degré de précision de vos job descriptions. Un niveau bas donne des détails très techniques (stack, années d'expérience, salaire). Un niveau haut crée une description plus inspirante et mystérieuse qui intrigue les candidats sans les effrayer avec trop d'exigences.",
    },
    {
      question: "L'essai gratuit est-il vraiment sans engagement ?",
      answer:
        "Absolument ! L'essai de 14 jours est 100% gratuit et sans carte bancaire requise. Vous pouvez tester toutes les fonctionnalités Pro pendant 2 semaines. À la fin de l'essai, vous pouvez soit passer au plan payant, soit continuer avec le plan Starter gratuit.",
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer:
        "Oui, vous pouvez annuler votre abonnement en un clic depuis votre tableau de bord. Aucun engagement minimum, aucune pénalité. Vous gardez accès à toutes vos fonctionnalités jusqu'à la fin de votre période de facturation.",
    },
    {
      question: "Les job descriptions générées sont-elles uniques ?",
      answer:
        "Oui ! Chaque description est générée de manière unique en fonction de vos inputs (titre, responsabilités, culture d'entreprise) et du niveau de flou choisi. Notre IA ne copie pas de templates existants mais crée du contenu original adapté à votre startup.",
    },
    {
      question: "JobFlou fonctionne-t-il pour des postes non-tech ?",
      answer:
        "Notre outil est optimisé pour les startups tech, mais fonctionne très bien pour tous types de postes : Sales, Marketing, Finance, Operations, etc. Les templates sont adaptés à l'écosystème startup, pas uniquement aux rôles techniques.",
    },
    {
      question: "Comment fonctionne le support ?",
      answer:
        "Le plan Starter inclut l'accès à notre centre d'aide et documentation. Les plans Pro et Team bénéficient d'un support prioritaire par email avec réponse garantie en moins de 24h. Le plan Team inclut également un account manager dédié pour un accompagnement personnalisé.",
    },
    {
      question: "Puis-je exporter mes descriptions vers mon ATS ?",
      answer:
        "Le plan Starter permet l'export en texte brut. Les plans Pro et Team offrent l'export dans tous les formats (Word, PDF, HTML) et le plan Team inclut des intégrations directes avec les principaux ATS du marché (Lever, Greenhouse, Workable, etc.).",
    },
    {
      question: "Y a-t-il une limite au nombre de descriptions ?",
      answer:
        "Le plan Starter est limité à 5 descriptions par mois. Les plans Pro et Team offrent des descriptions illimitées. Générez autant de variations que vous le souhaitez pour trouver la formulation parfaite !",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800/50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-gray-400">
            Tout ce que vous devez savoir sur JobFlou
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-navy-800/50 border border-navy-700 overflow-hidden transition-all duration-200 hover:border-electric-500/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-electric-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="mailto:hello@jobflou.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg font-medium transition-all duration-200 border border-navy-600 hover:border-electric-500/50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contactez-nous</span>
          </a>
        </div>
      </div>
    </section>
  );
}
