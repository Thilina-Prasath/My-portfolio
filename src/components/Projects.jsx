import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { projects } from '../data/projectData.js'; // Import the new data file

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fadeInUp">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}></div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/project/${project.slug}`} // Use Link and the dynamic slug
                  className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
                >
                  View Project
                  <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;