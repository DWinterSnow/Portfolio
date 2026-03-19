import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/contact.css';

function Contact() {
  const email = 'diasoliveira.ruben@gmail.com';

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Contactez-moi</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Travaillons ensemble</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Vous avez un projet ? J'aimerais en discuter. Créons quelque chose de remarquable ensemble.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white">Email:</span> 
                <a 
                  href={`mailto:${email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-semibold ml-2 transition"
                >
                  {email}
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white">Téléphone:</span> +33 7 69 62 07 99
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold text-gray-900 dark:text-white">Localisation:</span> Émerenville, France
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ruben-dias-oliveira/', icon: FaLinkedin },
                { name: 'GitHub', url: 'https://github.com/DWinterSnow', icon: FaGithub }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary rounded-lg transition-all hover:scale-110 social-link text-black dark:text-white hover:text-white"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Message */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border border-primary/20 dark:border-primary/40 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prêt à commencer ?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Une opportunité, une idée ? Contactez-moi, je vous répondrai rapidement.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
