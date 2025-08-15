import React from 'react';

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Saroj Mohan Institute of Technology (MAKAUT)",
      location: "Kolkata",
      score: "CGPA: 7.8"
    },
    {
      degree: "12th",
      institution: "WBCHSE Board",
      location: "Kolkata",
      score: "68%"
    },
    {
      degree: "10th",
      institution: "WBBSE Board",
      location: "Kolkata",
      score: "75%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white/5 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Education</h2>
        <ul className="space-y-6 text-center">
          {education.map((edu, index) => (
            <li key={index} className="text-slate-300">
              <strong className="text-white">{edu.degree}</strong>, {edu.institution}, {edu.location} — {edu.score}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education; 