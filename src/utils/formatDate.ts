export const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getUTCDate()}/${(d.getUTCMonth() + 1) % 12}`;
};
