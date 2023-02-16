import { useContext } from "react";

import { LanguageContext } from "@/utils/languageContext";

export const useTranslate = () => useContext(LanguageContext);
