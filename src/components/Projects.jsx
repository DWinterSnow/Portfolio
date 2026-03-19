import React, { useState } from 'react';
import '../styles/projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [skillDropdownOpen, setSkillDropdownOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const skillLabels = { 
    all: 'Tous', 
    mobile: 'Mobile', 
    web: 'Web', 
    'ux-design': 'UX/UI Design',
    'graphic-design': 'Graphic Design',
    branding: 'Branding',
    audiovisuelle: 'Audiovisuelle',
    interactive: 'Interactive',
    '3d': '3D'
  };
  const typeLabels = { all: 'Tous', academic: 'Académique', professional: 'Professionnel', personal: 'Personnel' };

  const projects = [
    {
      id: 1,
      title: 'Artibox',
      type: 'professional',
      description: 'Professional UX/UI design for web and mobile platforms with intuitive user experience.',
      skills: ['ux-design', 'web', 'mobile'],
      image: '/assets/image/projects/atibox/atibox.jpg',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      id: 2,
      title: 'Gnews',
      type: 'academic',
      description: 'Full-stack web and mobile platform with responsive UX design, frontend and backend development.',
      skills: ['web', 'mobile', 'ux-design'],
      image: '/assets/image/projects/gnew/gnew.jpg',
      gradient: 'from-teal-400 to-pink-300',
    },
    {
      id: 3,
      title: 'Veux-tu m\'épouser',
      type: 'academic',
      description: 'Audiovisual cinema project: 7-minute video with screenplay and multimedia storytelling.',
      skills: ['audiovisuelle'],
      image: '/assets/image/projects/veux-tu-mepuser/veux-tu-mepuser.jpg',
      gradient: 'from-slate-500 to-zinc-600',
    },
    {
      id: 4,
      title: 'Modelisation 3D',
      type: 'academic',
      description: '3D modeling and animation with audiovisual content creation. Includes Unity SDK development for interactive 3D experiences.',
      skills: ['3d', 'audiovisuelle'],
      image: '/assets/image/projects/modelisation-3d/modelisation-3d.jpg',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      id: 5,
      title: 'Astral Sword',
      type: 'academic',
      description: 'Interactive digital art project using Max MSP exploring immersive storytelling and creative coding.',
      skills: ['interactive'],
      image: '/assets/image/projects/astral-sword/astral-sword.jpg',
      gradient: 'from-purple-500 to-blue-600',
    },
    {
      id: 6,
      title: 'Aftermath Festival',
      type: 'personal',
      description: 'Festival branding and UX/UI design with Adobe Illustrator and Photoshop.',
      skills: ['ux-design', 'branding'],
      image: '/assets/image/projects/aftermath-festival/aftermath-festival.jpg',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 7,
      title: 'TCGVault',
      type: 'personal',
      description: 'Mobile app combining UX/UI design with brand identity and branding strategy.',
      skills: ['ux-design', 'branding', 'mobile'],
      image: '/assets/image/projects/tcgvault/tcgvault.jpg',
      gradient: 'from-orange-500 to-red-400',
    },
  ];

  const filteredProjects = projects.filter(p => {
    const skillMatch = filter === 'all' || p.skills.includes(filter);
    const typeMatch = typeFilter === 'all' || p.type === typeFilter;
    return skillMatch && typeMatch;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projets phares</h2>

        {/* Filter Buttons - Combined */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 items-center relative">
          {/* Skill Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSkillDropdownOpen(!skillDropdownOpen)}
              className="px-6 py-2 rounded-full font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 transition-all cursor-pointer flex items-center gap-2"
            >
              {skillLabels[filter]}
              <svg className={`w-4 h-4 transition-transform ${skillDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {skillDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 min-w-max">
                <div className="flex flex-wrap gap-2">
                  {['all', 'mobile', 'web', 'ux-design', 'graphic-design', 'branding', 'audiovisuelle', 'interactive', '3d'].map((skill) => (
                    <button
                      key={skill}
                      onClick={() => {
                        setFilter(skill);
                        setSkillDropdownOpen(false);
                        setShowAll(false);
                      }}
                      className={`px-4 py-2 rounded-full font-semibold transition-all ${
                        filter === skill
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                      }`}
                    >
                      {skillLabels[skill]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Divider */}
          <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          
          {/* Type Filters */}
          {['all', 'academic', 'professional', 'personal'].map((type) => (
            <button
              key={type}
              onClick={() => {
                setTypeFilter(type);
                setShowAll(false);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                typeFilter === type
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700'
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="project-card cursor-pointer group"
              onClick={() => alert(`Ouverture de l'étude de cas pour ${project.title}...`)}
            >
              {/* Project Image */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-end justify-start p-6 relative overflow-hidden`}>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white/95 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    {typeLabels[project.type] || project.type}
                  </span>
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white/95 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {skillLabels[skill] || skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Link */}
                <a href="#" className="text-primary font-semibold inline-flex items-center hover:text-secondary transition-colors">
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all flex items-center gap-2"
            >
              Afficher plus de projets
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-all flex items-center gap-2"
            >
              Afficher moins
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
