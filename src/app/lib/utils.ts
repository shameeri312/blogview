export const formatDateToLocal = (dateStr?: string) => {
  // Use the current date if dateStr is not provided
  const date = dateStr ? new Date(dateStr) : new Date();

  // Return the date in YYYY-MM-DD format
  return date.toISOString().split("T")[0];
};
