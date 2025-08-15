import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f14] via-[#1a1f2e] to-[#0b0f14]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with different animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional floating orbs with movement */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-violet-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-28 h-28 bg-pink-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 bg-primary-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Moving orbs with custom animations */}
        <div className="absolute top-1/6 left-1/8 w-16 h-16 bg-primary-500/6 rounded-full blur-xl" style={{
          animation: 'floatOrb1 15s ease-in-out infinite'
        }}></div>
        <div className="absolute top-1/3 right-1/8 w-20 h-20 bg-violet-500/6 rounded-full blur-xl" style={{
          animation: 'floatOrb2 20s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/4 left-1/8 w-18 h-18 bg-pink-500/6 rounded-full blur-xl" style={{
          animation: 'floatOrb3 18s ease-in-out infinite'
        }}></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-primary-400/20 rounded-lg animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-violet-400/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        
        {/* Additional geometric shapes with movement */}
        <div className="absolute top-1/3 right-1/6 w-12 h-12 border border-pink-400/20 rounded-lg animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-primary-400/15 rotate-45 animate-spin" style={{ animationDuration: '22s' }}></div>
        <div className="absolute top-2/3 left-1/6 w-14 h-14 border border-violet-400/15 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        
        {/* Moving geometric shapes */}
        <div className="absolute top-1/5 left-1/4 w-10 h-10 border border-primary-400/20 rounded-lg" style={{
          animation: 'floatShape1 25s ease-in-out infinite'
        }}></div>
        <div className="absolute top-2/5 right-1/5 w-14 h-14 border border-violet-400/20 rounded-full" style={{
          animation: 'floatShape2 30s ease-in-out infinite'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-violet-400/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-pink-400/60 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Additional floating particles with movement */}
        <div className="absolute top-1/6 right-1/4 w-1.5 h-1.5 bg-primary-400/50 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 left-1/8 w-2.5 h-2.5 bg-violet-400/50 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/6 right-1/8 w-1 h-1 bg-pink-400/50 rounded-full animate-bounce" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute top-5/6 right-1/2 w-1.5 h-1.5 bg-primary-400/40 rounded-full animate-bounce" style={{ animationDelay: '2.2s' }}></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary-400/40 rounded-full" style={{
          animation: 'floatParticle1 12s ease-in-out infinite'
        }}></div>
        <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-violet-400/40 rounded-full" style={{
          animation: 'floatParticle2 16s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-pink-400/40 rounded-full" style={{
          animation: 'floatParticle3 14s ease-in-out infinite'
        }}></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional animated lines with movement */}
        <div className="absolute top-1/6 right-1/6 w-20 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-1/6 left-1/3 w-28 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent animate-pulse" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-2/3 left-1/8 w-16 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent animate-pulse" style={{ animationDelay: '1.9s' }}></div>
        
        {/* Moving lines */}
        <div className="absolute top-1/3 left-1/5 w-32 h-px bg-gradient-to-r from-transparent via-primary-400/25 to-transparent" style={{
          animation: 'floatLine1 22s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-px bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" style={{
          animation: 'floatLine2 28s ease-in-out infinite'
        }}></div>
        
        {/* Moving dots pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-32 w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Additional ping dots */}
          <div className="absolute top-16 right-16 w-1 h-1 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-48 left-48 w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-48 right-48 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-3/4 right-1/8 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1.8s' }}></div>
        </div>
        
        {/* Moving ping dots */}
        <div className="absolute top-1/5 left-1/4 w-1 h-1 bg-primary-400 rounded-full" style={{
          animation: 'floatPing1 18s ease-in-out infinite'
        }}></div>
        <div className="absolute top-2/5 right-1/4 w-1 h-1 bg-violet-400 rounded-full" style={{
          animation: 'floatPing2 24s ease-in-out infinite'
        }}></div>
        
        {/* Floating triangles and diamonds with movement */}
        <div className="absolute top-1/5 right-1/5 w-8 h-8 border border-primary-400/20 transform rotate-45 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-6 h-6 border border-violet-400/20 transform rotate-45 animate-pulse" style={{ animationDelay: '1.1s' }}></div>
        <div className="absolute top-3/5 left-1/4 w-10 h-10 border border-pink-400/15 transform rotate-45 animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        
        {/* Moving triangles and diamonds */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 border border-primary-400/15 transform rotate-45" style={{
          animation: 'floatTriangle1 26s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-8 h-8 border border-violet-400/15 transform rotate-45" style={{
          animation: 'floatTriangle2 32s ease-in-out infinite'
        }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating wave elements with movement */}
        <div className="absolute top-1/4 left-0 w-32 h-32 border border-primary-400/10 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 border border-violet-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 border border-pink-400/10 rounded-full animate-pulse" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute bottom-1/2 right-0 w-36 h-36 border border-primary-400/10 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        
        {/* Moving wave elements */}
        <div className="absolute top-1/6 left-1/8 w-28 h-28 border border-primary-400/8 rounded-full" style={{
          animation: 'floatWave1 35s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-1/6 right-1/8 w-32 h-32 border border-violet-400/8 rounded-full" style={{
          animation: 'floatWave2 40s ease-in-out infinite'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-primary-400 to-violet-400 bg-clip-text text-transparent leading-tight animate-fade-in">
            Niraj Kumar Singh
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mb-8 rounded-full animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 tracking-wide animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Senior Software Developer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Crafting scalable microservices and robust backend systems with 
          <span className="text-primary-400 font-medium"> Node.js</span>, 
          <span className="text-violet-400 font-medium"> NestJS</span>, and 
          <span className="text-pink-400 font-medium"> modern cloud technologies</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-primary-400 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 animate-bounce hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          
          <a 
            href="https://niraj96.github.io/portfolio/niraj-kumar-singh-cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-violet-400/30 hover:border-violet-400 text-violet-300 hover:text-violet-200 font-semibold rounded-xl hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero; 