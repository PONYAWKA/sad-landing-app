import { PageHeader } from "@/components/PageHeader";

import { Customers } from "../Customers";
import { Description } from "../DescriptionSection";
import { Numbers } from "../EnsomeInNumbers";
import { Forma } from "../Form";
import {
  customersConfig,
  ensomeInNumbersConfig,
  firstDes,
  pageHeadConfig,
  secondDes,
} from "./mock";
import { Body, PageHeaderContainer } from "./styled";

export const AboutDesktop = () => {
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
