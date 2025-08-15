import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f14] via-[#1a1f2e] to-[#0b0f14]"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-primary-400 to-violet-400 bg-clip-text text-transparent leading-tight">
            Niraj Kumar Singh
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 tracking-wide">
          Senior Software Developer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          Crafting scalable microservices and robust backend systems with 
          <span className="text-primary-400 font-medium"> Node.js</span>, 
          <span className="text-violet-400 font-medium"> NestJS</span>, and 
          <span className="text-pink-400 font-medium"> modern cloud technologies</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-white/20 hover:border-primary-400 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 