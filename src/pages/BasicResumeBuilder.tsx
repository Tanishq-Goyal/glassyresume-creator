import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { FileText, Download } from 'lucide-react';
import BasicPersonalInfo from '@/components/basic-resume/BasicPersonalInfo';
import BasicEducation from '@/components/basic-resume/BasicEducation';
import BasicExperience from '@/components/basic-resume/BasicExperience';
import BasicSkills from '@/components/basic-resume/BasicSkills';
import BasicProjects from '@/components/basic-resume/BasicProjects';
import BasicResumePreview from '@/components/basic-resume/BasicResumePreview';
import { PersonalInfo, Education, Experience } from '@/components/ResumeTypes';
import html2pdf from 'html2pdf.js';

const BasicResumeBuilder = () => {
  const { toast } = useToast();
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: 'ANON ANON ANON',
    email: 'anonemail@example.com',
    phone: '+91 1234567890',
    location: 'Bengaluru, India',
  });

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      degree: 'ANON Dual Degree 5Y',
      school: 'ANON University',
      year: '2026'
    },
    {
      id: '2',
      degree: 'ANON (School) Certificate',
      school: 'ANON Higher Secondary School',
      year: '2021'
    }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Data Science Intern',
      company: 'ANON',
      startDate: 'Jul 2024',
      endDate: 'Present',
      description: 'Developed an ANON model to estimate demand volume, enhancing forecasting capabilities.\nAchieved a 15% reduction in ANON Error through advanced optimization techniques.\nImproved operational efficiency, resulting in a 5% reduction in ANON consumption.'
    },
    {
      id: '2',
      title: 'Research Intern',
      company: 'ANON',
      startDate: 'Jan 2024',
      endDate: 'Mar 2024',
      description: 'Published the paper "ANON: A Generalised Framework for Tooling," detailing a pipeline for ANON application.\nDeveloped an agent for ANON, successfully merging an approved PR into the repository.\nConducted experiments achieving a 25% latency reduction using quantization methods.'
    }
  ]);

  const [skills, setSkills] = useState<string[]>([
    'ANON', 'ANON', 'ANON', 'ANON', 'ANON', 'Python', 'Machine Learning', 'Data Science'
  ]);

  const [projects, setProjects] = useState<{ id: string; title: string; description: string; }[]>([
    {
      id: '1',
      title: 'ANON: An AI-powered Chat Bot',
      description: 'Developed ANON using quantized ANON models. Scraped data to create databases.\nDesigned and deployed an app to showcase ANON, ensuring seamless interaction.'
    }
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('basic-resume-preview');
    if (!element) return;

    // Force any pending state updates to complete
    await new Promise(resolve => setTimeout(resolve, 100));

    const opt = {
      margin: 0,
      filename: `${personalInfo.fullName.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true,
        allowTaint: true,
        foreignObjectRendering: true,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      }
    };

    try {
      // Wait for images to load
      await Promise.all(
        Array.from(element.getElementsByTagName('img'))
          .map(img => img.complete ? Promise.resolve() : new Promise(resolve => img.onload = resolve))
      );

      // Generate PDF
      const pdf = await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "Success",
        description: "Resume downloaded successfully",
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "Error",
        description: "Failed to download resume",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center text-primary mb-12">Basic Resume Builder</h1>
          
          <BasicPersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />

          <BasicEducation
            education={education}
            setEducation={setEducation}
          />

          <BasicExperience
            experiences={experiences}
            setExperiences={setExperiences}
          />

          <BasicProjects
            projects={projects}
            setProjects={setProjects}
          />

          <BasicSkills
            skills={skills}
            setSkills={setSkills}
          />

          <div className="flex justify-center">
            <Button
              onClick={() => setShowPreview(true)}
              className="glass-button flex items-center gap-2 px-8 py-4 text-lg"
            >
              <FileText size={24} />
              Preview Resume
            </Button>
          </div>

          {showPreview && (
            <div className="space-y-8">
              <div id="basic-resume-preview" className="bg-white">
                <BasicResumePreview
                  personalInfo={personalInfo}
                  education={education}
                  experiences={experiences}
                  skills={skills}
                  projects={projects}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={handleDownloadPDF}
                  className="glass-button flex items-center gap-2"
                >
                  <Download size={20} />
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BasicResumeBuilder;