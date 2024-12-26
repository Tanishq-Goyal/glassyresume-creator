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
    <div className="max-w-[21cm] mx-auto bg-white text-black p-4 shadow-xl text-[10pt]">
      {/* Header Section with 3 columns */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-[10%]">
          {/* Left logo placeholder */}
          <div className="w-[2cm] h-[2cm] bg-gray-200 rounded"></div>
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
            <span>
              <a href="https://github.com/anonhandle" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </span>
            <span>
              <a href="https://linkedin.com/in/anon-linkedin" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </span>
          </div>
        </div>
        <div className="w-[15%]">
          {/* Right profile picture placeholder */}
          <div className="w-[2.5cm] h-[2.5cm] bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-4">
        <div className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-[10pt] mb-2">
          EDUCATION
        </div>
        <table className="w-full text-[10pt]">
          <thead>
            <tr>
              <th className="w-[5%] text-left font-bold">Year</th>
              <th className="w-[37.5%] text-left font-bold">Degree/Exam</th>
              <th className="w-[40%] text-left font-bold">Institute</th>
              <th className="w-[15%] text-left font-bold">CGPA/Marks</th>
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

      {/* Experience Section */}
      <div className="mb-4">
        <div className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-[10pt] mb-2">
          EXPERIENCE
        </div>
        <div className="space-y-3 text-[10pt]">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <div className="font-bold flex justify-between">
                <span>{exp.title} | {exp.company}</span>
                <span>{exp.startDate} - {exp.endDate}</span>
              </div>
              <ul className="list-disc ml-4 mt-1">
                {exp.description.split('\n').map((point, index) => (
                  <li key={index} className="leading-tight">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-4">
        <div className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-[10pt] mb-2">
          SKILLS AND EXPERTISE
        </div>
        <div className="text-[10pt]">
          <strong>Technical Skills:</strong>{' '}
          {skills.join(', ')}
        </div>
      </div>

      {/* Optional Sections */}
      {optionalSections.map((section, index) => (
        <div key={index} className="mb-4">
          <div className="w-full text-center bg-[rgb(220,230,242)] py-1 font-bold text-[10pt] mb-2">
            {section.type.toUpperCase()}
          </div>
          <div className="text-[10pt] whitespace-pre-line">
            {section.content.split('\n').map((point, idx) => (
              <div key={idx} className="leading-tight">
                {point}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;