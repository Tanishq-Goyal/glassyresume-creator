import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableSection from '@/components/DraggableSection';
import { FileText, Download, Plus, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ResumePreview from "@/components/ResumePreview";
import LatexEditor from "@/components/LatexEditor";
import OptionalSections from "@/components/OptionalSections";
import InfoTooltip from "@/components/InfoTooltip";
import { PersonalInfo, Experience, Education } from "@/components/ResumeTypes";
import html2pdf from 'html2pdf.js';
import PhoneInput from '@/components/resume/PhoneInput';
import ExperienceSection from '@/components/resume/ExperienceSection';
import PublicationsSection from '@/components/resume/PublicationsSection';
import AwardsSection from '@/components/resume/AwardsSection';
import EducationForm from '@/components/resume/EducationForm';
import SkillsForm from '@/components/resume/SkillsForm';

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
  const [publications, setPublications] = useState<any[]>([]);
  const [awards, setAwards] = useState<any[]>([]);
  const [optionalSections, setOptionalSections] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [showPreview, setShowPreview] = useState(false);

  const [sectionOrder, setSectionOrder] = useState([
    'personal',
    'education',
    'publications',
    'experience',
    'projects',
    'awards',
    'skills',
    'optional'
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSectionOrder((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Education handlers
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

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  // Experience handlers
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

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  // Skills handlers
  const addSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  // Optional sections handlers
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
    <Layout>
      <div className="min-h-screen p-8 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center text-primary mb-12">Resume Builder</h1>
          
          <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={sectionOrder}
              strategy={verticalListSortingStrategy}
            >
              {sectionOrder.map((section) => (
                <DraggableSection key={section} id={section}>
                  {section === 'personal' && (
                    <div className="glass-panel p-6 resume-section">
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
                        <PhoneInput
                          value={personalInfo.phone}
                          onChange={(value) => setPersonalInfo({ ...personalInfo, phone: value })}
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
                  )}
                  {section === 'education' && (
                    <EducationForm
                      education={education}
                      onAddEducation={addEducation}
                      onRemoveEducation={removeEducation}
                      onUpdateEducation={updateEducation}
                    />
                  )}
                  {section === 'experience' && (
                    <ExperienceSection
                      experiences={experiences}
                      onAddExperience={addExperience}
                      onRemoveExperience={removeExperience}
                      onUpdateExperience={updateExperience}
                    />
                  )}
                  {section === 'publications' && (
                    <PublicationsSection
                      publications={publications}
                      onAddPublication={addPublication}
                      onRemovePublication={removePublication}
                      onUpdatePublication={updatePublication}
                    />
                  )}
                  {section === 'awards' && (
                    <AwardsSection
                      awards={awards}
                      onAddAward={addAward}
                      onRemoveAward={removeAward}
                      onUpdateAward={updateAward}
                    />
                  )}
                  {section === 'skills' && (
                    <SkillsForm
                      skills={skills}
                      onAddSkill={addSkill}
                      onRemoveSkill={removeSkill}
                    />
                  )}
                  {section === 'optional' && (
                    <OptionalSections 
                      onAddSection={handleAddOptionalSection}
                      sections={optionalSections}
                      onRemoveSection={removeOptionalSection}
                      onUpdateSection={updateOptionalSection}
                    />
                  )}
                </DraggableSection>
              ))}
            </SortableContext>
          </DndContext>

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
                  optionalSections={[...optionalSections, 
                    ...publications.map(p => ({
                      type: 'publications',
                      content: `${p.title} | ${p.conference} | ${p.location} | ${p.date}\n${p.description}`
                    })),
                    ...awards.map(a => ({
                      type: 'awards',
                      content: a.description
                    }))
                  ]}
                  sectionOrder={sectionOrder}
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
    </Layout>
  );
};

export default ResumeBuilder;