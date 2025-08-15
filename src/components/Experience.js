import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Sr. Node.js Developer",
      company: "Unified Infotech Pvt Ltd",
      location: "Kolkata",
      period: "Dec 2023 – Present"
    },
    {
      title: "Software Analyst",
      company: "PurpleTalk India Pvt Ltd",
      location: "Hyderabad",
      period: "Mar 2022 – Nov 2023"
    },
    {
      title: "Software Engineer",
      company: "Zimyo Consulting Pvt Ltd",
      location: "Gurgaon",
      period: "May 2021 – Mar 2022"
    },
    {
      title: "Software Developer",
      company: "Minivet System LLP",
      location: "Kolkata",
      period: "Dec 2020 – Apr 2021"
    },
    {
      title: "Associate Software Developer (MEAN)",
      company: "VComply Technologies",
      location: "Kolkata",
      period: "Sep 2019 – Dec 2020"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Employment History</h2>
        <ul className="space-y-6">
          {experiences.map((exp, index) => (
            <li key={index} className="text-slate-300">
              <strong className="text-white">{exp.title}</strong>, {exp.company}, {exp.location} ({exp.period})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience; 