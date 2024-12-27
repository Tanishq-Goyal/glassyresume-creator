import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import InfoTooltip from '@/components/InfoTooltip';

interface BasicSkillsProps {
  skills: string[];
  setSkills: (skills: string[]) => void;
}

const BasicSkills = ({ skills, setSkills }: BasicSkillsProps) => {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const suggestedSkills = [
    "Microsoft Office",
    "Communication",
    "Team Work",
    "Problem Solving",
    "Time Management",
    "Leadership",
    "Adaptability",
    "Critical Thinking"
  ];

  const addSuggestedSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  return (
    <div className="space-y-4 p-6 bg-white/50 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold">Skills</h3>
        <InfoTooltip content="Add both technical and soft skills that are relevant to the job you're applying for." />
      </div>

      <form onSubmit={addSkill} className="flex gap-2">
        <Input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill..."
          className="flex-1"
        />
        <Button type="submit">Add</Button>
      </form>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Suggested Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills.map((skill) => (
            <Button
              key={skill}
              variant="outline"
              size="sm"
              onClick={() => addSuggestedSkill(skill)}
              className={skills.includes(skill) ? 'opacity-50' : ''}
              disabled={skills.includes(skill)}
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
              className="hover:text-destructive"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicSkills;