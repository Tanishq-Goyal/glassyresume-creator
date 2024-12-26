import React from 'react';
import Layout from '../components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <main className="container mx-auto px-4 py-12">
          <div className="glass-panel p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-cyan-900 mb-8">Terms of Service</h1>
            
            <div className="space-y-6 text-cyan-900">
              <section>
                <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Acceptance of Terms</h2>
                <p>By accessing and using our resume builder service, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Use License</h2>
                <p>We grant you a personal, non-exclusive, non-transferable license to use our resume builder service for creating and managing your resumes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-800 mb-4">User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with all applicable laws</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Limitations</h2>
                <p>You may not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Interfere with the service's functionality</li>
                  <li>Copy or modify the service's software</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Disclaimer</h2>
                <p>The service is provided "as is" without warranties of any kind, either express or implied.</p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Terms;