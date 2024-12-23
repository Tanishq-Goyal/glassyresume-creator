import React from 'react';
import ResumeBuilder from "../components/ResumeBuilder";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ResumeBuilder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;