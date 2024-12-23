import React from 'react';
import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white/10 backdrop-blur-lg border-b border-white/20 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-8 w-8 text-blue-200" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Glassy Resume Builder
          </h1>
        </div>
        <nav className="flex gap-6">
          <a href="#templates" className="text-white/80 hover:text-white transition-colors">Templates</a>
          <a href="#builder" className="text-white/80 hover:text-white transition-colors">Builder</a>
          <a href="#preview" className="text-white/80 hover:text-white transition-colors">Preview</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;