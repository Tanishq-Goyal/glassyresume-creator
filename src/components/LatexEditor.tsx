import React, { useState, useEffect } from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

interface LatexEditorProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  template: string;
  onRecompile: (latexCode: string) => void;
}

const LatexEditor = ({ 
  personalInfo, 
  experiences, 
  education, 
  skills, 
  template,
  onRecompile 
}: LatexEditorProps) => {
  const [latexCode, setLatexCode] = useState<string>('');

  useEffect(() => {
    const generatedLatex = generateLatex();
    setLatexCode(generatedLatex);
    onRecompile(generatedLatex);
  }, [personalInfo, experiences, education, skills, template]);

  function generateLatex() {
    const experienceSection = experiences.map(exp => `
\\textbf{${exp.company}} \\hfill ${exp.startDate} - ${exp.endDate}\\\\
\\textit{${exp.title}}\\\\
${exp.description.split('\n').join('\\\\')}
    `).join('\n\n');

    const educationSection = education.map(edu => `
\\textbf{${edu.school}} \\hfill ${edu.year}\\\\
${edu.degree}
    `).join('\n\n');

    const latex = `\\documentclass[10pt,a4paper]{article}

\\usepackage[top=0.5in, bottom=0.5in, left=0.5in, right=0.5in]{geometry}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{hyperref}
\\usepackage{fontawesome5}
\\usepackage{xcolor}
\\usepackage{array}
\\usepackage{tabularx}
\\usepackage{graphicx}
\\usepackage{wrapfig}
\\usepackage{helvet}
\\renewcommand{\\familydefault}{\\sfdefault}

\\definecolor{sectionblue}{RGB}{220,230,242}
\\definecolor{linkblue}{RGB}{0,0,255}

\\hypersetup{
    colorlinks=true,
    linkcolor=linkblue,
    urlcolor=linkblue
}

\\titleformat{\\section}{\\Large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{12pt}{8pt}

\\begin{document}

\\begin{center}
\\textbf{\\Large ${personalInfo.fullName || '[Full Name]'}}\\\\[4pt]
${personalInfo.email || '[Email]'} • ${personalInfo.phone || '[Phone]'} • ${personalInfo.location || '[Location]'}
\\end{center}

${experiences.length > 0 ? `\\section*{Experience}
${experienceSection}` : ''}

${education.length > 0 ? `\\section*{Education}
${educationSection}` : ''}

${skills.length > 0 ? `\\section*{Skills}
${skills.join(', ')}` : ''}

\\end{document}`;

    return latex;
  }

  const handleRecompile = () => {
    try {
      onRecompile(latexCode);
      document.getElementById('resume-preview')?.classList.add('animate-pulse');
      setTimeout(() => {
        document.getElementById('resume-preview')?.classList.remove('animate-pulse');
      }, 1000);
      toast.success("Resume updated successfully");
    } catch (error) {
      toast.error("Failed to update resume");
    }
  };

  return (
    <div className="glass-panel p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-100">LaTeX Code</h2>
        <Button 
          onClick={handleRecompile}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <RefreshCw size={20} />
          Recompile
        </Button>
      </div>
      <Textarea
        value={latexCode}
        onChange={(e) => setLatexCode(e.target.value)}
        className="font-mono text-sm h-[400px] bg-blue-950/50 text-blue-100"
      />
    </div>
  );
};

export default LatexEditor;