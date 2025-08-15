import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Microservices API Platform",
      description: "Developed a comprehensive microservices platform using NestJS with gRPC communication, Kafka for data synchronization, and MQTT for real-time messaging.",
      technologies: ["NestJS", "gRPC", "Kafka", "MQTT", "Microservices", "Docker"],
      liveDemo: "#",
      githubCode: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      status: "Production"
    },
    {
      id: 2,
      title: "E-commerce Backend System",
      description: "Built a robust e-commerce backend using Express.js and Node.js with AWS integration. Implemented payment processing and real-time notifications.",
      technologies: ["Express.js", "Node.js", "AWS SES", "Firebase", "Twilio", "MongoDB"],
      liveDemo: "#",
      githubCode: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      status: "Live"
    },
    {
      id: 3,
      title: "VComply Compliance Platform",
      description: "Developed comprehensive Compliance, Risk, and Settings modules with AWS Lambda integration and Google APIs for seamless workflow management.",
      technologies: ["MEAN Stack", "AWS Lambda", "Google APIs", "Node.js", "MongoDB"],
      liveDemo: "#",
      githubCode: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] to-[#1a1f2e]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities through real-world projects
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary-400/50 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                    project.status === 'Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' :
                    'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/10 text-xs text-gray-300 rounded-full border border-white/20 hover:border-primary-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-sm font-semibold rounded-xl text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-white/20 hover:border-primary-400 text-white text-sm font-semibold rounded-xl text-center hover:bg-white/5 transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/niraj96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-400/50 text-primary-400 font-semibold rounded-xl hover:bg-primary-400/10 hover:border-primary-400 transition-all duration-300"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects; 