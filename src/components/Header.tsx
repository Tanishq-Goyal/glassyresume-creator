import React from 'react';
import { FileText, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 via-blue-100 to-cyan-100 border-b border-blue-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-4 group">
            <FileText size={32} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Resume Builder Pro</h1>
              <p className="text-blue-600 text-sm">Create professional resumes with LaTeX support</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              to="/"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/contact"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;