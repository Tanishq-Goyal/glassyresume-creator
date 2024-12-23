import React from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';

interface LatexEditorProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  template: string;
}

const LatexEditor = ({ personalInfo, experiences, education, skills, template }: LatexEditorProps) => {
  const generateLatex = () => {
    const latex = `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}

\\begin{document}

\\section*{${personalInfo.fullName}}
${personalInfo.email} • ${personalInfo.phone} • ${personalInfo.location}

\\section*{Experience}
${experiences
  .map(
    (exp) => `\\subsection*{${exp.company}}
${exp.title} (${exp.startDate} - ${exp.endDate})
${exp.description}
`
  )
  .join('\n')}

\\section*{Education}
${education
  .map(
    (edu) => `\\subsection*{${edu.school}}
${edu.degree} (${edu.year})
`
  )
  .join('\n')}

\\section*{Skills}
${skills.join(', ')}

\\end{document}`;

    return latex;
  };

  return (
    <div className="glass-panel p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">LaTeX Code</h2>
      <pre className="bg-white/10 p-4 rounded-lg overflow-x-auto text-white/90 text-sm font-mono">
        {generateLatex()}
      </pre>
    </div>
  );
};

export default LatexEditor;