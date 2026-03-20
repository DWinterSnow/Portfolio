import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaTools, FaCalendarAlt, FaBullseye, FaRoute, FaTrophy, FaTimes, FaChevronLeft, FaChevronRight, FaChevronDown, FaLayerGroup } from 'react-icons/fa';
import { projects, skillLabels, typeLabels } from '../data/projects';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/project-page.css';

function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [openSections, setOpenSections] = useState({});

  const getAllImages = (proj) => {
    const imgs = [];
    for (const step of proj.process) {
      if (step.images) imgs.push(...step.images);
      if (step.sections) {
        for (const sec of step.sections) {
          if (sec.image) imgs.push(sec.image);
        }
      }
    }
    return imgs;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightboxIndex(null);
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    const allImages = getAllImages(project);
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex < allImages.length - 1) setLightboxIndex(lightboxIndex + 1);
      if (e.key === 'ArrowLeft' && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projet introuvable</h1>
          <p className="text-gray-600 dark:text-gray-400">Ce projet n'existe pas ou a été supprimé.</p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaArrowLeft /> Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero Banner */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour aux projets</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm">
                  {typeLabels[project.type]}
                </span>
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-white backdrop-blur-sm"
                  >
                    {skillLabels[skill]}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTools />
                  <span>{project.tools.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="project-page-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://via.placeholder.com/800x500?text=${encodeURIComponent(project.title)}`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Context */}
        <div className="project-section">
          <div className="project-section-icon">
            <FaRoute />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Contexte
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.context}
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="project-section">
          <div className="project-section-icon">
            <FaBullseye />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {project.objectivesTitle || 'Objectifs'}
            </h2>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"></span>
                  <span className="text-lg leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="project-section">
          <div className="project-section-icon">
            {project.dropdownProcess ? <FaLayerGroup /> : <FaTools />}
          </div>
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {project.processTitle || 'Processus'}
            </h2>

            {project.dropdownProcess ? (
              /* Sub-project cards layout for multi-project pages */
              <div className="subprojects-grid">
                {project.process.map((p, i) => {
                  const isStepOpen = openSections[`step-${i}`];
                  return (
                    <div key={i} className={`subproject-card ${isStepOpen ? 'subproject-card--open' : ''}`}>
                      <button
                        className="subproject-card-header"
                        onClick={() => {
                          const key = `step-${i}`;
                          setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
                        }}
                        aria-expanded={isStepOpen}
                      >
                        <div className="subproject-card-title-row">
                          <div className="subproject-card-number">{i + 1}</div>
                          <span className="subproject-card-title">{p.step}</span>
                        </div>
                        {p.tools && (
                          <div className="subproject-card-tools">
                            {p.tools.map((tool) => (
                              <span key={tool} className="subproject-tool-badge">{tool}</span>
                            ))}
                          </div>
                        )}
                        <FaChevronDown className={`subproject-chevron ${isStepOpen ? 'subproject-chevron--open' : ''}`} />
                      </button>
                      <div className={`subproject-panel ${isStepOpen ? 'subproject-panel--open' : ''}`}>
                        <div className={`subproject-panel-inner ${p.images && p.images.length === 1 && (!p.sections || p.sections.length === 0) ? 'has-side-image' : ''}`}>
                          {p.images && p.images.length === 1 && (!p.sections || p.sections.length === 0) ? (
                            <div className="subproject-content-with-image">
                              <div className="subproject-content-text">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {p.detail}
                                </p>
                              </div>
                              <div className="subproject-content-images">
                                {p.images.map((img, j) => (
                                  <button
                                    key={j}
                                    className="subproject-image-item"
                                    onClick={() => {
                                      const allImgs = getAllImages(project);
                                      const globalIndex = allImgs.findIndex(g => g.src === img.src);
                                      setLightboxIndex(globalIndex >= 0 ? globalIndex : 0);
                                    }}
                                    aria-label={`Voir ${img.alt}`}
                                  >
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                {p.detail}
                              </p>
                              {p.images && p.images.length > 0 && (
                                <div className="process-images">
                                  {p.images.map((img, j) => (
                                    <button
                                      key={j}
                                      className="process-image-item"
                                      onClick={() => {
                                        const allImgs = getAllImages(project);
                                        const globalIndex = allImgs.findIndex(g => g.src === img.src);
                                        setLightboxIndex(globalIndex >= 0 ? globalIndex : 0);
                                      }}
                                      aria-label={`Voir ${img.alt}`}
                                    >
                                      <img src={img.src} alt={img.alt} loading="lazy" className="process-image-img" />
                                      <div className="process-image-overlay">
                                        <span className="text-white text-xs font-medium">{img.alt}</span>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                          {p.sections && p.sections.length > 0 && (
                            <div className="process-sections-flat">
                              {p.sections.map((section, s) => (
                                <div key={s} className={`process-section-block ${section.image ? `process-section-block--with-image ${s % 2 === 0 ? 'image-left' : 'image-right'}` : ''}`}>
                                  <div className="process-section-text">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                      {section.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                      {section.content}
                                    </p>
                                  </div>
                                  {section.image && (
                                    <button
                                      className="process-section-image"
                                      onClick={() => {
                                        const allImgs = getAllImages(project);
                                        const idx = allImgs.findIndex(g => g.src === section.image.src);
                                        setLightboxIndex(idx >= 0 ? idx : 0);
                                      }}
                                      aria-label={`Voir ${section.image.alt}`}
                                    >
                                      <img src={section.image.src} alt={section.image.alt} loading="lazy" className="process-section-img" />
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              project.inlineProcess ? (
                <div className="process-inline-list">
                  {project.process.map((p, i) => (
                    <div key={i} className="process-inline-item">
                      <div className="process-step-number process-inline-number">{i + 1}</div>
                      <div className={`process-inline-content ${p.images && p.images.length > 0 ? 'process-inline-content--with-media' : ''}`}>
                        <div className="process-inline-text">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {p.step}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {p.detail}
                          </p>
                        </div>
                        {p.images && p.images.length > 0 && (
                          <div className="process-inline-media">
                            {p.images.map((img, j) => (
                              <button
                                key={j}
                                className="process-inline-image"
                                onClick={() => {
                                  const allImgs = getAllImages(project);
                                  const globalIndex = allImgs.findIndex(g => g.src === img.src);
                                  setLightboxIndex(globalIndex >= 0 ? globalIndex : 0);
                                }}
                                aria-label={`Voir ${img.alt}`}
                              >
                                <img src={img.src} alt={img.alt} loading="lazy" className="process-inline-img" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
              /* Standard card grid for other projects */
              <div className={`grid gap-6 ${project.process.some(p => p.images) ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                {project.process.map((p, i) => (
                  <div key={i} className={`process-card ${p.images ? 'process-card-with-images' : ''}`}>
                    <div className="process-step-number">{i + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {p.step}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {p.detail}
                    </p>
                    {p.images && p.images.length > 0 && (
                      <div className="process-images">
                        {p.images.map((img, j) => (
                          <button
                            key={j}
                            className="process-image-item"
                            onClick={() => {
                              const allImgs = getAllImages(project);
                              const globalIndex = allImgs.findIndex(g => g.src === img.src);
                              setLightboxIndex(globalIndex >= 0 ? globalIndex : 0);
                            }}
                            aria-label={`Voir ${img.alt}`}
                          >
                            <img src={img.src} alt={img.alt} loading="lazy" className="process-image-img" />
                            <div className="process-image-overlay">
                              <span className="text-white text-xs font-medium">{img.alt}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              )
            )}
          </div>
        </div>

        {/* Results */}
        {project.results && (
          <div className="project-section">
            <div className="project-section-icon">
              <FaTrophy />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Résultats
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>
        )}

        {/* Navigation between projects */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {(() => {
              const idx = projects.findIndex((p) => p.slug === slug);
              const prev = idx > 0 ? projects[idx - 1] : null;
              const next = idx < projects.length - 1 ? projects[idx + 1] : null;
              return (
                <>
                  {prev ? (
                    <Link
                      to={`/project/${prev.slug}`}
                      className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                      <div className="text-left">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Précédent</span>
                        <p className="font-semibold">{prev.title}</p>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {next ? (
                    <Link
                      to={`/project/${next.slug}`}
                      className="group flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <div className="text-right">
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Suivant</span>
                        <p className="font-semibold">{next.title}</p>
                      </div>
                      <FaArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightboxIndex !== null && (() => {
        const allImages = getAllImages(project);
        if (!allImages.length) return null;
        return (
          <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
            <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Fermer">
              <FaTimes size={24} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              {lightboxIndex > 0 && (
                <button className="lightbox-nav lightbox-prev" onClick={() => setLightboxIndex(lightboxIndex - 1)} aria-label="Précédent">
                  <FaChevronLeft size={20} />
                </button>
              )}
              <img
                src={allImages[lightboxIndex].src}
                alt={allImages[lightboxIndex].alt}
                className="lightbox-img"
              />
              {lightboxIndex < allImages.length - 1 && (
                <button className="lightbox-nav lightbox-next" onClick={() => setLightboxIndex(lightboxIndex + 1)} aria-label="Suivant">
                  <FaChevronRight size={20} />
                </button>
              )}
            </div>
            <p className="lightbox-caption">{allImages[lightboxIndex].alt}</p>
            <p className="lightbox-counter">{lightboxIndex + 1} / {allImages.length}</p>
          </div>
        );
      })()}
    </div>
  );
}

export default ProjectPage;
