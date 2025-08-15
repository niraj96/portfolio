import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something</h2>
        <p className="text-slate-400">
          Open to roles and collaborations. Reach out via email or connect on LinkedIn/GitHub.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a 
            href="mailto:nirajkumarsingh.may@gmail.com" 
            className="px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium shadow-lg transition-colors"
          >
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/niraj-singh-466209145/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/niraj96" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact; 