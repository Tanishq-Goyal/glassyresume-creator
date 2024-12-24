import React from 'react';
import { FileText, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-400 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-4 group">
            <FileText size={32} className="text-white group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold text-white">Resume Builder Pro</h1>
              <p className="text-cyan-100 text-sm">Create professional resumes with LaTeX support</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              to="/"
              className="flex items-center gap-2 text-white hover:text-cyan-100 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;