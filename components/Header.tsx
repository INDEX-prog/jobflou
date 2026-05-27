"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: Array<{ href: string; label: string }> = [
    { href: "#features", label: "Fonctionnalités" },
    { href: "#how-it-works", label: "Comment ça marche" },
    { href: "#pricing", label: "Tarifs" },
    { href: "#testimonials", label: "Témoignages" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500 to-electric-400 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-xl font-bold text-white">
              Job<span className="text-electric-400">Flou</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-electric-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Se connecter
            </Link>
            <Link
              href="#pricing"
              className="px-5 py-2.5 bg-electric-500 hover:bg-electric-400 text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/25"
            >
              Essai gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-navy-600">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-electric-400 transition-colors duration-200 text-sm font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-navy-600">
                <Link
                  href="#pricing"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
                >
                  Se connecter
                </Link>
                <Link
                  href="#pricing"
                  className="px-5 py-2.5 bg-electric-500 hover:bg-electric-400 text-white rounded-lg font-semibold text-sm text-center transition-all duration-200"
                >
                  Essai gratuit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
