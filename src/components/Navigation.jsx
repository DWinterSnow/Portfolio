import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars as Menu, FaTimes as X, FaMoon as Moon, FaSun as Sun } from 'react-icons/fa';
import { scrollToSection as scrollTo } from '../utils/scrollTo';
import '../styles/navigation.css';

function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then fall back to system preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      return savedDarkMode === 'true';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark mode immediately
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Inline style for Dancing Script font scoped to this component
  const logoStyle = {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: 700,
    fontSize: '1.5rem',
    background: 'linear-gradient(270deg, #ff9a9e, #fbc2eb, #a18cd1, #89f7fe)',
    backgroundSize: '1000% 1000%',
    animation: 'gradientShift 15s ease infinite',
  };

  const location = useLocation();
  const navigateTo = useNavigate();

  const links = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScrollToSection = (id) => {
    setIsOpen(false);
    const sectionId = id.slice(1); // Remove '#' from href
    if (location.pathname !== '/') {
      navigateTo('/', { state: { scrollTo: sectionId } });
    } else {
      scrollTo(sectionId);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <nav className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold" style={logoStyle}>
            Do
          </div>
          <span className="text-xl font-bold text-gray-600 dark:text-white hidden sm:inline">Dias Oliveira Ruben</span>
        </div>

        {/* Desktop Menu - Centered */}
        <ul className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(link.href);
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('#contact');
              }}
              className="btn-primary"
            >
              Contactez-moi
            </a>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              title="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button - Only show on mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            title="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(link.href);
                  }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('#contact');
                }}
                className="btn-primary inline-block"
              >
                Contactez-moi
              </a>
            </li>
          </ul>
        </div>
      )}
      </nav>
    </>
  );
}

export default Navigation;
