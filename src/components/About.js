import React from 'react';

function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] to-[#1a1f2e]"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-violet-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

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
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-400/50 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  Experienced Software Engineer
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With <span className="text-primary-400 font-semibold">6 years</span> of expertise in developing and
                  optimizing software solutions in the IT industry.
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-violet-400/50 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  Technical Expertise
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Skilled in <span className="text-primary-400 font-medium">JavaScript</span>,
                  <span className="text-primary-400 font-medium"> TypeScript</span>, and
                  <span className="text-primary-400 font-medium"> Node.js</span> with a strong focus on building
                  scalable and high-performance applications.
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </span>
                  Modern Technologies
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Adept at working with frameworks such as <span className="text-violet-400 font-medium">NestJS</span> and
                  <span className="text-violet-400 font-medium"> Express</span>, and experienced with
                  <span className="text-pink-400 font-medium"> Docker</span>,
                  <span className="text-pink-400 font-medium"> Kafka</span>, and
                  <span className="text-pink-400 font-medium"> MQTT</span> for containerization and event-driven architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element - Software Development Illustration */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-violet-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="laptopGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#3b82f6"/>
                  </linearGradient>
                  <linearGradient id="codeGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1e40af"/>
                    <stop offset="100%" stopColor="#1e3a8a"/>
                  </linearGradient>
                  <linearGradient id="yellowGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#fbbf24"/>
                    <stop offset="100%" stopColor="#f59e0b"/>
                  </linearGradient>
                  <linearGradient id="redGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444"/>
                    <stop offset="100%" stopColor="#dc2626"/>
                  </linearGradient>
                </defs>

                {/* Background wavy shapes */}
                <path d="M0 250 Q100 200 200 250 T400 250 L400 300 L0 300 Z" fill="rgba(59, 130, 246, 0.1)"/>
                <path d="M0 260 Q150 220 300 260 T400 260 L400 300 L0 300 Z" fill="rgba(156, 163, 175, 0.1)"/>

                {/* Laptop */}
                <rect x="120" y="80" width="160" height="120" rx="8" fill="url(#laptopGrad)" stroke="#1e40af" strokeWidth="2"/>
                
                {/* Laptop screen */}
                <rect x="130" y="90" width="140" height="100" rx="4" fill="url(#codeGrad)"/>
                
                {/* Main code editor window */}
                <rect x="135" y="95" width="130" height="85" rx="2" fill="#1e3a8a"/>
                <rect x="135" y="95" width="130" height="20" rx="2" fill="#fbbf24"/>
                <rect x="140" y="100" width="80" height="8" rx="4" fill="#1e3a8a"/>
                <rect x="225" y="100" width="8" height="8" rx="4" fill="#ef4444"/>
                <rect x="238" y="100" width="8" height="8" rx="4" fill="#fbbf24"/>
                <rect x="251" y="100" width="8" height="8" rx="4" fill="#10b981"/>
                
                {/* Code lines */}
                <rect x="140" y="120" width="60" height="3" rx="1.5" fill="#ffffff"/>
                <rect x="140" y="125" width="80" height="3" rx="1.5" fill="#fbbf24"/>
                <rect x="140" y="130" width="70" height="3" rx="1.5" fill="#60a5fa"/>
                <rect x="140" y="135" width="90" height="3" rx="1.5" fill="#ffffff"/>
                <rect x="140" y="140" width="65" height="3" rx="1.5" fill="#fbbf24"/>
                <rect x="140" y="145" width="75" height="3" rx="1.5" fill="#60a5fa"/>
                <rect x="140" y="150" width="55" height="3" rx="1.5" fill="#ffffff"/>
                <rect x="140" y="155" width="85" height="3" rx="1.5" fill="#fbbf24"/>
                <rect x="140" y="160" width="70" height="3" rx="1.5" fill="#60a5fa"/>
                <rect x="140" y="165" width="80" height="3" rx="1.5" fill="#ffffff"/>

                {/* Smaller code window */}
                <rect x="280" y="100" width="80" height="60" rx="4" fill="#1e3a8a"/>
                <rect x="280" y="100" width="80" height="15" rx="4" fill="#fbbf24"/>
                <rect x="285" y="105" width="50" height="5" rx="2.5" fill="#1e3a8a"/>
                <rect x="340" y="105" width="5" height="5" rx="2.5" fill="#ef4444"/>
                <rect x="350" y="105" width="5" height="5" rx="2.5" fill="#fbbf24"/>
                
                {/* Code lines in smaller window */}
                <rect x="285" y="120" width="40" height="2" rx="1" fill="#ffffff"/>
                <rect x="285" y="125" width="50" height="2" rx="1" fill="#fbbf24"/>
                <rect x="285" y="130" width="35" height="2" rx="1" fill="#60a5fa"/>
                <rect x="285" y="135" width="45" height="2" rx="1" fill="#ffffff"/>
                <rect x="285" y="140" width="30" height="2" rx="1" fill="#fbbf24"/>
                <rect x="285" y="145" width="55" height="2" rx="1" fill="#60a5fa"/>

                {/* Development Tools Icons */}
                
                {/* Bug icon (red) */}
                <g transform="translate(320, 50)">
                  <circle cx="0" cy="0" r="12" fill="url(#redGrad)"/>
                  <path d="M-6 -2 Q-6 -6 -2 -6 T2 -2 Q2 -6 6 -6 T10 -2 Q10 2 6 2 T2 -2 Q2 2 -2 2 T-6 -2" fill="none" stroke="white" strokeWidth="1.5"/>
                  <circle cx="-3" cy="-3" r="1" fill="white"/>
                  <circle cx="3" cy="-3" r="1" fill="white"/>
                  <path d="M-4 2 Q0 4 4 2" fill="none" stroke="white" strokeWidth="1.5"/>
                </g>

                {/* Gear icons (yellow) */}
                <g transform="translate(350, 80)">
                  <circle cx="0" cy="0" r="10" fill="url(#yellowGrad)"/>
                  <circle cx="0" cy="0" r="3" fill="white"/>
                  <path d="M0 -10 L0 -7 M0 7 L0 10 M-10 0 L-7 0 M7 0 L10 0 M-7 -7 L-9 -9 M9 9 L7 7 M-7 7 L-9 9 M9 -9 L7 -7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </g>
                
                <g transform="translate(370, 100)">
                  <circle cx="0" cy="0" r="8" fill="url(#yellowGrad)"/>
                  <circle cx="0" cy="0" r="2.5" fill="white"/>
                  <path d="M0 -8 L0 -6 M0 6 L0 8 M-8 0 L-6 0 M6 0 L8 0 M-6 -6 L-7 -7 M7 7 L6 6 M-6 6 L-7 7 M7 -7 L6 -6" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </g>

                {/* Wrench icon (blue) */}
                <g transform="translate(340, 180)">
                  <circle cx="0" cy="0" r="10" fill="url(#laptopGrad)"/>
                  <path d="M-6 -6 L6 6 M-4 -8 L-8 -4 L-6 -2 L-2 -6 L-4 -8 M4 8 L8 4 L6 2 L2 6 L4 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>

                {/* Curly braces icon (yellow) */}
                <g transform="translate(100, 60)">
                  <circle cx="0" cy="0" r="12" fill="url(#yellowGrad)"/>
                  <path d="M-4 -6 Q-8 -6 -8 -2 T-4 2 M4 -6 Q8 -6 8 -2 T4 2 M-4 6 Q-8 6 -8 2 T-4 -2 M4 6 Q8 6 8 2 T4 -2" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </g>

                {/* Angle brackets icon (yellow) */}
                <g transform="translate(320, 220)">
                  <circle cx="0" cy="0" r="12" fill="url(#yellowGrad)"/>
                  <path d="M-6 -4 L2 0 L-6 4 M6 -4 L-2 0 L6 4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 