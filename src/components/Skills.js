import React from 'react';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: '💻' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Angular', icon: '🔴' },
    { name: 'Express', icon: '🚀' },
    { name: 'NestJS', icon: '🪺' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Postgres', icon: '🐘' },
    { name: 'EC2', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS Lambda', icon: 'λ' },
    { name: 'Git', icon: '📚' },
  ];

  return (
    <section id="skills" className="py-20 bg-white/5 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white/5 rounded flex flex-col items-center hover:bg-white/10 transition-colors">
              <span className="text-2xl mb-2">{skill.icon}</span>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 