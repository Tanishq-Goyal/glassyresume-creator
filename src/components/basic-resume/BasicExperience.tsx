import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { Experience } from '@/components/ResumeTypes';
import InfoTooltip from '@/components/InfoTooltip';

interface BasicExperienceProps {
  experiences: Experience[];
  setExperiences: (experiences: Experience[]) => void;
}

const BasicExperience = ({ experiences, setExperiences }: BasicExperienceProps) => {
  const addExperience = () => {
    setExperiences([...experiences, {
      id: Date.now().toString(),
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    }]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <div className="space-y-4 p-6 bg-white/50 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Experience</h3>
          <InfoTooltip content="Include internships, part-time jobs, or any relevant work experience. Focus on your achievements and responsibilities." />
        </div>
        <Button onClick={addExperience} className="flex items-center gap-2">
          <Plus size={20} />
          Add Experience
        </Button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative p-4 bg-white/50 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => removeExperience(exp.id)}
            >
              <X size={20} />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Job Title"
                value={exp.title}
                onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
              />
              <Input
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
              />
              <Input
                placeholder="Start Date (MM/YYYY)"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
              />
              <Input
                placeholder="End Date (MM/YYYY or Present)"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
              />
            </div>
            <Textarea
              className="mt-4"
              placeholder="Describe your responsibilities and achievements..."
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicExperience;