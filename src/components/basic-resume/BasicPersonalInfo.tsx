import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PersonalInfo } from '@/components/ResumeTypes';
import InfoTooltip from '@/components/InfoTooltip';

interface BasicPersonalInfoProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: (info: PersonalInfo) => void;
}

const BasicPersonalInfo = ({ personalInfo, setPersonalInfo }: BasicPersonalInfoProps) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setPersonalInfo({ ...personalInfo, [field]: value });
  };

  return (
    <div className="space-y-4 p-6 bg-white/50 rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <InfoTooltip content="Fill in your basic contact information. Make sure to use a professional email address." />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={personalInfo.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            value={personalInfo.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="City, State"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BasicPersonalInfo;