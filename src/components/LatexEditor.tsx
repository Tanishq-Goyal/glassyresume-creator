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