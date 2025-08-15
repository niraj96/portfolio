import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-sm text-slate-500">
      <p>© {currentYear} Niraj Kumar Singh — Built with React + Tailwind CSS</p>
    </footer>
  );
}

export default Footer; 