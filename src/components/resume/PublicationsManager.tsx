import React from 'react';
import PublicationsSection from './PublicationsSection';

interface Publication {
  id: string;
  title: string;
  conference: string;
  location: string;
  date: string;
  description: string;
}

interface PublicationsManagerProps {
  publications: Publication[];
  setPublications: React.Dispatch<React.SetStateAction<Publication[]>>;
}

const PublicationsManager: React.FC<PublicationsManagerProps> = ({ publications, setPublications }) => {
  const addPublication = () => {
    const newPublication = {
      id: Date.now().toString(),
      title: '',
      conference: '',
      location: '',
      date: '',
      description: '',
    };
    setPublications([...publications, newPublication]);
  };

  const removePublication = (id: string) => {
    setPublications(publications.filter(pub => pub.id !== id));
  };

  const updatePublication = (id: string, field: keyof Publication, value: string) => {
    setPublications(publications.map(pub =>
      pub.id === id ? { ...pub, [field]: value } : pub
    ));
  };

  return (
    <PublicationsSection
      publications={publications}
      onAddPublication={addPublication}
      onRemovePublication={removePublication}
      onUpdatePublication={updatePublication}
    />
  );
};

export default PublicationsManager;