export const getTemplateStyles = (template: string) => {
  const baseStyles = {
    container: "max-w-[21cm] mx-auto bg-white text-black p-8 shadow-xl",
    header: "text-center mb-8 border-b pb-6",
    name: "text-3xl font-bold mb-2",
    subtitle: "text-lg text-gray-600 mb-4",
    contact: "flex justify-center items-center gap-6 text-sm text-gray-600",
    contactItem: "flex items-center gap-2 hover:text-cyan-600 transition-colors",
    content: "grid grid-cols-[1fr_2.5fr] gap-6",
    leftColumn: "space-y-6",
    rightColumn: "space-y-6",
    section: "mb-6",
    sectionTitle: "text-lg font-bold uppercase tracking-wider mb-4 pb-1 border-b-2 border-gray-200",
    experienceItem: "mb-6 relative pl-24",
    experienceDate: "absolute left-0 top-0 text-sm text-gray-600 w-20",
    experienceTitle: "font-semibold text-gray-800",
    experienceCompany: "text-gray-700",
    experienceDescription: "mt-2 text-gray-600 whitespace-pre-line",
    skillsList: "flex flex-wrap gap-2",
    skillItem: "bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors",
    educationItem: "mb-4",
    educationDate: "text-sm text-gray-600",
  };

  switch (template) {
    case 'modern':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-['Inter']`,
        sectionTitle: `${baseStyles.sectionTitle} border-cyan-200`,
        skillItem: "bg-cyan-50 px-3 py-1 rounded-full text-sm text-cyan-700 hover:bg-cyan-100 transition-colors",
      };
    case 'classic':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-serif`,
        sectionTitle: `${baseStyles.sectionTitle} border-gray-300`,
      };
    case 'creative':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-['Poppins']`,
        header: `${baseStyles.header} bg-gradient-to-r from-cyan-50 to-blue-50`,
        sectionTitle: `${baseStyles.sectionTitle} border-blue-200`,
        skillItem: "bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700 hover:bg-blue-100 transition-colors",
      };
    default:
      return baseStyles;
  }
};