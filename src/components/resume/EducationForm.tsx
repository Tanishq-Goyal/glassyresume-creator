import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Education } from '../ResumeTypes';
import InfoTooltip from '../InfoTooltip';

interface EducationFormProps {
  education: Education[];
  onAddEducation: () => void;
  onRemoveEducation: (id: string) => void;
  onUpdateEducation: (id: string, field: keyof Education, value: string) => void;
}

const EducationForm = ({
  education,
  onAddEducation,
  onRemoveEducation,
  onUpdateEducation,
}: EducationFormProps) => {
  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-primary">Education</h2>
        <InfoTooltip content="Add your educational background" />
        <Button onClick={onAddEducation} className="glass-button ml-auto flex items-center gap-2">
          <Plus size={20} />
          Add Education
        </Button>
      </div>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-4 p-4 bg-secondary/20 rounded-lg relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => onRemoveEducation(edu.id)}
            >
              <X size={20} />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Degree"
                className="glass-input"
                value={edu.degree}
                onChange={(e) => onUpdateEducation(edu.id, 'degree', e.target.value)}
              />
              <Input
                type="text"
                placeholder="School"
                className="glass-input"
                value={edu.school}
                onChange={(e) => onUpdateEducation(edu.id, 'school', e.target.value)}
              />
              <Input
                type="text"
                placeholder="Year"
                className="glass-input"
                value={edu.year}
                onChange={(e) => onUpdateEducation(edu.id, 'year', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationForm;