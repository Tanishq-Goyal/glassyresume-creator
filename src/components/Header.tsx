import React from 'react';
import { FileText, Github, BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <FileText size={32} className="text-blue-100" />
            <div>
              <h1 className="text-2xl font-bold text-blue-100">Resume Builder Pro</h1>
              <p className="text-blue-200 text-sm">Create professional resumes with LaTeX support</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://docs.example.com/resume-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <BookOpen size={20} />
              <span>Documentation</span>
            </a>
            <a 
              href="https://github.com/yourusername/resume-builder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <Github size={20} />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;