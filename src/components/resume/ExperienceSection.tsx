import React from "react";
import { Experience } from "@/components/ResumeTypes";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import MonthYearPicker from "./MonthYearPicker";
import InfoTooltip from "@/components/InfoTooltip";

interface ExperienceSectionProps {
  experiences: Experience[];
  onAddExperience: () => void;
  onRemoveExperience: (id: string) => void;
  onUpdateExperience: (id: string, field: keyof Experience, value: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onAddExperience,
  onRemoveExperience,
  onUpdateExperience,
}) => {
  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-primary">Experience</h2>
        <InfoTooltip content="Add your work experience with detailed responsibilities and achievements" />
        <Button
          onClick={onAddExperience}
          className="glass-button ml-auto flex items-center gap-2"
        >
          <Plus size={20} />
          Add Experience
        </Button>
      </div>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="space-y-4 p-4 bg-secondary/20 rounded-lg relative"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => onRemoveExperience(exp.id)}
            >
              <X size={20} />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Job Title"
                className="glass-input"
                value={exp.title}
                onChange={(e) =>
                  onUpdateExperience(exp.id, "title", e.target.value)
                }
              />
              <Input
                type="text"
                placeholder="Company"
                className="glass-input"
                value={exp.company}
                onChange={(e) =>
                  onUpdateExperience(exp.id, "company", e.target.value)
                }
              />
              <MonthYearPicker
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(value) =>
                  onUpdateExperience(exp.id, "startDate", value)
                }
              />
              <MonthYearPicker
                placeholder="End Date"
                value={exp.endDate}
                onChange={(value) =>
                  onUpdateExperience(exp.id, "endDate", value)
                }
              />
            </div>
            <textarea
              placeholder="Description"
              className="glass-input w-full h-24"
              value={exp.description}
              onChange={(e) =>
                onUpdateExperience(exp.id, "description", e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;