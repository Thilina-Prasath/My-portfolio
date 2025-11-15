import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectData.js';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  
  // State for lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Ensure lightbox is closed and page scrolls to top on load
  React.useEffect(() => {
    setSelectedImage(null);
    window.scrollTo(0, 0); // 🔥 FIX: force page to start at top
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Project Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">Sorry, we couldn't find the project you were looking for.</p>
        <Link
          to="/#projects"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-600 transition-all"
        >
          &larr; Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white animate-fadeInUp">
      {/* Header Section */}
      <section className={`py-32 relative ${project.gradient} bg-gradient-to-r`}>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Link
            to="/#projects"
            className="inline-flex items-center text-black/80 hover:text-white transition-all mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details & Gallery Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">About this Project</h2>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {project.details}
            </p>
          </div>

          {/* GitHub Link */}
          <div className="max-w-3xl mx-auto mb-16">
  <h2 className="text-3xl font-bold text-cyan-400 mb-6">GitHub Links</h2>

  {Array.isArray(project.github) ? (
    <div className="space-y-3">
      {project.github.map((repo, index) => (
        <a
          key={index}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-lg text-cyan-400 hover:text-cyan-300 hover:underline break-words"
        >
          {repo.label}: {repo.url}
        </a>
      ))}
    </div>
  ) : (
    <a 
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg text-cyan-400 hover:text-cyan-300 hover:underline break-words"
    >
      {project.github}
    </a>
  )}
          </div>


          {/* Live Demo */}
          {(project.slug === 'ecommerce-website' || project.slug === 'learning-management-system' || project.slug === 'student-mentoring-system' ) && project.link !== '#' && (
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">Live Demo</h2>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all text-lg transform hover:scale-105"
              >
                View Live Site
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Gallery */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-xl border border-gray-700/50 cursor-pointer transform transition-all hover:scale-105 hover:border-cyan-400"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Full size preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
