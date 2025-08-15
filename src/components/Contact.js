import React from 'react';

function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e] to-[#0b0f14]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Build Something
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Open to new opportunities and exciting collaborations. Let's discuss how we can work together to create something amazing.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-violet-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Main Contact Content */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <a
                href="mailto:nirajkumarsingh.may@gmail.com"
                className="text-primary-400 hover:text-primary-300 transition-colors text-lg font-medium break-all"
              >
                nirajkumarsingh.may@gmail.com
              </a>
            </div>

            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-violet-400/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <a
                href="tel:+916289472302"
                className="text-violet-400 hover:text-violet-300 transition-colors text-lg font-medium"
              >
                +91 6289472302
              </a>
            </div>

            <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-pink-400/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Location</h3>
              <p className="text-pink-400 text-lg font-medium">Kolkata, India</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Connect With Me</h3>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Let's connect and explore opportunities together. I'm always open to discussing new projects, collaborations, and exciting ventures.
            </p>

            <div className="flex justify-center gap-8 mb-12">
              <a
                href="https://github.com/niraj96"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-24 h-24 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-3xl border border-primary-400/30 flex items-center justify-center hover:border-primary-400 hover:bg-primary-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
              >
                <div className="text-center">
                  <svg className="w-12 h-12 text-primary-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm text-primary-400 font-semibold">GitHub</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/niraj-singh-466209145/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-24 h-24 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-3xl border border-violet-400/30 flex items-center justify-center hover:border-violet-400 hover:bg-violet-500/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
              >
                <div className="text-center">
                  <svg className="w-12 h-12 text-violet-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm text-violet-400 font-semibold">LinkedIn</span>
                </div>
              </a>
            </div>
          </div>

          {/* Hire Me Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-500/10 to-violet-500/10 rounded-3xl p-12 border border-primary-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Hire Me</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                I'm actively seeking new opportunities and exciting projects. To discuss potential collaborations, project requirements, or job opportunities, simply send me an email at <span className="text-primary-400 font-medium">nirajkumarsingh.may@gmail.com</span>.
              </p>
              {/* <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
                Include details about your project, timeline, and requirements. I'll respond within 24 hours to discuss how we can work together to bring your ideas to life.
              </p> */}
              <a
                href="mailto:nirajkumarsingh.may@gmail.com?subject=Project%20Inquiry%20-%20Niraj%20Kumar%20Singh&body=Hi%20Niraj,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project.%0D%0A%0D%0AProject%20Details:%0D%0A-%20Project%20Type:%0D%0A-%20Timeline:%0D%0A-%20Budget%20Range:%0D%0A-%20Specific%20Requirements:%0D%0A%0D%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20discuss%20further.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Send Email</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 