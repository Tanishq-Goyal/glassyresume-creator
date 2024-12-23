import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import InfoTooltip from './InfoTooltip';

interface OptionalSectionsProps {
  onAddSection: (sectionType: string) => void;
}

const OptionalSections = ({ onAddSection }: OptionalSectionsProps) => {
  const sections = [
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
      id: 'custom',
      name: 'Custom Section',
      tooltip: 'Add any additional section that fits your needs'
    }
  ];

  return (
    <div className="glass-panel p-6 resume-section">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-white">Optional Sections</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map((section) => (
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
    </div>
  );
};

export default OptionalSections;