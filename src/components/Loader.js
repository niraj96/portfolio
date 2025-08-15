import React from 'react';

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0b0f14] z-50">
      <div className="spinner w-12 h-12 border-4 border-white/20 border-t-primary-500 rounded-full"></div>
    </div>
  );
}

export default Loader; 