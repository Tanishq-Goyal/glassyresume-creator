import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';

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
      <header className="text-center mb-6">
        <h1 className="text-lg font-bold mb-1">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-sm mb-2">Chemical Engineering (B.Tech)</p>
        <div className="flex justify-center items-center gap-4 text-sm">
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <span className="text-gray-600">📞</span>
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <span className="text-gray-600">📧</span>
              {personalInfo.email}
            </span>
          )}
          <span className="flex items-center gap-1">
            <span className="text-gray-600">🔗</span>
            GitHub
          </span>
          <span className="flex items-center gap-1">
            <span className="text-gray-600">🔗</span>
            LinkedIn
          </span>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-sm mb-3">
          EDUCATION
        </h2>
        <div className="text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="w-[15%] font-bold">Year</th>
                <th className="w-[35%] font-bold">Degree/Exam</th>
                <th className="w-[35%] font-bold">Institute</th>
                <th className="w-[15%] font-bold">CGPA/Marks</th>
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
      </section>

      {/* Experience Section */}
      <section className="mb-6">
        <h2 className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-sm mb-3">
          EXPERIENCE
        </h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="text-sm">
              <div className="font-bold flex justify-between">
                <span>{exp.title} | {exp.company}</span>
                <span>{exp.startDate} - {exp.endDate}</span>
              </div>
              <ul className="list-disc ml-4 mt-1 text-sm">
                {exp.description.split('\n').map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-sm mb-3">
          SKILLS AND EXPERTISE
        </h2>
        <div className="text-sm">
          <strong>Technical Skills:</strong>{' '}
          {skills.join(', ')}
        </div>
      </section>

      {/* Optional Sections */}
      {optionalSections.map((section, index) => (
        <section key={index} className="mb-6">
          <h2 className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-sm mb-3">
            {section.type.toUpperCase()}
          </h2>
          <div className="text-sm whitespace-pre-line">
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ResumePreview;