import React from 'react';

function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] to-[#1a1f2e]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Experienced <span className="text-primary-400 font-semibold">Software Engineer</span> with 
                <span className="text-violet-400 font-semibold"> 6 years</span> of expertise in developing and 
                optimizing software solutions in the IT industry.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Skilled in <span className="text-primary-400 font-medium">JavaScript</span>, 
                <span className="text-primary-400 font-medium"> TypeScript</span>, and 
                <span className="text-primary-400 font-medium"> Node.js</span> with a strong focus on building 
                scalable and high-performance applications.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Adept at working with frameworks such as <span className="text-violet-400 font-medium">NestJS</span> and 
                <span className="text-violet-400 font-medium"> Express</span>, and experienced with 
                <span className="text-pink-400 font-medium"> Docker</span>, 
                <span className="text-pink-400 font-medium"> Kafka</span>, and 
                <span className="text-pink-400 font-medium"> MQTT</span> for containerization and event-driven architectures.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-400/50 transition-all duration-300">
                <div className="text-3xl font-bold text-primary-400 mb-2">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-violet-400/50 transition-all duration-300">
                <div className="text-3xl font-bold text-violet-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-violet-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <svg viewBox="0 0 300 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#a78bfa"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa"/>
                    <stop offset="100%" stopColor="#f472b6"/>
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="300" height="300" rx="24" fill="rgba(255,255,255,0.02)" stroke="url(#g1)" strokeWidth="2"/>
                
                {/* Code elements */}
                <circle cx="80" cy="80" r="30" fill="url(#g1)" opacity="0.8"/>
                <rect x="140" y="60" width="100" height="16" rx="8" fill="url(#g2)"/>
                <rect x="140" y="85" width="70" height="16" rx="8" fill="url(#g2)" opacity="0.7"/>
                <rect x="40" y="140" width="220" height="12" rx="6" fill="url(#g1)" opacity="0.6"/>
                <rect x="40" y="160" width="220" height="12" rx="6" fill="url(#g1)" opacity="0.4"/>
                <rect x="40" y="180" width="160" height="12" rx="6" fill="url(#g1)" opacity="0.3"/>
                
                {/* Floating dots */}
                <circle cx="60" cy="220" r="4" fill="#22d3ee" opacity="0.6"/>
                <circle cx="80" cy="220" r="4" fill="#a78bfa" opacity="0.6"/>
                <circle cx="100" cy="220" r="4" fill="#f472b6" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 