export const getDay = (date) =>
  date.toLocaleString("en-US", { day: "2-digit" });
export const getMonth = (date) =>
  date.toLocaleString("en-US", { month: "long" });
export const getYear = (date) => date.getFullYear();
