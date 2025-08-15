import React from 'react';

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Saroj Mohan Institute of Technology (MAKAUT)",
      location: "Kolkata",
      score: "7.8 CGPA",
      period: "2015 - 2019",
      description: "Bachelor's degree with focus on software engineering principles, algorithms, and modern technologies.",
      icon: "🎓"
    },
    {
      degree: "12th Standard",
      institution: "WBCHSE Board",
      location: "Kolkata",
      score: "68%",
      period: "2013 - 2015",
      description: "Higher Secondary Education with Science stream specialization.",
      icon: "📚"
    },
    {
      degree: "10th Standard",
      institution: "WBBSE Board",
      location: "Kolkata",
      score: "75%",
      period: "2012 - 2013",
      description: "Secondary Education with strong foundation in core subjects.",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-32 bg-gradient-to-b from-[#0b0f14] to-[#1a1f2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#1a1f2e] opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Educational Background
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey that laid the foundation for my software development career
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary-400/50 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon and Score */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{edu.icon}</span>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    edu.degree.includes('B.Tech') ? 'bg-primary-500/20 text-primary-400 border border-primary-400/30' :
                    edu.degree.includes('12th') ? 'bg-violet-500/20 text-violet-400 border border-violet-400/30' :
                    'bg-pink-500/20 text-pink-400 border border-pink-400/30'
                  }`}>
                    {edu.score}
                  </div>
                </div>

                {/* Degree */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors leading-tight">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm font-medium">{edu.institution}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{edu.location}</span>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{edu.period}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education; 