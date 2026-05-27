"use client";

import { useState } from "react";
import Link from "next/link";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular: boolean;
  badge?: string;
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: 0,
      yearlyPrice: 0,
      description: "Pour découvrir JobFlou et tester le concept",
      features: [
        { text: "5 job descriptions / mois", included: true },
        { text: "Niveau de flou basique", included: true },
        { text: "Export texte", included: true },
        { text: "Templates standards", included: true },
        { text: "Analytics basiques", included: false },
        { text: "Support prioritaire", included: false },
        { text: "Multi-langue", included: false },
      ],
      cta: "Commencer gratuitement",
      popular: false,
    },
    {
      name: "Pro",
      price: 29,
      yearlyPrice: 24,
      description: "Pour les startups qui recrutent activement",
      features: [
        { text: "Job descriptions illimitées", included: true },
        { text: "Contrôle total du flou", included: true },
        { text: "Export tous formats", included: true },
        { text: "50+ templates startup", included: true },
        { text: "Analytics avancés", included: true },
        { text: "Support prioritaire", included: true },
        { text: "Multi-langue (3)", included: false },
      ],
      cta: "Essai gratuit 14 jours",
      popular: true,
      badge: "Le plus populaire",
    },
    {
      name: "Team",
      price: 79,
      yearlyPrice: 66,
      description: "Pour les équipes RH avec plusieurs recruteurs",
      features: [
        { text: "Tout de Pro +", included: true },
        { text: "5 utilisateurs inclus", included: true },
        { text: "Bibliothèque partagée", included: true },
        { text: "Templates personnalisés", included: true },
        { text: "Multi-langue (3)", included: true },
        { text: "Intégrations ATS", included: true },
        { text: "Account manager dédié", included: true },
      ],
      cta: "Contacter les ventes",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-electric-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-electric-500/10 text-electric-400 text-sm font-medium mb-6">
            Tarifs simples
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Choisissez votre{" "}
            <span className="gradient-text">niveau de flou</span>
          </h2>
          <p className="text-lg text-gray-400">
            Commencez gratuitement, passez Pro quand vous êtes prêt. Sans
            engagement, annulable à tout moment.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm font-medium ${
              !isYearly ? "text-white" : "text-gray-400"
            }`}
          >
            Mensuel
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
              isYearly ? "bg-electric-500" : "bg-navy-600"
            }`}
            aria-label="Toggle billing period"
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${
                isYearly ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isYearly ? "text-white" : "text-gray-400"
            }`}
          >
            Annuel
          </span>
          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
            -17%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-electric-500/10 to-navy-800/50 border-2 border-electric-500/50 scale-105 lg:scale-110 z-10"
                  : "bg-navy-800/50 border border-navy-700 hover:border-electric-500/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-electric-500 text-white text-sm font-medium">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-white">
                    {isYearly ? plan.yearlyPrice : plan.price}€
                  </span>
                  <span className="text-gray-400 mb-2">/mois</span>
                </div>
                {isYearly && plan.price > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Facturé {(isYearly ? plan.yearlyPrice : plan.price) * 12}€/an
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href={plan.name === "Team" ? "#contact" : "#signup"}
                className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-200 mb-6 ${
                  plan.popular
                    ? "bg-electric-500 hover:bg-electric-400 text-white hover:shadow-lg hover:shadow-electric-500/25"
                    : "bg-navy-700 hover:bg-navy-600 text-white border border-navy-600 hover:border-electric-500/50"
                }`}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
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
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trial Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-navy-800/50 border border-navy-700">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-gray-300">
              <strong className="text-white">14 jours d&apos;essai gratuit</strong>{" "}
              • Sans carte bancaire • Annulation en 1 clic
            </span>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Des questions sur nos tarifs ?
          </p>
          <Link
            href="#faq"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-medium transition-colors"
          >
            <span>Consultez notre FAQ</span>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
