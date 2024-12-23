export const getTemplateStyles = (template: string) => {
  const baseStyles = {
    container: "max-w-[21cm] mx-auto bg-white text-black p-8 shadow-xl",
    header: "mb-6",
    name: "text-2xl font-bold mb-2",
    contact: "text-sm space-x-2",
    section: "mb-6",
    sectionTitle: "text-lg font-semibold border-b border-gray-300 mb-3 pb-1",
    experienceItem: "mb-4",
    skillsList: "flex flex-wrap gap-2",
    skillItem: "bg-gray-100 px-3 py-1 rounded-full text-sm",
  };

  switch (template) {
    case 'modern':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-[11px]`,
        name: "text-3xl font-bold mb-3 text-blue-900",
        sectionTitle: "text-lg font-semibold text-blue-800 border-b-2 border-blue-200 mb-3 pb-1",
      };
    case 'classic':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-serif font-[11px]`,
        header: "text-center mb-6",
        sectionTitle: "uppercase tracking-wider text-gray-700 border-b-2 border-gray-300 mb-3 pb-1",
      };
    case 'creative':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-[11px]`,
        header: "bg-blue-50 p-6 -m-8 mb-6",
        name: "text-4xl font-light mb-3",
        sectionTitle: "text-xl font-light text-blue-800 mb-4",
        skillItem: "bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm",
      };
    default:
      return baseStyles;
  }
};