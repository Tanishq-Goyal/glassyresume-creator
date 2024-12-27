import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput from "@/components/resume/PhoneInput";
import { PersonalInfo } from '../ResumeTypes';
import { Button } from '../ui/button';
import { Upload } from 'lucide-react';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onUpdatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
  onUploadLogo: (file: File) => void;
  onUploadProfilePicture: (file: File) => void;
}

const PersonalInfoForm = ({ 
  personalInfo, 
  onUpdatePersonalInfo,
  onUploadLogo,
  onUploadProfilePicture
}: PersonalInfoFormProps) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'profile') => {
    const file = event.target.files?.[0];
    if (file) {
      if (type === 'logo') {
        onUploadLogo(file);
      } else {
        onUploadProfilePicture(file);
      }
    }
  };

  return (
    <div className="space-y-4 p-6 bg-card rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={personalInfo.fullName}
            onChange={(e) => onUpdatePersonalInfo('fullName', e.target.value)}
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
            onChange={(e) => onUpdatePersonalInfo('email', e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <PhoneInput
            value={personalInfo.phone}
            onChange={(value) => onUpdatePersonalInfo('phone', value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="github">GitHub Profile (Optional)</Label>
          <Input
            id="github"
            value={personalInfo.github || ''}
            onChange={(e) => onUpdatePersonalInfo('github', e.target.value)}
            placeholder="github.com/username"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
          <Input
            id="linkedin"
            value={personalInfo.linkedin || ''}
            onChange={(e) => onUpdatePersonalInfo('linkedin', e.target.value)}
            placeholder="linkedin.com/in/username"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-2">
          <Label>Institute Logo (Optional)</Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'logo')}
              className="hidden"
              id="logo-upload"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById('logo-upload')?.click()}
              className="w-full"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Logo
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Profile Picture (Optional)</Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'profile')}
              className="hidden"
              id="profile-upload"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById('profile-upload')?.click()}
              className="w-full"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Picture
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;