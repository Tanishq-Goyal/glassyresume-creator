import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-lg border-t border-white/20 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white/60">
          Built with ❤️ using modern web technologies
        </p>
        <p className="text-white/40 text-sm mt-2">
          © {new Date().getFullYear()} Glassy Resume Builder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;