import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';

interface ResumePreviewProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  template: string;
  optionalSections: any[];
  sectionOrder: string[];
}

const ResumePreview = ({ 
  personalInfo, 
  experiences, 
  education, 
  skills,
  template,
  optionalSections,
  sectionOrder
}: ResumePreviewProps) => {
  const formatDescription = (text: string) => {
    return text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  };

  const renderSection = (sectionId: string) => {
    switch(sectionId) {
      case 'education':
        return (
          <div className="mb-4">
            <div className="resume-section-header">
              EDUCATION
            </div>
            <table className="resume-table">
              <thead>
                <tr>
                  <th className="w-[5%] text-left">Year</th>
                  <th className="w-[37.5%] text-left">Degree/Exam</th>
                  <th className="w-[40%] text-left">Institute</th>
                  <th className="w-[15%] text-left">CGPA/Marks</th>
                </tr>
              </thead>
              <tbody>
                {education.map((edu) => (
                  <tr key={edu.id}>
                    <td>{edu.year}</td>
                    <td>{edu.degree}</td>
                    <td>{edu.school}</td>
                    <td>8.5/10</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'experience':
        return (
          <div className="mb-4">
            <div className="resume-section-header">
              EXPERIENCE
            </div>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="font-bold flex justify-between">
                    <span>{exp.title} | {exp.company}</span>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1">
                    {formatDescription(exp.description).map((point, index) => (
                      <li key={index} className="text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="mb-4">
            <div className="resume-section-header">
              SKILLS AND EXPERTISE
            </div>
            <div className="resume-text">
              <strong>Technical Skills:</strong>{' '}
              {skills.join(', ')}
            </div>
          </div>
        );
      default:
        const section = optionalSections.find(s => s.type === sectionId);
        if (section) {
          return (
            <div className="mb-4">
              <div className="resume-section-header">
                {section.type.toUpperCase()}
              </div>
              <ul className="list-disc pl-4 space-y-1">
                {formatDescription(section.content).map((point: string, idx: number) => (
                  <li key={idx} className="text-sm leading-tight">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
    }
  };

  return (
    <div className="max-w-[21cm] mx-auto bg-white text-black p-4 shadow-xl text-[10pt]">
      {/* Header Section with 3 columns */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-[10%]">
          {personalInfo.logoUrl ? (
            <img 
              src={personalInfo.logoUrl} 
              alt="Institute Logo" 
              className="w-[2cm] h-[2cm] object-contain"
            />
          ) : (
            <div className="w-[2cm] h-[2cm] bg-gray-200 rounded"></div>
          )}
        </div>
        <div className="w-[70%] text-center">
          <h1 className="text-[10pt] font-bold mb-1">
            {personalInfo.fullName || 'ANON ANON ANON'} | 21AB00000
          </h1>
          <p className="text-[8pt] font-bold mb-0.5">
            ANON ANON (M.Tech Dual 5Y)
          </p>
          <p className="text-[8pt] font-bold mb-2">
            MICRO SPL. in ANON INTELLIGENCE AND APPLICATIONS
          </p>
          <div className="flex justify-center items-center gap-4 text-[8pt]">
            <span>📞 {personalInfo.phone || '+91 1234567890'}</span>
            <span>📧 {personalInfo.email || 'anonemail@example.com'}</span>
            {personalInfo.github && (
              <a href={personalInfo.github} className="text-blue-600 hover:underline">
                GitHub
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="w-[15%]">
          {personalInfo.profilePictureUrl ? (
            <img 
              src={personalInfo.profilePictureUrl} 
              alt="Profile" 
              className="w-[2.5cm] h-[2.5cm] object-cover rounded-full"
            />
          ) : (
            <div className="w-[2.5cm] h-[2.5cm] bg-gray-200 rounded-full"></div>
          )}
        </div>
      </div>

      {/* Render sections in the order specified by sectionOrder */}
      {sectionOrder.map((sectionId) => renderSection(sectionId))}
    </div>
  );
};

export default ResumePreview;