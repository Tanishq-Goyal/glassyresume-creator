export const getTemplateStyles = (template: string) => {
  const baseStyles = {
    container: "max-w-[21cm] mx-auto bg-white text-black p-8 shadow-xl",
    header: "text-center mb-8",
    name: "text-3xl font-bold mb-2 text-gray-900",
    subtitle: "text-xl text-gray-700 mb-4",
    contact: "flex justify-center items-center gap-6 text-sm text-gray-600",
    contactItem: "flex items-center gap-2 hover:text-cyan-600 transition-colors",
    section: "mb-6",
    sectionTitle: "text-lg font-bold uppercase tracking-wider border-b-2 border-gray-200 mb-4 pb-1 text-gray-800",
    content: "grid grid-cols-[1fr_2.5fr] gap-6",
    leftColumn: "space-y-6",
    rightColumn: "space-y-6",
    experienceItem: "mb-6 relative pl-24",
    experienceDate: "absolute left-0 top-0 text-sm text-gray-600 w-20",
    experienceTitle: "font-semibold text-gray-800",
    experienceCompany: "text-gray-700",
    experienceDescription: "mt-2 text-gray-600",
    skillsList: "flex flex-wrap gap-2",
    skillItem: "bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors",
    educationItem: "mb-4 relative pl-24",
    educationDate: "absolute left-0 top-0 text-sm text-gray-600 w-20",
    certificationItem: "mb-4",
    divider: "border-t border-gray-200 my-6",
  };

  switch (template) {
    case 'modern':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-['Inter']`,
        name: "text-4xl font-bold mb-2 text-gray-900",
        sectionTitle: "text-lg font-bold uppercase tracking-wider border-b-2 border-cyan-200 mb-4 pb-1 text-gray-800",
        skillItem: "bg-cyan-50 px-3 py-1 rounded-full text-sm text-cyan-700 hover:bg-cyan-100 transition-colors",
      };
    case 'classic':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-serif`,
        sectionTitle: "text-xl font-bold uppercase tracking-wider border-b-2 border-gray-300 mb-4 pb-1 text-gray-900",
      };
    case 'creative':
      return {
        ...baseStyles,
        container: `${baseStyles.container} font-['Poppins']`,
        header: "bg-gradient-to-r from-cyan-50 to-blue-50 p-8 -m-8 mb-8",
        name: "text-5xl font-light mb-2 text-gray-900",
        sectionTitle: "text-xl font-light uppercase tracking-wider border-b-2 border-blue-200 mb-4 pb-1 text-gray-800",
        skillItem: "bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700 hover:bg-blue-100 transition-colors",
      };
    default:
      return baseStyles;
  }
};