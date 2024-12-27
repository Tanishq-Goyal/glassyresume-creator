import React from 'react';
import AwardsSection from './AwardsSection';

interface Award {
  id: string;
  description: string;
}

interface AwardsManagerProps {
  awards: Award[];
  setAwards: React.Dispatch<React.SetStateAction<Award[]>>;
}

const AwardsManager: React.FC<AwardsManagerProps> = ({ awards, setAwards }) => {
  const addAward = () => {
    const newAward = {
      id: Date.now().toString(),
      description: '',
    };
    setAwards([...awards, newAward]);
  };

  const removeAward = (id: string) => {
    setAwards(awards.filter(award => award.id !== id));
  };

  const updateAward = (id: string, description: string) => {
    setAwards(awards.map(award =>
      award.id === id ? { ...award, description } : award
    ));
  };

  return (
    <AwardsSection
      awards={awards}
      onAddAward={addAward}
      onRemoveAward={removeAward}
      onUpdateAward={updateAward}
    />
  );
};

export default AwardsManager;