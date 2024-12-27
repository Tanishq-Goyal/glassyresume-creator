import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import InfoTooltip from '../InfoTooltip';

interface SkillsFormProps {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
}

const SkillsForm = ({
  skills,
  onAddSkill,
  onRemoveSkill,
}: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      onAddSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-primary">Skills</h2>
        <InfoTooltip content="Add your technical and soft skills" />
      </div>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Add a skill (press Enter)"
          className="glass-input w-full"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full"
            >
              <span className="text-primary">{skill}</span>
              <button
                onClick={() => onRemoveSkill(skill)}
                className="text-destructive hover:text-destructive/80"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;