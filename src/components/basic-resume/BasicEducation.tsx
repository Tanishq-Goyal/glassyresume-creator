import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import { Education } from '@/components/ResumeTypes';
import InfoTooltip from '@/components/InfoTooltip';

interface BasicEducationProps {
  education: Education[];
  setEducation: (education: Education[]) => void;
}

const BasicEducation = ({ education, setEducation }: BasicEducationProps) => {
  const addEducation = () => {
    setEducation([...education, { id: Date.now().toString(), degree: '', school: '', year: '' }]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  return (
    <div className="space-y-4 p-6 bg-white/50 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Education</h3>
          <InfoTooltip content="Start with your most recent education. Include your degree, institution name, and graduation year." />
        </div>
        <Button onClick={addEducation} className="flex items-center gap-2">
          <Plus size={20} />
          Add Education
        </Button>
      </div>

      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="relative p-4 bg-white/50 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => removeEducation(edu.id)}
            >
              <X size={20} />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Degree/Certification"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
              />
              <Input
                placeholder="Institution Name"
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
              />
              <Input
                placeholder="Year of Graduation"
                value={edu.year}
                onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicEducation;