import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Microservices API Platform",
      description: "Developed a comprehensive microservices platform using NestJS with gRPC communication, Kafka for data synchronization, and MQTT for real-time messaging.",
      technologies: ["NestJS", "gRPC", "Kafka", "MQTT", "Microservices", "Docker"],
      liveDemo: "#",
      githubCode: "#"
    },
    {
      id: 2,
      title: "E-commerce Backend System",
      description: "Built a robust e-commerce backend using Express.js and Node.js with AWS integration. Implemented payment processing and real-time notifications.",
      technologies: ["Express.js", "Node.js", "AWS SES", "Firebase", "Twilio", "MongoDB"],
      liveDemo: "#",
      githubCode: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hobby Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex gap-3">
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-sm transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubCode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm transition-colors"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 