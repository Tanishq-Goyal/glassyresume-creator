import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4 py-24">
          <div className="glass-panel p-12 max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-6xl font-bold text-cyan-900">404</h1>
            <h2 className="text-2xl font-semibold text-cyan-800">Page Not Found</h2>
            <p className="text-cyan-700">The page you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/" 
              className="glass-button inline-flex items-center gap-2 hover:bg-cyan-500/50"
            >
              <Home size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;