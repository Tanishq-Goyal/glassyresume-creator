import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="glass-panel p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-100 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-blue-200">
            <section>
              <h2 className="text-2xl font-semibold text-blue-100 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us when using our resume builder service. This includes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal information for your resume</li>
                <li>Contact information</li>
                <li>Account credentials</li>
                <li>Usage data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-100 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about our services</li>
                <li>Ensure the security of our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-100 mb-4">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-100 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;