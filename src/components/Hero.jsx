import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Profile Image Section */}
          <div 
            className={`md:w-1/2 flex justify-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: '300ms',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-slate-950"></div>
              </div>
              
              <div className="relative">
                <img
                  src="prasath.jpg"
                  alt="Prasath Thilina"
                  className="relative rounded-full w-100 h-100 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-transparent group-hover:scale-105 transition duration-50"
                />
                
                {/* Floating particles */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-10 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            {/* Greeting with sparkle */}
            <div 
              className={`flex items-center justify-center md:justify-start gap-2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold text-lg tracking-wider">Welcome to my portfolio</span>
            </div>

            {/* Main heading */}
            <h1 
              className={`text-5xl md:text-7xl font-bold leading-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                  Prasath Thilina
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left animate-expand"></span>
              </span>
            </h1>

            {/* Subtitle with typing effect */}
            <p 
              className={`text-xl md:text-3xl text-gray-300 font-light transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Full-Stack Developer and Android Developer
            </p>

            {/* Description */}
            <p 
              className={`text-gray-400 text-lg max-w-xl mx-auto md:mx-0 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Crafting beautiful, responsive web experiences with modern technologies and creative solutions.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowDown className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </a>

              <a
                href="mailto:thilinaprasath32@gmail.com"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold py-4 px-8 rounded-full hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div 
              className={`flex items-center justify-center md:justify-start gap-4 pt-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a href="https://github.com/Thilina-Prasath" className="w-12 h-12 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-110 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition" />
              </a>
              <a
              href="https://www.linkedin.com/in/prasath-thilina-747663355"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition" />
              </a>

              <a href= " thilinaprasath32@gmail.com " className="w-12 h-12 rounded-full bg-slate-800/50 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300 hover:scale-110 group">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
          animation-delay: 500ms;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;