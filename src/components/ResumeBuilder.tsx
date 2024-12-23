import React, { useState } from 'react';
import { Plus, FileText, Download } from 'lucide-react';
import { Button } from './ui/button';
import ResumeTemplates from './ResumeTemplates';
import ResumePreview from './ResumePreview';
import LatexEditor from './LatexEditor';
import OptionalSections from './OptionalSections';
import InfoTooltip from './InfoTooltip';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import html2pdf from 'html2pdf.js';

const ResumeBuilder = () => {
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

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: '',
      school: '',
      year: '',
    };
    setEducation([...education, newEdu]);
  };

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
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
    setOptionalSections([...optionalSections, { type: sectionType, content: '' }]);
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
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF]">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Resume Builder</h1>
        
        {/* Template Selection */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Choose Template</h2>
            <InfoTooltip content="Select a template that best suits your professional style" />
          </div>
          <ResumeTemplates
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
        </div>

        {/* Personal Information */}
        <div className="glass-panel p-6 space-y-4 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
            <InfoTooltip content="Add your contact details and basic information" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="glass-input text-gray-800"
              value={personalInfo.fullName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="glass-input text-gray-800"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="glass-input text-gray-800"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="glass-input text-gray-800"
              value={personalInfo.location}
              onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
            <InfoTooltip content="Add your work experience with detailed responsibilities and achievements" />
            <Button onClick={addExperience} className="glass-button ml-auto flex items-center gap-2">
              <Plus size={20} />
              Add Experience
            </Button>
          </div>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-4 p-4 bg-white/5 rounded-lg">
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

        {/* Projects Section */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
            <InfoTooltip content="Highlight your key projects with technologies used and outcomes" />
          </div>
          {/* Project inputs similar to experience section */}
        </div>

        {/* Achievements Section */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Achievements</h2>
            <InfoTooltip content="List your awards, certifications, and notable accomplishments" />
          </div>
          {/* Achievement inputs */}
        </div>

        {/* Positions of Responsibility */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Positions of Responsibility</h2>
            <InfoTooltip content="Add leadership roles and responsibilities in organizations" />
          </div>
          {/* Position inputs */}
        </div>

        {/* Optional Sections */}
        <OptionalSections onAddSection={handleAddOptionalSection} />

        {/* Compile Resume Button */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => setShowPreview(true)}
            className="glass-button flex items-center gap-2 px-8 py-4 text-lg"
          >
            <FileText size={24} />
            Preview Resume
          </Button>
          {showPreview && (
            <Button
              onClick={handleDownloadPDF}
              className="glass-button flex items-center gap-2 px-8 py-4 text-lg"
            >
              <Download size={24} />
              Download PDF
            </Button>
          )}
        </div>

        {/* Preview and LaTeX sections */}
        {showPreview && (
          <div className="space-y-8">
            <div id="resume-preview">
              <ResumePreview
                personalInfo={personalInfo}
                experiences={experiences}
                education={education}
                skills={skills}
                projects={projects}
                achievements={achievements}
                positions={positions}
                optionalSections={optionalSections}
                template={selectedTemplate}
              />
            </div>
            <LatexEditor
              personalInfo={personalInfo}
              experiences={experiences}
              education={education}
              skills={skills}
              template={selectedTemplate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
