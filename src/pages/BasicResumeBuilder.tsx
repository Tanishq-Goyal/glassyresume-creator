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
    fullName: '',
    email: '',
    phone: '',
    location: '',
  });

  const [education, setEducation] = useState<Education[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<{ id: string; title: string; description: string; }[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('basic-resume-preview');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `${personalInfo.fullName.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait',
        putTotalPages: true
      },
      enableLinks: true
    };

    try {
      await html2pdf().set(opt).from(element).save();
      toast({
        title: "Success",
        description: "Resume downloaded successfully",
      });
    } catch (error) {
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
              <div id="basic-resume-preview">
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
