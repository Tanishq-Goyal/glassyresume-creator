import React from 'react';
import { Info } from 'lucide-react';
import InfoTooltip from '../InfoTooltip';

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
}

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

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector = ({ selectedTemplate, onSelectTemplate }: TemplateSelectorProps) => {
  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold text-blue-100">Choose Template</h2>
        <InfoTooltip content="Select a template that best suits your professional style" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? 'bg-blue-800/50 border-2 border-blue-400'
                : 'bg-blue-900/30 hover:bg-blue-800/40'
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <h3 className="text-lg font-semibold text-blue-100 mb-2">{template.name}</h3>
            <p className="text-sm text-blue-200/80 mb-4">{template.description}</p>
            <div className="aspect-[8.5/11] bg-blue-950/50 rounded-lg flex items-center justify-center text-blue-300/50">
              {template.preview}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;