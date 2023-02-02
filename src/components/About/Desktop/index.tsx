import { PageHeader } from "@/components/PageHeader";

import { Customers } from "../Customers";
import { Description } from "../Descrip";
import { Forma } from "../Forma";
import { Numbers } from "../Numbers";
import { firstDes, pageHeadConfig, secondDes } from "./mock";
import { Body, PageHeaderContainer } from "./styled";

export const AboutDesktop = () => {
  return (
    <Body>
      <PageHeaderContainer>
        <PageHeader {...pageHeadConfig} />
      </PageHeaderContainer>
      <Description {...firstDes} />
      <Description {...secondDes} reverse />
      <Numbers />
      <Customers />
      <Forma />
    </Body>
  );
};
