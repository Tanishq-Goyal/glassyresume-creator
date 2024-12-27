import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import InfoTooltip from '@/components/InfoTooltip';

interface Project {
  id: string;
  title: string;
  description: string;
}

interface BasicProjectsProps {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}

const BasicProjects = ({ projects, setProjects }: BasicProjectsProps) => {
  const addProject = () => {
    setProjects([...projects, { id: Date.now().toString(), title: '', description: '' }]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  return (
    <div className="space-y-4 p-6 bg-white/50 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Projects</h3>
          <InfoTooltip content="Add academic or personal projects that showcase your skills and interests." />
        </div>
        <Button onClick={addProject} className="flex items-center gap-2">
          <Plus size={20} />
          Add Project
        </Button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="relative p-4 bg-white/50 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive hover:text-destructive/80"
              onClick={() => removeProject(project.id)}
            >
              <X size={20} />
            </Button>

            <div className="space-y-4">
              <Input
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => updateProject(project.id, 'title', e.target.value)}
              />
              <Textarea
                placeholder="Describe your project, its goals, and your role..."
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicProjects;