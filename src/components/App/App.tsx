import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { BasicLayout } from "@/components/Blog/BasicLayout";
import { ROUTES } from "@/constants/routs";
import { GlobalStyle } from "@/globalStyle";
import { theme } from "@/theme";

export const App = () => {
  return (
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
  );
};
