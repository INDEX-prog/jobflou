"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [flouLevel, setFlouLevel] = useState<number>(50);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getJobDescription = (level: number): string => {
    if (level < 30) {
      return "Développeur Full Stack Senior - 5+ ans d'expérience React, Node.js, PostgreSQL, AWS. Responsable de l'architecture technique, code reviews, mentoring juniors. Salaire: 65-80k€.";
    } else if (level < 60) {
      return "Développeur Full Stack - Expérience solide en technologies web modernes. Vous participerez à des projets innovants dans une équipe dynamique. Package attractif.";
    } else {
      return "Rejoignez une aventure tech passionnante ! Nous cherchons un talent créatif pour révolutionner notre stack. Ambiance startup, impact réel. 🚀";
    }
  };

  const getFlouLabel = (level: number): string => {
    if (level < 30) return "Précis";
    if (level < 60) return "Équilibré";
    return "Attractif";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-electric-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-700/80 border border-electric-500/30">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              <span className="text-sm text-electric-300 font-medium">
                Essai gratuit 14 jours • Sans CB
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Des job descriptions avec</span>
              <br />
              <span className="gradient-text">le bon niveau de flou</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
              Attirez les bons candidats sans les effrayer. Générez des descriptions de poste parfaitement calibrées pour votre startup tech.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-white">+47%</div>
                <div className="text-sm text-gray-500">de candidatures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2min</div>
                <div className="text-sm text-gray-500">par description</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-500">HR managers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="px-8 py-4 bg-electric-500 hover:bg-electric-400 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-electric-500/25 text-center animate-pulse-glow"
              >
                Commencer gratuitement
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 bg-navy-700 hover:bg-navy-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 border border-navy-600 hover:border-electric-500/50 text-center flex items-center justify-center gap-2"
              >
                <span>Voir la démo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="glass rounded-2xl p-6 lg:p-8 space-y-6">
              {/* Demo Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-500">jobflou.app/generate</span>
              </div>

              {/* Job Title Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Titre du poste</label>
                <div className="px-4 py-3 bg-navy-800 rounded-lg border border-navy-600 text-white">
                  Développeur Full Stack
                </div>
              </div>

              {/* Flou Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-400 font-medium">Niveau de flou</label>
                  <span className="px-3 py-1 bg-electric-500/20 rounded-full text-electric-400 text-sm font-medium">
                    {getFlouLabel(flouLevel)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={flouLevel}
                  onChange={(e) => setFlouLevel(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-electric-500"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Très détaillé</span>
                  <span>Très attractif</span>
                </div>
              </div>

              {/* Generated Description */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Description générée</label>
                <div className="px-4 py-4 bg-navy-800/50 rounded-lg border border-navy-600 text-gray-300 leading-relaxed min-h-[100px] transition-all duration-300">
                  {getJobDescription(flouLevel)}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-3 bg-electric-500 hover:bg-electric-400 text-white rounded-lg font-semibold transition-all duration-200">
                Générer ✨
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
