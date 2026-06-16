// Projects section: featured work, the robotics highlight, additional and
// in-progress projects, plus a lightbox for viewing project media full-size.
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import '../styles/Projects.css';

const linkIcon = (label) => {
  const l = (label || '').toLowerCase();
  if (l.includes('github')) return <FaGithub aria-hidden />;
  if (l.includes('live') || l.includes('demo')) return <FaExternalLinkAlt aria-hidden />;
  return <FaLink aria-hidden />;
};

const Projects = () => {
  // Tracks which image/video is open in the lightbox (null when closed)
  const [selectedMedia, setSelectedMedia] = useState(null);
  const { projects } = portfolioData;
  const roboticsProject = projects.featured.find((project) => project.id === 'robotics-competition');
  const featuredProjects = projects.featured.filter((project) => project.id !== 'robotics-competition');

  useEffect(() => {
    if (!selectedMedia) return undefined;

    // Let Escape close the lightbox while it's open
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedMedia(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedMedia]);

  return (
    <section className="projects-section-modern" id="projects">
      <div className="container">
        <div className="section-header-modern">
          <h2 className="section-title-modern">Selected Work</h2>
          <p className="section-subtitle-modern">
            Projects spanning web systems, backend tooling, and applied ML for security datasets.
          </p>
        </div>

        <div className="projects-stack-modern">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`project-card-modern ${project.media ? 'project-card-modern--media' : ''}`}
            >
              <div className="project-info-modern">
                <p className="project-stack-pill">{project.stack}</p>
                <h3 className="project-title-modern">{project.title}</h3>
                <p className="project-desc-modern">{project.description}</p>
                <div className="project-links-modern">
                  {(project.links || []).map((link) =>
                    link.href ? (
                      <a
                        key={`${project.id}-${link.label}`}
                        href={link.href}
                        className="link-modern"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkIcon(link.label)}
                        <span>{link.label}</span>
                      </a>
                    ) : (
                      <span
                        key={`${project.id}-${link.label}`}
                        className="link-modern link-modern--static"
                        title="Link not public"
                      >
                        {linkIcon(link.label)}
                        <span>{link.text || link.label}</span>
                      </span>
                    )
                  )}
                </div>
              </div>

              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`project-mockup-modern ${project.media ? 'has-media' : ''}`}
              >
                <div className="browser-header-modern">
                  <div className="browser-dot-modern dot-red"></div>
                  <div className="browser-dot-modern dot-yellow"></div>
                  <div className="browser-dot-modern dot-green"></div>
                </div>
                <div className={`mockup-preview-modern ${project.media ? 'has-media' : ''}`}>
                  {project.media ? (
                    <div className="project-media-modern">
                      <div className="project-media-gallery-modern">
                        {(project.media.images || []).map((image, imageIndex) => (
                          <button
                            type="button"
                            key={`${project.id}-${image.src || image}`}
                            className="project-media-button-modern"
                            onClick={() =>
                              setSelectedMedia({
                                type: 'image',
                                src: `${image.src || image}`,
                                alt: `${project.title} highlight ${imageIndex + 1}`
                              })
                            }
                          >
                            <img
                              src={`${image.src || image}`}
                              alt={`${project.title} highlight ${imageIndex + 1}`}
                              loading="lazy"
                              className={`project-media-image-modern project-media-image-modern--${imageIndex + 1}`}
                              style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                            />
                          </button>
                        ))}
                      </div>
                      {project.media.video?.src && (
                        <video
                          className="project-video-modern"
                          controls
                          preload="metadata"
                          muted
                          defaultMuted
                          onClick={() =>
                            setSelectedMedia({
                              type: 'video',
                              src: `${project.media.video.src}`,
                              alt: `${project.title} video preview`
                            })
                          }
                          onVolumeChange={(event) => {
                            const video = event.currentTarget;
                            if (!video.muted || video.volume !== 0) {
                              video.muted = true;
                              video.volume = 0;
                            }
                          }}
                        >
                          <source src={`${project.media.video.src}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ) : (
                    <div className="mockup-placeholder-modern">
                      <div className="placeholder-code-grid">
                        {['{ }', '<  />', '( )', '[ ]'].map((sym, i) => (
                          <span key={i} className="placeholder-sym">{sym}</span>
                        ))}
                      </div>
                      <span className="placeholder-stack-label">{project.stack}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {roboticsProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="robotics-section-modern"
          >
            <div className="robotics-header-modern">
              <p className="project-stack-pill">{roboticsProject.stack}</p>
              <h3 className="robotics-title-modern">{roboticsProject.title}</h3>
              <p className="robotics-desc-modern">{roboticsProject.description}</p>
            </div>

            <div className="robotics-gallery-modern">
              {(roboticsProject.media?.images || []).map((image, imageIndex) => (
                <button
                  type="button"
                  key={`${roboticsProject.id}-${image.src || image}`}
                  className="robotics-image-button-modern"
                  onClick={() =>
                    setSelectedMedia({
                      type: 'image',
                      src: `${image.src || image}`,
                      alt: `${roboticsProject.title} highlight ${imageIndex + 1}`
                    })
                  }
                >
                  <img
                    src={`${image.src || image}`}
                    alt={`${roboticsProject.title} highlight ${imageIndex + 1}`}
                    loading="lazy"
                    style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                  />
                </button>
              ))}
            </div>

            {roboticsProject.media?.video?.src && (
              <video
                className="robotics-video-modern"
                controls
                preload="metadata"
                muted
                defaultMuted
                onClick={() =>
                  setSelectedMedia({
                    type: 'video',
                    src: `${roboticsProject.media.video.src}`,
                    alt: `${roboticsProject.title} video preview`
                  })
                }
                onVolumeChange={(event) => {
                  const video = event.currentTarget;
                  if (!video.muted || video.volume !== 0) {
                    video.muted = true;
                    video.volume = 0;
                  }
                }}
              >
                <source src={`${roboticsProject.media.video.src}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        )}

      {/* Additional Projects */}
      {projects.additional && projects.additional.length > 0 && (
        <div className="additional-section-modern">
          <h3 className="additional-heading-modern">More Projects</h3>
          <div className="additional-grid-modern">
            {projects.additional.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="additional-card-modern"
              >
                <h4 className="additional-title-modern">{project.title}</h4>
                <p className="additional-desc-modern">{project.description}</p>
                <div className="project-links-modern">
                  {(project.links || []).map((link) => (
                    <span
                      key={`${project.id}-${link.label}`}
                      className="link-modern link-modern--static"
                      title="Link not public yet"
                    >
                      {linkIcon(link.label)}
                      <span>{link.text || link.label}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* In-Progress Projects */}
      {projects.inProgress && projects.inProgress.length > 0 && (
        <div className="inprogress-section-modern">
          {projects.inProgress.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inprogress-card-modern"
            >
              <span className="inprogress-badge-modern">{project.status}</span>
              <h3 className="inprogress-title-modern">{project.title}</h3>
              <p className="inprogress-desc-modern">{project.description}</p>
              <div className="inprogress-bar-modern">
                <div className="inprogress-bar-fill-modern"></div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      </div>

      {selectedMedia && (
        <div
          className="lightbox-overlay-modern"
          role="button"
          tabIndex={0}
          aria-label="Close media preview"
          onClick={() => setSelectedMedia(null)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') setSelectedMedia(null);
          }}
        >
          {selectedMedia.type === 'video' ? (
            <video
              className="lightbox-image-modern"
              src={selectedMedia.src}
              controls
              autoPlay
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              className="lightbox-image-modern"
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
