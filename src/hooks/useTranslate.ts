import { useTranslation } from "react-i18next";

import { Languages } from "@/interfaces/language";

export const useTranslate = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  return { value: language as Languages, setLanguage: changeLanguage };
};
