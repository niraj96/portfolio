import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gradient-to-t from-[#0b0f14] to-[#1a1f2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#1a1f2e] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Niraj Kumar Singh</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Senior Software Developer passionate about building scalable solutions and creating impactful software experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors">Experience</a></li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Node.js & NestJS</li>
              <li className="text-gray-400">JavaScript & TypeScript</li>
              <li className="text-gray-400">MongoDB & MySQL</li>
              <li className="text-gray-400">Docker & AWS</li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:nirajkumarsingh.may@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">Email</a></li>
              <li><a href="https://github.com/niraj96" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/niraj-singh-466209145/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">LinkedIn</a></li>
              <li className="text-gray-400">Kolkata, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © {currentYear} Niraj Kumar Singh — Built with React + Tailwind CSS
          </p>
          <p className="text-sm text-gray-500">
            Crafted with ❤️ for the developer community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 