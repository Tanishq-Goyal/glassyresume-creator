export const getTemplateStyles = (template: string) => {
  const baseStyles = {
    container: "max-w-[21cm] mx-auto bg-white text-black p-8 shadow-xl",
    header: "mb-6",
    name: "text-2xl font-bold mb-2 text-black",
    contact: "text-sm space-x-2 text-black",
    section: "mb-6",
    sectionTitle: "text-lg font-semibold border-b border-gray-300 mb-3 pb-1 text-black",
    experienceItem: "mb-4 text-black",
    skillsList: "flex flex-wrap gap-2",
    skillItem: "bg-gray-100 px-3 py-1 rounded-full text-sm text-black",
    educationItem: "mb-4 text-black",
    certificationItem: "mb-4 text-black",
  };

  switch (template) {
    case 'modern':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-[11px]`,
        name: "text-3xl font-bold mb-3 text-black",
        sectionTitle: "text-lg font-semibold text-black border-b-2 border-gray-200 mb-3 pb-1",
      };
    case 'classic':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-serif font-[11px]`,
        header: "text-center mb-6",
        sectionTitle: "uppercase tracking-wider text-black border-b-2 border-gray-300 mb-3 pb-1",
      };
    case 'creative':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-[11px]`,
        header: "bg-gray-50 p-6 -m-8 mb-6",
        name: "text-4xl font-light mb-3 text-black",
        sectionTitle: "text-xl font-light text-black mb-4",
        skillItem: "bg-gray-50 text-black px-3 py-1 rounded-full text-sm",
      };
    default:
      return baseStyles;
  }
};