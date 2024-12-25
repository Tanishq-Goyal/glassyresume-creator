import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        toast.success('Successfully signed in!');
        navigate('/');
      }
    });

    // Listen for auth errors
    const { data: { subscription } } = supabase.auth.onError((error) => {
      if (error.message.includes('weak_password')) {
        toast.error('Password must be at least 6 characters long');
      } else if (error.message.includes('invalid_credentials')) {
        toast.error('Invalid email or password');
      } else {
        toast.error(error.message);
      }
    });

    // Check if user is already signed in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto glass-panel p-8">
          <h1 className="text-3xl font-bold text-blue-100 mb-8 text-center">Welcome Back</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#3b82f6',
                    brandAccent: '#2563eb',
                  },
                },
              },
              className: {
                message: 'text-red-500',
              },
            }}
            providers={['google']}
            redirectTo={window.location.origin}
            localization={{
              variables: {
                sign_up: {
                  password_label: 'Password (minimum 6 characters)',
                  password_input_placeholder: 'Enter a password (minimum 6 characters)',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;