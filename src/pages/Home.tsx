import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { FileText, Star, Award, Upload, HelpCircle, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "100% Free download",
      description: "Download and print resumes in PDF and plain text formatting. Unlimited sharing."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "Pre-written examples",
      description: "Over 100+ job-tailored examples to kickstart your resume with ease."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: "Intuitive to use",
      description: "Easily organize and customize your resume sections with drag-and-drop simplicity."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Know your progress",
      description: "Stay on track throughout the resume-building process."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-500" />,
      title: "Useful tips",
      description: "Crafted by professional writers to help you start and refine your resume."
    },
    {
      icon: <Upload className="w-8 h-8 text-blue-500" />,
      title: "Upload existing resume",
      description: "Upload and enhance your existing resume with our advanced tools."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
        <main className="container mx-auto px-4 py-12 space-y-24">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-900">Build a professional resume for free</h1>
            <p className="text-xl text-cyan-700">Create your resume easily with our free builder and professional templates.</p>
            
            {/* Resume Options */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              {/* Basic Resume Option */}
              <Link 
                to="/basic-builder" 
                className="p-6 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-cyan-900">Basic Resume</h3>
                  <p className="text-cyan-700">Perfect for students and fresh graduates. Simple and clean format with guided suggestions.</p>
                  <div className="flex items-center justify-center">
                    <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm">
                      Beginner Friendly
                    </span>
                  </div>
                </div>
              </Link>

              {/* IIT Resume Template Option */}
              <Link 
                to="/builder" 
                className="p-6 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-cyan-900">IIT Resume Template</h3>
                  <p className="text-cyan-700">Professional template following IIT format. Advanced customization with multiple sections.</p>
                  <div className="flex items-center justify-center">
                    <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm">
                      Recommended
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-panel p-6 space-y-4 hover:bg-white/50 transition-all duration-300">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center text-cyan-900">{feature.title}</h3>
                <p className="text-cyan-700 text-center">{feature.description}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Home;