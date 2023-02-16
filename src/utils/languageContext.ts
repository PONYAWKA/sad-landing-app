import { createContext, Dispatch, SetStateAction } from "react";

import { Languages } from "@/interfaces/language";

export const LanguageContext = createContext<ILanguageContext>({ value: "en" });

interface ILanguageContext {
  value: Languages;
  setLanguage?: Dispatch<SetStateAction<Languages>>;
}
