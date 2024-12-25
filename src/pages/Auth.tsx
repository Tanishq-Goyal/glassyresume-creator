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
    const { data: { subscription: authListener } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        toast.success('Successfully signed in!');
        navigate('/');
      } else if (event === 'SIGNED_OUT') {
        toast.info('Signed out successfully');
      } else if (event === 'PASSWORD_RECOVERY') {
        toast.info('Password recovery email sent');
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, [navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto glass-panel p-8">
          <h1 className="text-3xl font-bold text-cyan-800 mb-8 text-center">Welcome Back</h1>
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
              },
            }}
            providers={['google']}
          />
          <p className="mt-4 text-sm text-cyan-700 text-center">
            Password must be at least 6 characters long
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;