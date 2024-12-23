import React from 'react';
import { Button } from './ui/button';

export type Template = {
  id: string;
  name: string;
  description: string;
  preview: string;
};

const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and professional design with a modern touch',
    preview: 'Modern template preview',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional resume layout that never goes out of style',
    preview: 'Classic template preview',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with a unique and creative design',
    preview: 'Creative template preview',
  },
];

interface ResumeTemplatesProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const ResumeTemplates = ({ selectedTemplate, onSelectTemplate }: ResumeTemplatesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`p-4 rounded-lg cursor-pointer transition-all ${
            selectedTemplate === template.id
              ? 'bg-white/20 border-2 border-white/50'
              : 'bg-white/10 hover:bg-white/15'
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
          <p className="text-sm text-white/80 mb-4">{template.description}</p>
          <div className="aspect-[8.5/11] bg-white/5 rounded-lg flex items-center justify-center text-white/50">
            {template.preview}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplates;