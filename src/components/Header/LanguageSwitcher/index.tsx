import { changeLanguage } from "i18next";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { languages } from "@/constants/languages";
import { useClickOutContainer } from "@/hooks/useClickOutContainer";

import { Body, Option, OptionsContainer, Selector } from "./styled";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("English");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const hadeHide = () => setIsVisible(false);

  useClickOutContainer(ref, hadeHide);

  const { i18n } = useTranslation();

  const handleClick = (title: string) => (value: string) => () => {
    setLanguage(title);
    i18n.changeLanguage(value);
  };

  const handleVisible = () => setIsVisible((prev) => !prev);
  return (
    <Body>
      <Selector onClick={handleVisible} ref={ref}>
        {language}
      </Selector>
      {isVisible && (
        <OptionsContainer>
          {languages.map(({ value, title }) => (
            <Option
              key={value}
              data-value={value}
              onClick={handleClick(title)(value)}
            >
              {title}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Body>
  );
};
