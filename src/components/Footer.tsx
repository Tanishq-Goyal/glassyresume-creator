import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-panel p-6 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary">
            <p>© 2024 Resume Builder Pro. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & LaTeX</span>
          </div>
          <div className="text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            {" • "}
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;