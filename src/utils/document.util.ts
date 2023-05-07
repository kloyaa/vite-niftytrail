export const setDocumentTitle = (title: string) => {
  document.title = `${import.meta.env.VITE_APP_TITLE} | ${title}`;
};
