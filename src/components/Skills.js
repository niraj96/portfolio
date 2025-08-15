import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: 'JavaScript', icon: '💻', level: 'Advanced' },
        { name: 'TypeScript', icon: '📘', level: 'Advanced' },
        { name: 'Angular', icon: '🔴', level: 'Intermediate' }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'Expert' },
        { name: 'Express', icon: '🚀', level: 'Expert' },
        { name: 'NestJS', icon: '🪺', level: 'Advanced' }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 'Advanced' },
        { name: 'MySQL', icon: '🐬', level: 'Intermediate' },
        { name: 'PostgreSQL', icon: '🐘', level: 'Intermediate' }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: 'AWS EC2', icon: '☁️', level: 'Intermediate' },
        { name: 'Docker', icon: '🐳', level: 'Advanced' },
        { name: 'AWS Lambda', icon: 'λ', level: 'Intermediate' },
        { name: 'Git', icon: '📚', level: 'Advanced' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-[#1a1f2e] to-[#0b0f14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#0b0f14] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I've mastered over 6 years of development
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === 'Expert' ? 'bg-primary-500/20 text-primary-400' :
                        skill.level === 'Advanced' ? 'bg-violet-500/20 text-violet-400' :
                        'bg-pink-500/20 text-pink-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          skill.level === 'Expert' ? 'bg-primary-500 w-full' :
                          skill.level === 'Advanced' ? 'bg-violet-500 w-4/5' :
                          'bg-pink-500 w-3/5'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 