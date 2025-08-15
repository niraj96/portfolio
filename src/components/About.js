import React from 'react';

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
          <p className="text-slate-400 leading-relaxed">
            Experienced Software Engineer with 6 years of expertise in developing and optimizing software solutions in the IT industry. Skilled in JavaScript, TypeScript, and Node.js with a strong focus on building scalable and high-performance applications. Adept at working with frameworks such as NestJS and Express, and experienced with Docker, Kafka, and MQTT for containerization and event-driven architectures.
          </p>
          <p className="text-slate-400 mt-4">
            A results-driven engineering professional with a B.Tech in Computer Science and Engineering. Passionate about continuous learning, innovation, and delivering impactful backend systems.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-violet-400 to-pink-400 rounded-2xl blur opacity-30"></div>
            <svg viewBox="0 0 200 200" className="relative rounded-2xl w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#a78bfa"/>
                </linearGradient>
              </defs>
              <rect width="200" height="200" rx="22" fill="rgba(255,255,255,0.04)" stroke="url(#g2)" />
              <circle cx="60" cy="70" r="24" fill="#22d3ee" opacity="0.75"/>
              <rect x="100" y="50" width="70" height="12" rx="6" fill="#a78bfa"/>
              <rect x="100" y="70" width="52" height="12" rx="6" fill="#a78bfa" opacity="0.7"/>
              <rect x="30" y="110" width="140" height="10" rx="5" fill="#22d3ee" opacity="0.7"/>
              <rect x="30" y="130" width="140" height="10" rx="5" fill="#22d3ee" opacity="0.5"/>
              <rect x="30" y="150" width="100" height="10" rx="5" fill="#22d3ee" opacity="0.3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 