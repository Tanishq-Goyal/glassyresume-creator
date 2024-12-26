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
\\noindent\\textbf{${exp.title} | ${exp.company} \\hfill ${exp.startDate} - ${exp.endDate}}
\\begin{itemize}
${exp.description.split('\n').map(point => `\\item ${point}`).join('\n')}
\\end{itemize}
    `).join('\n\n');

    const educationSection = education.map(edu => `${edu.year} & ${edu.degree} & ${edu.school} & 8.5/10\\\\`).join('\n');

    const latex = `\\documentclass[10pt,a4paper]{article}

% Required packages
\\usepackage[top=0.15in, bottom=0.15in, left=0.15in, right=0.15in]{geometry}
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

% Define colors
\\definecolor{sectionblue}{RGB}{220,230,242}
\\definecolor{linkblue}{RGB}{0,0,255}

% Configure hyperlinks
\\hypersetup{
    colorlinks=true,
    linkcolor=linkblue,
    urlcolor=linkblue
}

% Custom section style
\\newcommand{\\customsection}[1]{%
    \\vspace{0.3em}
    \\noindent\\colorbox{sectionblue}{\\parbox{\\dimexpr\\textwidth-2\\fboxsep}{
        \\vspace{0.1em}\\centering\\textbf{\\fontsize{10}{12}\\selectfont #1}\\vspace{0.1em}
    }}
    \\vspace{0.3em}
}

% Remove section numbering
\\renewcommand{\\thesection}{}

% Custom bullet style
\\renewcommand{\\labelitemi}{$\\bullet$}

% Adjust itemize spacing and remove indentation
\\setlist[itemize]{topsep=0pt,itemsep=0.1em,partopsep=0pt,parsep=0pt,leftmargin=*}
\\setlength{\\parindent}{0pt}

\\begin{document}

\\begin{minipage}{0.1\\textwidth}
    % Logo placeholder
\\end{minipage}
\\hfill
\\begin{minipage}{0.7\\textwidth}
    \\begin{center}
    \\textbf{\\fontsize{10}{14}\\selectfont ${personalInfo.fullName || 'ANON ANON ANON'} | 21AB00000}\\\\
    \\vspace{0.2em}
    \\textbf{\\fontsize{8}{12}\\selectfont ANON ANON (M.Tech Dual 5Y)}\\\\
    \\textbf{\\fontsize{8}{12}\\selectfont MICRO SPL. in ANON INTELLIGENCE AND APPLICATIONS}\\\\
    \\vspace{0.4em}
    {\\small \\faPhone\\ ${personalInfo.phone || '+91 1234567890'} \\hspace{0.5em} \\faEnvelope\\ ${personalInfo.email || 'anonemail@example.com'} \\hspace{0.5em} \\faGithub\\ \\href{https://github.com/anonhandle}{anonhandle} \\hspace{0.5em} \\faLinkedin\\ \\href{https://linkedin.com/in/anon-linkedin}{anon-linkedin}}
    \\end{center}
\\end{minipage}
\\hfill
\\begin{minipage}{0.15\\textwidth}
    % Profile picture placeholder
\\end{minipage}

% Education Section
\\customsection{EDUCATION}
{\\small
\\begin{tabular}{p{0.05\\textwidth}p{0.375\\textwidth}p{0.4\\textwidth}p{0.15\\textwidth}}
\\textbf{Year} & \\textbf{Degree/Exam} & \\textbf{Institute} & \\textbf{CGPA/Marks}\\\\
${educationSection}
\\end{tabular}
}

% Experience Section
\\customsection{EXPERIENCE}
{\\small
${experienceSection}
}

% Skills Section
\\customsection{SKILLS AND EXPERTISE}
{\\small
\\noindent\\textbf{Technical Skills:} ${skills.join(', ')}
}

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