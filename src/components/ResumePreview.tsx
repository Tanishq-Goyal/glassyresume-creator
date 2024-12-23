import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import { getTemplateStyles } from './resume/ResumeStyles';

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
  const styles = getTemplateStyles(template);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName}</h1>
        <div className={styles.contact}>
          <span>{personalInfo.email}</span> •
          <span>{personalInfo.phone}</span> •
          <span>{personalInfo.location}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.experienceItem}>
            <h3 className="font-semibold">{exp.company}</h3>
            <div className="text-gray-600">{exp.title}</div>
            <div className="text-gray-500 text-sm">
              {exp.startDate} - {exp.endDate}
            </div>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className={styles.experienceItem}>
            <h3 className="font-semibold">{edu.school}</h3>
            <div className="text-gray-600">{edu.degree}</div>
            <div className="text-gray-500 text-sm">{edu.year}</div>
          </div>
        ))}
      </div>

      {optionalSections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.type}</h2>
          <p>{section.content}</p>
        </div>
      ))}

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skillItem}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;