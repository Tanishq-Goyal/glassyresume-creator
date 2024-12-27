import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Publication {
  id: string;
  title: string;
  conference: string;
  location: string;
  date: string;
  description: string;
}

interface PublicationsSectionProps {
  publications: Publication[];
  onAddPublication: () => void;
  onRemovePublication: (id: string) => void;
  onUpdatePublication: (id: string, field: keyof Publication, value: string) => void;
}

const PublicationsSection = ({
  publications,
  onAddPublication,
  onRemovePublication,
  onUpdatePublication,
}: PublicationsSectionProps) => {
  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-primary">Publications</h2>
        <Button onClick={onAddPublication} className="glass-button ml-auto flex items-center gap-2">
          <Plus size={20} />
          Add Publication
        </Button>
      </div>
      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.id} className="space-y-4 p-4 bg-secondary/20 rounded-lg relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => onRemovePublication(pub.id)}
            >
              <X size={20} />
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Title"
                className="glass-input"
                value={pub.title}
                onChange={(e) => onUpdatePublication(pub.id, "title", e.target.value)}
              />
              <Input
                type="text"
                placeholder="Conference/Journal"
                className="glass-input"
                value={pub.conference}
                onChange={(e) => onUpdatePublication(pub.id, "conference", e.target.value)}
              />
              <Input
                type="text"
                placeholder="Location"
                className="glass-input"
                value={pub.location}
                onChange={(e) => onUpdatePublication(pub.id, "location", e.target.value)}
              />
              <Input
                type="text"
                placeholder="Date"
                className="glass-input"
                value={pub.date}
                onChange={(e) => onUpdatePublication(pub.id, "date", e.target.value)}
              />
            </div>
            <Textarea
              placeholder="Description (use bullet points with * at start of line)"
              className="glass-input w-full h-24"
              value={pub.description}
              onChange={(e) => onUpdatePublication(pub.id, "description", e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;