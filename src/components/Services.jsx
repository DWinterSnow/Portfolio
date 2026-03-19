import React from 'react';
import { FaPalette, FaCode, FaServer, FaCube, FaPaintBrush, FaGem } from 'react-icons/fa';
import '../styles/services.css';

function Services() {
  const services = [
    { icon: FaPalette, title: 'Création numérique & Master UX/UI', description: 'Maîtrise complète du design d\'interfaces numériques, recherche utilisateur, et création d\'expériences exceptionnelles.', color: '#9333ea' },
    { icon: FaCode, title: 'Développement Front-end', description: 'Construction d\'interfaces web dynamiques et réactives avec les dernières technologies et frameworks modernes.', color: '#a855f7' },
    { icon: FaServer, title: 'Développement Back-end', description: 'Développement de logiques serveurs robustes, gestion de bases de données et intégration d\'API.', color: '#c084fc' },
    { icon: FaCube, title: 'Médias Interactifs & 3D', description: 'Création de contenus interactifs et d\'environnements 3D immersifs pour expériences engageantes.', color: '#e879f9' },
    { icon: FaPaintBrush, title: 'Création Graphique', description: 'Design graphique professionnel pour publicités, affiches, et matériels visuels de haute qualité.', color: '#f472b6' },
    { icon: FaGem, title: 'Branding & Identité Visuelle', description: 'Construction d\'identités visuelles cohérentes et mémorables qui reflètent l\'essence de votre marque.', color: '#ec4899' },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Domaines d'expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4" style={{ color: service.color }}><IconComponent /></div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: service.color }}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
