import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BasicResumePreview from '@/components/basic-resume/BasicResumePreview';
import PersonalInfoForm from '@/components/resume/PersonalInfoForm';
import ExperienceSection from '@/components/resume/ExperienceSection';
import EducationForm from '@/components/resume/EducationForm';
import SkillsForm from '@/components/resume/SkillsForm';
import { PersonalInfo, Experience, Education } from '@/components/ResumeTypes';
import html2pdf from 'html2pdf.js';

const BasicResumeBuilder = () => {
  const { toast } = useToast();
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [projects, setProjects] = useState<{ id: string; title: string; description: string; }[]>([]);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('basic-resume-preview');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `${personalInfo.fullName.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        hotfixes: ['px_scaling'],
      }
    };

    try {
      // Wait for all images to load
      const images = element.getElementsByTagName('img');
      await Promise.all(
        Array.from(images)
          .map(img => img.complete ? Promise.resolve() : new Promise(resolve => img.onload = resolve))
      );

      await html2pdf().set(opt).from(element).save();
      
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
    <div>
      <PersonalInfoForm
        personalInfo={personalInfo}
        onUpdatePersonalInfo={setPersonalInfo}
      />
      <EducationForm
        education={education}
        onAddEducation={(edu) => setEducation([...education, edu])}
        onRemoveEducation={(id) => setEducation(education.filter(edu => edu.id !== id))}
        onUpdateEducation={(id, field, value) => setEducation(education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu))}
      />
      <ExperienceSection
        experiences={experiences}
        onAddExperience={(exp) => setExperiences([...experiences, exp])}
        onRemoveExperience={(id) => setExperiences(experiences.filter(exp => exp.id !== id))}
        onUpdateExperience={(id, field, value) => setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp))}
      />
      <SkillsForm
        skills={skills}
        onAddSkill={(skill) => setSkills([...skills, skill])}
        onRemoveSkill={(skill) => setSkills(skills.filter(s => s !== skill))}
      />
      <div id="basic-resume-preview">
        <BasicResumePreview
          personalInfo={personalInfo}
          experiences={experiences}
          education={education}
          skills={skills}
          projects={projects}
        />
      </div>
      <Button onClick={handleDownloadPDF}>Download PDF</Button>
    </div>
  );
};

export default BasicResumeBuilder;
