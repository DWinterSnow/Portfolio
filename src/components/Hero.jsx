import React from 'react';
import { scrollToSection } from '../utils/scrollTo';
import { asset } from '../utils/assetPath';
import '../styles/hero.css';

function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center relative overflow-hidden pt-12 md:pt-0">
      {/* animated multicolor background */}
      <div className="absolute inset-0 animated-multi opacity-90"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[60vh] pb-48 md:pb-0">
          {/* Photo left */}
          <div className="flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/30 bg-gray-100">
              <img
                src={asset('/assets/profile/profile.webp')}
                alt="Dias Oliveira Rubn"
                loading="lazy"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800?text=Dias+Oliveira+Rubn'; }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text right */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Étudiant</h1>
            <p className="text-base md:text-xl text-white dark:text-white leading-relaxed drop-shadow-lg">
              Étudiant en design et technologies numériques, passionné par l'expérience utilisateur et l'interface. J'explore l'interaction entre esthétique et accessibilité, et je crée des interfaces simples, utiles et agréables.
            </p>

            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-3 md:gap-4">
              <button onClick={() => scrollToSection('projects')} className="btn-primary w-full md:w-auto">Mes projets</button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 rounded-full border border-white/30 dark:border-white/50 text-white/90 dark:text-white hover:text-white transition w-full md:w-auto">Me contacter</button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-white/25 floating-shape"></div>
      <div className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-white/30 floating-shape" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-10 w-40 h-40 rounded-full bg-white/20 floating-shape" style={{animationDelay: '1s'}}></div>

      {/* Scroll indicator (arrow above the text, attached) */}
      <button 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity" 
        aria-label="Aller à la section À propos"
      >
        <span className="scroll-text">Plus sur moi :)</span>
        <svg className="arrow-bounce w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </section>
  );
}

export default Hero;
