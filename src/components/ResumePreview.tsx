import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

interface ResumePreviewProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  template: string;
  optionalSections: any[];
}

const ResumePreview = ({ 
  personalInfo, 
  experiences, 
  education, 
  skills,
  template,
  optionalSections
}: ResumePreviewProps) => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white text-black p-8 shadow-xl">
      {/* Header Section */}
      <header className="text-center mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-lg text-gray-600 mb-4">Chemical Engineering (B.Tech)</p>
        <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
            <Phone size={16} />
            {personalInfo.phone}
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
            <Mail size={16} />
            {personalInfo.email}
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
            <Github size={16} />
            GitHub
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-[1fr_2.5fr] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b-2 border-gray-200">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b-2 border-gray-200">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="text-sm text-gray-600">{edu.year}</div>
                <div className="font-semibold">{edu.degree}</div>
                <div className="text-gray-700">{edu.school}</div>
              </div>
            ))}
          </section>

          {optionalSections.map((section, index) => (
            <section key={index}>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b-2 border-gray-200">
                {section.type}
              </h2>
              <p className="text-gray-700">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b-2 border-gray-200">
              Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-6 relative pl-24">
                <div className="absolute left-0 top-0 text-sm text-gray-600 w-20">
                  {exp.startDate} - {exp.endDate}
                </div>
                <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                <div className="text-gray-700">{exp.company}</div>
                <p className="mt-2 text-gray-600 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;