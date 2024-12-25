import React from 'react';
import { FileText, Home, Mail, LogIn, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Successfully logged out');
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 border-b border-blue-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-4 group">
            <FileText size={32} className="text-blue-100 group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold text-blue-100">Resume Builder Pro</h1>
              <p className="text-blue-200 text-sm">Create professional resumes with LaTeX support</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              to="/"
              className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/contact"
              className="flex items-center gap-2 text-blue-200 hover:text-blue-100 transition-colors"
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
            {user ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="flex items-center gap-2 text-blue-200 hover:text-blue-100"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </Button>
            ) : (
              <Link to="/auth">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-blue-200 hover:text-blue-100"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;