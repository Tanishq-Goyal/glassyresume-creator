import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import { Button } from './ui/button';
import { FileText, Download } from 'lucide-react';

interface ResumePreviewProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  projects: any[];
  achievements: string[];
  positions: any[];
  optionalSections: any[];
  template: string;
}

const ResumePreview = ({ 
  personalInfo, 
  experiences, 
  education, 
  skills,
  projects,
  achievements,
  positions,
  optionalSections,
  template 
}: ResumePreviewProps) => {
  const handleDownload = () => {
    // TODO: Implement PDF generation and download
    console.log('Downloading PDF...');
  };

  return (
    <div className="glass-panel p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Resume Preview</h2>
        <Button onClick={handleDownload} className="glass-button flex items-center gap-2">
          <Download size={20} />
          Download PDF
        </Button>
      </div>
      
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName}</h1>
          <div className="text-gray-600">
            {personalInfo.email} • {personalInfo.phone} • {personalInfo.location}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="font-semibold">{exp.company}</h3>
              <div className="text-gray-600">{exp.title}</div>
              <div className="text-gray-500 text-sm">
                {exp.startDate} - {exp.endDate}
              </div>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="font-semibold">{edu.school}</h3>
              <div className="text-gray-600">{edu.degree}</div>
              <div className="text-gray-500 text-sm">{edu.year}</div>
            </div>
          ))}
        </div>

        {projects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {achievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Achievements</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-4">
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        )}

        {positions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Positions of Responsibility</h2>
            {positions.map((position, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{position.title}</h3>
                <p className="mt-2">{position.description}</p>
              </div>
            ))}
          </div>
        )}

        {optionalSections.length > 0 && (
          optionalSections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">{section.type}</h2>
              <p>{section.content}</p>
            </div>
          ))
        )}

        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
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

export default ResumePreview;