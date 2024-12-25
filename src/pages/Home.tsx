import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { FileText, Star, Award, Upload, HelpCircle, CheckCircle } from 'lucide-react';

const Home = () => {
  const jobCategories = [
    { emoji: "🛍️", title: "Sales, Retail & Customer Support", count: 23 },
    { emoji: "🔬", title: "Science & Research", count: 5 },
    { emoji: "🛣️", title: "Supply Chain & Logistics", count: 1 },
    { emoji: "📱", title: "Technology", count: 16 },
    { emoji: "🚛", title: "Transportation", count: 4 },
    { emoji: "🏝️", title: "Travel, Attractions & Events", count: 3 },
    { emoji: "🧑🏼‍💼", title: "Other", count: 10 },
    { emoji: "🖥️", title: "Administrative & Business Operations", count: 31 },
    { emoji: "🏗️", title: "Architecture & Engineering", count: 10 },
    { emoji: "🪣", title: "Cleaning & Grounds Maintenance", count: 4 },
    { emoji: "👥", title: "Community & Human Services", count: 10 },
    { emoji: "🪜", title: "Construction & Extraction", count: 5 },
    { emoji: "🎓", title: "Education & Instruction", count: 19 },
    { emoji: "💰", title: "Finance & Accounting", count: 13 },
    { emoji: "🥤", title: "Food & Beverage", count: 11 },
    { emoji: "🏥", title: "Healthcare", count: 55 },
    { emoji: "⚖️", title: "Legal", count: 5 },
    { emoji: "⚙️", title: "Manufacturing & Utilities", count: 3 },
    { emoji: "📢", title: "Marketing, Advertising & Public Relations", count: 7 },
    { emoji: "🖼️", title: "Media, Arts & Design", count: 14 },
    { emoji: "🏠", title: "Personal Service", count: 6 },
    { emoji: "🕶️", title: "Protective & Security", count: 7 },
    { emoji: "🛠️", title: "Repair, Maintenance & Installation", count: 4 },
  ];

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

  const faqs = [
    {
      question: "Do I need a different resume for every different job application?",
      answer: "While you don't need a completely different resume for each application, it's recommended to tailor your resume to highlight relevant skills and experiences for each specific job."
    },
    {
      question: "How do I choose the right resume template?",
      answer: "Choose a template that matches the industry and position you're applying for. More traditional industries prefer classic layouts, while creative fields allow for more modern designs."
    },
    {
      question: "Free resume builder doesn't usually mean free. Does Resume.com sell my information?",
      answer: "No, we don't sell your information. Our resume builder is completely free to use with no hidden costs."
    },
    {
      question: "What does ATS-friendly mean?",
      answer: "ATS (Applicant Tracking System) friendly means your resume is formatted in a way that can be easily read by automated systems used by employers to screen resumes."
    },
    {
      question: "Can I have my resume reviewed when I've finished building?",
      answer: "Yes, we offer resume review services to help you optimize your resume for better results in your job search."
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
            <Link 
              to="/builder" 
              className="glass-button text-lg px-8 py-4 inline-block hover:bg-cyan-500/50"
            >
              Create Your Resume Now
            </Link>
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

          {/* Job Categories */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-cyan-900">Resume Samples by Category</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {jobCategories.map((category, index) => (
                <div key={index} className="glass-panel p-4 text-center space-y-2 hover:bg-white/50 transition-all duration-300">
                  <span className="text-4xl">{category.emoji}</span>
                  <h3 className="text-lg font-medium text-cyan-900">{category.title}</h3>
                  <p className="text-cyan-700">{category.count} templates</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-cyan-900">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-panel p-6 hover:bg-white/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-cyan-900 mb-2">{faq.question}</h3>
                  <p className="text-cyan-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Home;