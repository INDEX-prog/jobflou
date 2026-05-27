"use client";

import { useState } from "react";

interface StripeCheckoutProps {
  planName: string;
  price: number;
  isYearly?: boolean;
}

export default function StripeCheckout({
  planName,
  price,
  isYearly = false,
}: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCheckout = async (): Promise<void> => {
    if (!email) {
      alert("Veuillez entrer votre email");
      return;
    }

    setIsLoading(true);

    // Simulate Stripe checkout redirect
    // In production, this would call your API to create a Stripe checkout session
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to Stripe checkout URL
      // window.location.href = checkoutUrl;
      alert(
        `Redirection vers Stripe Checkout pour ${planName} à ${price}€/${
          isYearly ? "an" : "mois"
        }`
      );
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full py-3 bg-electric-500 hover:bg-electric-400 text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/25"
      >
        S&apos;abonner à {planName}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 lg:p-8 max-w-md w-full mx-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <svg
                className="w-6 h-6"
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
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-electric-500/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-electric-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Passer à {planName}
              </h3>
              <p className="text-gray-400 text-sm">
                Commencez votre essai gratuit de 14 jours
              </p>
            </div>

            {/* Plan Summary */}
            <div className="bg-navy-900/50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Plan</span>
                <span className="text-white font-medium">{planName}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Prix</span>
                <span className="text-white font-medium">
                  {price}€/{isYearly ? "an" : "mois"}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-navy-700">
                <span className="text-gray-400">Aujourd&apos;hui</span>
                <span className="text-electric-400 font-semibold">0€</span>
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email professionnel
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@startup.com"
                className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 transition-colors"
              />
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full py-3 bg-electric-500 hover:bg-electric-400 text-white rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Redirection...</span>
                </>
              ) : (
                <>
                  <span>Continuer vers le paiement</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </>
              )}
            </button>

            {/* Trust Elements */}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Paiement sécurisé</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Propulsé par</span>
                <span className="font-semibold text-gray-400">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
