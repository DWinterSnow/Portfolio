import React from 'react';
import { FaHourglassEnd } from 'react-icons/fa';
import '../styles/about.css';
import '../styles/testimonials.css';

function About() {
  // About section data
  const skillCategories = [
    {
      title: 'Logiciels de création',
      skills: ['Figma', 'Suite Adobe', 'Webflow', 'Canva', 'Blender', 'Unity', 'Max msp']
    },
    {
      title: 'Développement front',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Développement back',
      skills: ['Python', 'C++', 'JavaScript', 'Node.js']
    }
  ];

  // Experiences (professional)
  const experiences = [
    {
      icon: FaHourglassEnd,
      role: 'Stage Designer',
      org: 'À venir',
      date: 'Mai - Août 2026',
      points: [],
    },
    {
      image: '/assets/image/industry/artibox.png',
      role: 'Stage UX/UI Designer',
      org: 'ArtiBox, Collégien',
      date: 'Juin 2025',
      points: [
        "Conception et prototypage d'interfaces (admin & front)",
        'Optimisation UX & accessibilité via design thinking',
        'Amélioration des interactions et animations pour une navigation fluide',
        'Collaboration étroite avec développeurs web/mobile',
      ],
    },
    {
      image: '/assets/image/industry/optical.png',
      role: 'Stage Assistant opticien',
      org: 'Optical Center, Pontault-Combault',
      date: 'Février 2019',
      points: [
        "Accueil et écoute des clients",
        "Réglage et utilisation d'appareils optiques",
        "Conception et vente de lunettes",
        "Évaluation de la vue des clients",
      ],
    },
  ];

  // Formation / parcours académique
  const education = [
    {
      image: '/assets/image/industry/esiee.png',
      degree: "Bachelor BEST'm",
      org: 'ESIEE PARIS, Noisy-le-Grand',
      date: '2023 - 2026',
      notes: ['Parcours multimédia'],
    },
    {
      image: '/assets/image/industry/lycee.png',
      degree: 'Baccalauréat général',
      org: "Lycée Charle le Chauve, Roissy-en-Brie",
      date: '2020 - 2023',
      notes: ["Spécialité LLCER", "Spécialité Art - Plastique"],
    },
    {
      image: '/assets/image/industry/summer.png',
      degree: 'Summer School — Startup Crash Course',
      org: 'TU Berlin Summer & Winter School, Berlin',
      date: 'Juil - Août 2025',
      notes: ['Berlin Grade : 1,3'],
    },
  ];

  const renderImage = (src, alt, icon) => {
    if (icon) {
      const IconComponent = icon;
      return (
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-r from-primary/20 to-secondary/20 text-primary dark:text-primary-light">
          <IconComponent size={24} />
        </div>
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        className="w-12 h-12 object-cover rounded-md"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://via.placeholder.com/150?text=${encodeURIComponent(alt)}`; }}
      />
    );
  };

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">À propos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Je suis Dias Oliveira Rubn, designer UX/UI passionné avec plus de 5 ans d'expérience dans la création de produits numériques appréciés des utilisateurs. Je suis spécialisé en recherche utilisateur, maquettage, prototypage et systèmes de design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Ma démarche combine réflexion stratégique et exécution créative pour livrer des designs à la fois esthétiques et fonctionnels. Je pense que le bon design résout des problèmes et crée des connexions significatives.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Compétences & Outils</h3>
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{category.title} :</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/40 dark:to-secondary/40 text-primary dark:text-primary-light rounded-full font-medium text-sm hover:from-primary/20 hover:to-secondary/20 dark:hover:from-primary/60 dark:hover:to-secondary/60 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 dark:bg-gray-900/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Parcours & Expériences</h2>

          {/* Experiences */}
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Expériences professionnelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {experiences.map((item, index) => (
              <div key={index} className="testimonial-card p-6">
                <div className="flex items-start gap-4">
                  {item.icon ? renderImage(null, item.org, item.icon) : renderImage(item.image, item.org)}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.role}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.org} — {item.date}</p>
                    {item.points.length > 0 ? (
                      <ul className="mt-3 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside leading-relaxed">
                        {item.points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    ) : (
                      <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm italic">Détails à venir...</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Parcours académique</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="testimonial-card p-6">
                <div className="flex items-start gap-4">
                  {renderImage(edu.image, edu.degree)}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">{edu.org} — {edu.date}</p>
                    <ul className="mt-3 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside leading-relaxed">
                      {edu.notes.map((n, i) => <li key={i}>{n}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
