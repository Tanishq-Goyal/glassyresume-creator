import React from 'react';
import { Plus, X } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import InfoTooltip from './InfoTooltip';

interface OptionalSectionsProps {
  onAddSection: (sectionType: string) => void;
  sections: {
    id: string;
    type: string;
    title?: string;
    content: string;
  }[];
  onRemoveSection: (id: string) => void;
  onUpdateSection: (id: string, field: 'content' | 'title', value: string) => void;
}

const OptionalSections = ({ 
  onAddSection, 
  sections, 
  onRemoveSection, 
  onUpdateSection 
}: OptionalSectionsProps) => {
  const sectionTypes = [
    {
      id: 'hobbies',
      name: 'Hobbies',
      tooltip: 'Add your interests and hobbies that showcase your personality'
    },
    {
      id: 'languages',
      name: 'Languages',
      tooltip: 'List languages you know and your proficiency level'
    },
    {
      id: 'certifications',
      name: 'Certifications',
      tooltip: 'Add your professional certifications and achievements'
    },
    {
      id: 'publications',
      name: 'Publications',
      tooltip: 'List your published works and research papers'
    },
    {
      id: 'awards',
      name: 'Awards',
      tooltip: 'Showcase your awards and recognition'
    },
    {
      id: 'volunteer',
      name: 'Volunteer Work',
      tooltip: 'Add your volunteer experience and community service'
    },
    {
      id: 'projects',
      name: 'Projects',
      tooltip: 'Highlight your key projects and their outcomes'
    },
    {
      id: 'custom',
      name: 'Custom Section',
      tooltip: 'Add any additional section that fits your needs'
    }
  ];

  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-primary">Optional Sections</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {sectionTypes.map((section) => (
          <Button
            key={section.id}
            onClick={() => onAddSection(section.id)}
            className="glass-button flex items-center gap-2 justify-center"
          >
            <Plus size={20} />
            <span>{section.name}</span>
            <InfoTooltip content={section.tooltip} />
          </Button>
        ))}
      </div>
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="relative p-4 bg-secondary/20 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => onRemoveSection(section.id)}
            >
              <X size={20} />
            </Button>
            {section.type === 'custom' && (
              <Input
                value={section.title || 'Custom Section'}
                onChange={(e) => onUpdateSection(section.id, 'title', e.target.value)}
                className="glass-input mb-2 font-semibold"
                placeholder="Section Title"
              />
            )}
            <h3 className="text-lg font-semibold text-primary mb-2 capitalize">
              {section.type === 'custom' ? (section.title || 'Custom Section') : section.type}
            </h3>
            <Textarea
              value={section.content}
              onChange={(e) => onUpdateSection(section.id, 'content', e.target.value)}
              placeholder={`Enter your ${section.type.toLowerCase()} details (use new lines for bullet points)...`}
              className="glass-input mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionalSections;
