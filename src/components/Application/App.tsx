import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { BasicLayout } from "@/components/BasicLayout";
import { ROUTES } from "@/constants/routs";
import { GlobalStyle } from "@/globalStyle";
import { Languages } from "@/interfaces/language";
import { theme } from "@/theme";
import { getLocalLang, setLocalLang } from "@/utils/langSaver";
import { LanguageContext } from "@/utils/languageContext";

export const App = () => {
  const [lang, setLang] = useState<Languages>("en");

  useEffect(() => setLang(getLocalLang()), []);
  useEffect(() => setLocalLang(lang), [lang]);

  return (
    <LanguageContext.Provider value={{ value: lang, setLanguage: setLang }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BasicLayout />}>
              {ROUTES.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
};
