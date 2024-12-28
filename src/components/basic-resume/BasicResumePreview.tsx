import React from 'react';
import { PersonalInfo, Education, Experience } from '@/components/ResumeTypes';

interface BasicResumePreviewProps {
  personalInfo: PersonalInfo;
  education: Education[];
  experiences: Experience[];
  skills: string[];
  projects: { id: string; title: string; description: string; }[];
}

const BasicResumePreview = ({
  personalInfo,
  education,
  experiences,
  skills,
  projects
}: BasicResumePreviewProps) => {
  const formatDescription = (text: string) => {
    return text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  };

  return (
    <div className="w-[210mm] mx-auto bg-white p-[20mm]" style={{ minHeight: '297mm' }}>
      {/* Header */}
      <div className="text-center mb-6 pb-4 border-b">
        <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName}</h1>
        <div className="text-sm text-gray-600 space-y-1">
          <p>{personalInfo.email} | {personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 pb-1 border-b">Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <strong>{edu.degree}</strong>
                  <span>{edu.year}</span>
                </div>
                <div>{edu.school}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 pb-1 border-b">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <strong>{exp.title} | {exp.company}</strong>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="mt-2 list-disc pl-4 space-y-1">
                  {formatDescription(exp.description).map((point, index) => (
                    <li key={index} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 pb-1 border-b">Projects</h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <strong>{project.title}</strong>
                <ul className="mt-2 list-disc pl-4 space-y-1">
                  {formatDescription(project.description).map((point, index) => (
                    <li key={index} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3 pb-1 border-b">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-2 py-1 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicResumePreview;