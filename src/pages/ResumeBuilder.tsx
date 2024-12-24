import React, { useState } from 'react';
import { Plus, FileText, Download, X } from 'lucide-react';
import { Button } from './ui/button';
import TemplateSelector from './resume/TemplateSelector';
import ResumePreview from './ResumePreview';
import LatexEditor from './LatexEditor';
import OptionalSections from './OptionalSections';
import InfoTooltip from './InfoTooltip';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import html2pdf from 'html2pdf.js';
import { useToast } from './ui/use-toast';

const ResumeBuilder = () => {
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
  const [projects, setProjects] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [optionalSections, setOptionalSections] = useState<any[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [showPreview, setShowPreview] = useState(false);

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setExperiences([...experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: '',
      school: '',
      year: '',
    };
    setEducation([...education, newEdu]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleAddOptionalSection = (sectionType: string) => {
    const newSection = {
      id: Date.now().toString(),
      type: sectionType,
      content: '',
    };
    setOptionalSections([...optionalSections, newSection]);
  };

  const removeOptionalSection = (id: string) => {
    setOptionalSections(optionalSections.filter(section => section.id !== id));
  };

  const updateOptionalSection = (id: string, content: string) => {
    setOptionalSections(optionalSections.map(section =>
      section.id === id ? { ...section, content } : section
    ));
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const opt = {
      margin: 1,
      filename: `${personalInfo.fullName.toLowerCase().replace(/\s+/g, '_')}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
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

  const handleLatexRecompile = (latexCode: string) => {
    toast({
      title: "LaTeX Recompiled",
      description: "Resume updated from LaTeX code",
    });
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Resume Builder</h1>
        
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onSelectTemplate={setSelectedTemplate}
        />

        <div className="glass-panel p-6 space-y-4 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-primary">Personal Information</h2>
            <InfoTooltip content="Add your contact details and basic information" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="glass-input text-primary"
              value={personalInfo.fullName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="glass-input text-primary"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="glass-input text-primary"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="glass-input text-primary"
              value={personalInfo.location}
              onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
            />
          </div>
        </div>

        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-primary">Experience</h2>
            <InfoTooltip content="Add your work experience with detailed responsibilities and achievements" />
            <Button onClick={addExperience} className="glass-button ml-auto flex items-center gap-2">
              <Plus size={20} />
              Add Experience
            </Button>
          </div>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-4 p-4 bg-secondary/20 rounded-lg relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
                  onClick={() => removeExperience(exp.id)}
                >
                  <X size={20} />
                </Button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="glass-input"
                    value={exp.title}
                    onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="glass-input"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Start Date"
                    className="glass-input"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="End Date"
                    className="glass-input"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  />
                </div>
                <textarea
                  placeholder="Description"
                  className="glass-input w-full h-24"
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-primary">Skills</h2>
            <InfoTooltip content="Add your technical and soft skills" />
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Add a skill (press Enter)"
              className="glass-input w-full"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={addSkill}
            />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full"
                >
                  <span className="text-primary">{skill}</span>
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <OptionalSections 
          onAddSection={handleAddOptionalSection}
          sections={optionalSections}
          onRemoveSection={removeOptionalSection}
          onUpdateSection={updateOptionalSection}
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
            <div id="resume-preview">
              <ResumePreview
                personalInfo={personalInfo}
                experiences={experiences}
                education={education}
                skills={skills}
                template={selectedTemplate}
                optionalSections={optionalSections}
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
            <LatexEditor
              personalInfo={personalInfo}
              experiences={experiences}
              education={education}
              skills={skills}
              template={selectedTemplate}
              onRecompile={handleLatexRecompile}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;

