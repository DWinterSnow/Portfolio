import React from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollTo';
import { asset } from '../utils/assetPath';
import '../styles/footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Domaines', id: 'services' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ruben-dias-oliveira/', icon: FaLinkedin },
    { name: 'GitHub', url: 'https://github.com/DWinterSnow', icon: FaGithub }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Dias Oliveira Ruben</h3>
            <p className="text-sm text-gray-300">
              Designer UX/UI & Développeur créatif basé en France.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Navigation</h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm text-gray-300 hover:text-primary transition"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Download Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Documents</h4>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              <a
                href={asset('/assets/pdf/CV.pdf')}
                download="CV.pdf"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition"
              >
                <FaDownload size={14} />
                Télécharger CV
              </a>
              <a
                href={asset('/assets/pdf/Portfolio.pdf')}
                download="Portfolio.pdf"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition"
              >
                <FaDownload size={14} />
                Télécharger Portfolio
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Suivez-moi</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left text-xs text-gray-400">
              <p>&copy; {new Date().getFullYear()} Dias Oliveira Ruben. Tous droits réservés.</p>
              <p>Conçu avec <span className="text-primary">❤️</span> en React & Tailwind</p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
