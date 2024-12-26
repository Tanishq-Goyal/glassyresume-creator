import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import { getTemplateStyles } from './resume/ResumeStyles';
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
  const styles = getTemplateStyles(template);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.name}>{personalInfo.fullName}</h1>
        <p className={styles.subtitle}>Chemical Engineering (B.Tech)</p>
        <div className={styles.contact}>
          <a href={`tel:${personalInfo.phone}`} className={styles.contactItem}>
            <Phone size={16} />
            {personalInfo.phone}
          </a>
          <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
            <Mail size={16} />
            {personalInfo.email}
          </a>
          <a href="#" className={styles.contactItem}>
            <Github size={16} />
            GitHub
          </a>
          <a href="#" className={styles.contactItem}>
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
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

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className={styles.educationItem}>
                <div className={styles.educationDate}>{edu.year}</div>
                <h3 className={styles.experienceTitle}>{edu.degree}</h3>
                <div className={styles.experienceCompany}>{edu.school}</div>
              </div>
            ))}
          </div>

          {optionalSections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.type}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.experienceItem}>
                <div className={styles.experienceDate}>
                  {exp.startDate} - {exp.endDate}
                </div>
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <div className={styles.experienceCompany}>{exp.company}</div>
                <p className={styles.experienceDescription}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;