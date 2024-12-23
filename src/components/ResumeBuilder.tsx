import React, { useState } from 'react';
import { Plus, Briefcase, GraduationCap, Award } from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
}

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
  const [newSkill, setNewSkill] = useState('');

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

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Resume Builder</h1>
        
        {/* Personal Information */}
        <div className="glass-panel p-6 space-y-4 resume-section">
          <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="glass-input"
              value={personalInfo.fullName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="glass-input"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="glass-input"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="glass-input"
              value={personalInfo.location}
              onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
            <button onClick={addExperience} className="glass-button flex items-center gap-2">
              <Plus size={20} />
              Add Experience
            </button>
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

        {/* Education Section */}
        <div className="glass-panel p-6 resume-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <button onClick={addEducation} className="glass-button flex items-center gap-2">
              <Plus size={20} />
              Add Education
            </button>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="space-y-4 p-4 bg-white/5 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Degree"
                    className="glass-input"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="School"
                    className="glass-input"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    className="glass-input"
                    value={edu.year}
                    onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="glass-panel p-6 resume-section">
          <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
          <input
            type="text"
            placeholder="Add a skill and press Enter"
            className="glass-input w-full mb-4"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={addSkill}
          />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;