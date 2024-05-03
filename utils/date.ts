export const formatDate = (day: number) => {
  const today = new Date();
  today.setDate(today.getDate() + day);
  const offset = today.getTimezoneOffset();
  const date = new Date(today.getTime() - offset * 60 * 1000);
  return date.toISOString().split('T')[0];
};
