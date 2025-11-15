import React, { useState } from 'react';
import { Code2, Palette, Globe, Database, Server, Zap } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaFigma,
  FaJava,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiPostman,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiAdobexd,
  SiKotlin,
} from 'react-icons/si';
import { RiSupabaseFill } from 'react-icons/ri';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'React JS', icon: <FaReact />, color: 'from-cyan-400 to-blue-500', shadow: 'cyan' },
    { name: 'Node JS', icon: <FaNodeJs />, color: 'from-green-400 to-emerald-500', shadow: 'green' },
    { name: 'Express JS', icon: <SiExpress />, color: 'from-gray-400 to-slate-500', shadow: 'gray' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'from-green-500 to-teal-500', shadow: 'green' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'from-yellow-400 to-orange-500', shadow: 'yellow' },
    { name: 'HTML', icon: <FaHtml5 />, color: 'from-orange-500 to-red-500', shadow: 'orange' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'from-blue-400 to-indigo-500', shadow: 'blue' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-cyan-400 to-sky-500', shadow: 'cyan' },
    { name: 'MySQL', icon: <SiMysql />, color: 'from-blue-500 to-cyan-600', shadow: 'blue' },
    { name: 'GitHub', icon: <FaGithub />, color: 'from-gray-400 to-slate-500', shadow: 'gray' },
    { name: 'Postman', icon: <SiPostman />, color: 'from-orange-500 to-red-500', shadow: 'orange' },
    { name: 'Figma', icon: <FaFigma />, color: 'from-purple-500 to-pink-500', shadow: 'purple' },
    { name: 'Adobe XD', icon: <SiAdobexd />, color: 'from-pink-500 to-rose-500', shadow: 'pink' },
    { name: 'PHP', icon: <FaPhp />, color: 'from-indigo-500 to-purple-600', shadow: 'purple' },
    { name: 'Java', icon: <FaJava />, color: 'from-blue-300 to-blue-400', shadow: 'purple' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'from-gray-500 to-gray-700', shadow: 'gray' },
    { name: 'Web Development', icon: <Globe />, color: 'from-cyan-400 to-blue-500', shadow: 'cyan' },
    { name: 'Supabase', icon: <RiSupabaseFill />, color: 'from-green-400 to-green-500', shadow: 'yellow' },
    { name: 'UI/UX Design', icon: <Palette />, color: 'from-purple-500 to-pink-500', shadow: 'purple' },
    { name: 'Kotlin', icon: <SiKotlin />, color: 'from-blue-500 to-purple-500', shadow: 'green' },
  ];

  const getShadowColor = (color) => {
    const shadows = {
      cyan: 'shadow-cyan-500/50',
      green: 'shadow-green-500/50',
      gray: 'shadow-gray-500/50',
      yellow: 'shadow-yellow-500/50',
      orange: 'shadow-orange-500/50',
      blue: 'shadow-blue-500/50',
      purple: 'shadow-purple-500/50',
      pink: 'shadow-pink-500/50',
    };
    return shadows[color] || 'shadow-cyan-500/50';
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">About Me</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Crafting Digital Experiences
            </span>
          </h2>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Full-stack developer passionate about building modern web applications
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Who I Am</h3>
                    <p className="text-gray-300 leading-relaxed">
                      A passionate Full-Stack Developer and Android Developer with expertise in the MERN stack.
                      I love transforming ideas into elegant, functional web and mobile applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">What I Do</h3>
                    <p className="text-gray-300 leading-relaxed">
                      I specialize in creating responsive, user-friendly interfaces and robust backend systems
                      that bring digital experiences to life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Server className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">Backend</span>
                  </div>
                  <p className="text-gray-300 text-sm">Node.js, Express, MongoDB, REST APIs</p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Palette className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold">Frontend</span>
                  </div>
                  <p className="text-gray-300 text-sm">React, Tailwind CSS, Bootstrap, JavaScript</p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400 font-semibold">Tools & More</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    GitHub, Postman, Figma, Adobe XD, VS Code, PHP, Kotlin
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech Stack</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both` }}
              >
                <div
                  className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 transition-all duration-500 cursor-pointer ${
                    hoveredSkill === index
                      ? `scale-110 ${getShadowColor(skill.shadow)} shadow-2xl -translate-y-2`
                      : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 mb-3 text-6xl text-white transform transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent text-center`}>
                      {skill.name}
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;
