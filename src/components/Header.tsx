import React from 'react';
import { FileText, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="glass-panel p-6 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <FileText size={32} className="text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-primary">Resume Builder Pro</h1>
            <p className="text-muted-foreground">Create professional resumes with LaTeX support</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/yourusername/resume-builder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;