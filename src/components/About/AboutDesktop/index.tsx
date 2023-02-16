import { PageHeader } from "@/components/PageHeader";
import { useTranslate } from "@/hooks/useTranslate";

import { Customers } from "../Customers";
import { Description } from "../DescriptionSection";
import { Numbers } from "../EnsomeInNumbers";
import { Forma } from "../Form";
import { config } from "./mock";
import { Body, PageHeaderContainer } from "./styled";

export const AboutDesktop = () => {
  const { value } = useTranslate();

  const {
    customersConfig,
    ensomeInNumbersConfig,
    firstDes,
    pageHeadConfig,
    secondDes,
  } = config[value];
  return (
    <Body>
      <PageHeaderContainer>
        <PageHeader {...pageHeadConfig} />
      </PageHeaderContainer>
      <Description {...firstDes} />
      <Description {...secondDes} reverse />
      <Numbers {...ensomeInNumbersConfig} />
      <Customers {...customersConfig} />
      <Forma />
    </Body>
  );
};
