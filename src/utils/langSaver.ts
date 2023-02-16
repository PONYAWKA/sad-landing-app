import { Languages } from "@/interfaces/language";

export const getLocalLang = (): Languages => {
  return (localStorage.getItem("lang") as Languages) ?? "ru";
};
export const setLocalLang = (lang: Languages) => {
  return localStorage.setItem("lang", lang);
};
