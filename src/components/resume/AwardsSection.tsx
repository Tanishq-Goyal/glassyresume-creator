import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Award {
  id: string;
  description: string;
}

interface AwardsSectionProps {
  awards: Award[];
  onAddAward: () => void;
  onRemoveAward: (id: string) => void;
  onUpdateAward: (id: string, description: string) => void;
}

const AwardsSection = ({
  awards,
  onAddAward,
  onRemoveAward,
  onUpdateAward,
}: AwardsSectionProps) => {
  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-primary">Awards & Achievements</h2>
        <Button onClick={onAddAward} className="glass-button ml-auto flex items-center gap-2">
          <Plus size={20} />
          Add Award
        </Button>
      </div>
      <div className="space-y-6">
        {awards.map((award) => (
          <div key={award.id} className="space-y-4 p-4 bg-secondary/20 rounded-lg relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => onRemoveAward(award.id)}
            >
              <X size={20} />
            </Button>
            <Textarea
              placeholder="Award description"
              className="glass-input w-full h-24"
              value={award.description}
              onChange={(e) => onUpdateAward(award.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;