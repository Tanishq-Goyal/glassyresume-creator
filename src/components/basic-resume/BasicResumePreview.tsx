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
  return (
    <div className="w-full max-w-[21cm] mx-auto bg-white shadow-lg p-8 min-h-[29.7cm]">
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
                  <strong>{exp.title}</strong>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="text-gray-700">{exp.company}</div>
                <p className="mt-1 text-sm whitespace-pre-line">{exp.description}</p>
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
                <p className="mt-1 text-sm">{project.description}</p>
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