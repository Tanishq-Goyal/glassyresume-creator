import React, { useState } from 'react';
import { PersonalInfo, Experience, Education } from './ResumeTypes';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { RefreshCw } from 'lucide-react';
import { useToast } from './ui/use-toast';

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
  const { toast } = useToast();
  const [latexCode, setLatexCode] = useState<string>(() => generateLatex());

  function generateLatex() {
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

\\begin{center}
\\textbf{\\Large ${personalInfo.fullName}}\\\\
${personalInfo.email} • ${personalInfo.phone} • ${personalInfo.location}
\\end{center}

${experiences.length > 0 ? `\\customsection{Experience}
${experiences
  .map(
    (exp) => `\\textbf{${exp.company}} \\hfill ${exp.startDate} - ${exp.endDate}\\\\
\\textit{${exp.title}}\\\\
${exp.description}

`
  )
  .join('\n')}` : ''}

${education.length > 0 ? `\\customsection{Education}
${education
  .map(
    (edu) => `\\textbf{${edu.school}} \\hfill ${edu.year}\\\\
${edu.degree}

`
  )
  .join('\n')}` : ''}

${skills.length > 0 ? `\\customsection{Skills}
${skills.join(', ')}` : ''}

\\end{document}`;

    return latex;
  }

  const handleRecompile = () => {
    try {
      onRecompile(latexCode);
      toast({
        title: "Success",
        description: "Resume updated successfully from LaTeX code",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update resume from LaTeX code",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="glass-panel p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-primary">LaTeX Code</h2>
        <Button 
          onClick={handleRecompile}
          className="flex items-center gap-2"
        >
          <RefreshCw size={20} />
          Recompile
        </Button>
      </div>
      <Textarea
        value={latexCode}
        onChange={(e) => setLatexCode(e.target.value)}
        className="font-mono text-sm h-[400px] bg-secondary/50"
      />
    </div>
  );
};

export default LatexEditor;