import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import Layout from '@/components/Layout';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription: authListener } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        toast.success('Successfully signed in!');
        navigate('/builder');
      }
      if (event === 'USER_UPDATED' && session) {
        toast.success('Account created successfully!');
        navigate('/builder');
      }
      if (event === 'SIGNED_OUT') {
        toast.success('Signed out successfully');
        navigate('/');
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto glass-panel p-8">
            <h1 className="text-3xl font-bold text-cyan-900 mb-8 text-center">Welcome Back</h1>
            <SupabaseAuth 
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'rgb(6 182 212)',
                      brandAccent: 'rgb(8 145 178)',
                      inputBackground: 'rgba(255, 255, 255, 0.2)',
                      inputBorder: 'rgba(6, 182, 212, 0.3)',
                      inputText: 'rgb(14 116 144)',
                      inputLabelText: 'rgb(14 116 144)',
                    },
                  },
                },
                className: {
                  container: 'glass-panel',
                  button: 'glass-button w-full',
                  input: 'glass-input w-full',
                  label: 'text-cyan-800',
                  message: 'text-red-500 text-sm',
                },
              }}
              providers={['google']}
              redirectTo={`${window.location.origin}/builder`}
              onError={(error) => {
                console.error('Auth error:', error);
                toast.error(error.message || 'An error occurred during authentication');
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;