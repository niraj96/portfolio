import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Sr. Node.js Developer",
      company: "Unified Infotech Pvt Ltd",
      location: "Kolkata",
      period: "Dec 2023 – Present",
      description: "Leading microservices development with NestJS, implementing gRPC communication, Kafka data sync, and MQTT real-time messaging.",
      technologies: ["NestJS", "gRPC", "Kafka", "MQTT", "Microservices"]
    },
    {
      title: "Software Analyst",
      company: "PurpleTalk India Pvt Ltd",
      location: "Hyderabad",
      period: "Mar 2022 – Nov 2023",
      description: "Developed REST APIs using Express.js, implemented AWS SES, Firebase Cloud Messaging, and Twilio services.",
      technologies: ["Express.js", "Node.js", "AWS SES", "Firebase", "Twilio"]
    },
    {
      title: "Software Engineer",
      company: "Zimyo Consulting Pvt Ltd",
      location: "Gurgaon",
      period: "May 2021 – Mar 2022",
      description: "Full-stack development with REST APIs, RDBMS integration, and comprehensive bug management across frontend and backend.",
      technologies: ["REST APIs", "RDBMS", "Full Stack", "Bug Management"]
    },
    {
      title: "Software Developer",
      company: "Minivet System LLP",
      location: "Kolkata",
      period: "Dec 2020 – Apr 2021",
      description: "Site optimization and widget development using JavaScript, created REST APIs for MongoDB configuration management.",
      technologies: ["JavaScript", "MongoDB", "REST APIs", "Site Optimization"]
    },
    {
      title: "Associate Software Developer (MEAN)",
      company: "VComply Technologies",
      location: "Kolkata",
      period: "Sep 2019 – Dec 2020",
      description: "Developed Compliance, Risk, and Settings modules with AWS Lambda integration and Google APIs.",
      technologies: ["MEAN Stack", "AWS Lambda", "Google APIs", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e] to-[#0b0f14]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My career progression through various roles, each contributing to my expertise in software development
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-violet-400 to-pink-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary-500 rounded-full border-4 border-[#0b0f14] shadow-lg"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-1">
                    {/* Period badge */}
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full border border-primary-400/30 mb-4">
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-primary-400">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience; 