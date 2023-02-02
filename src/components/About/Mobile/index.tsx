import { Top } from "@/components/Top";
import { BreadCrumbs } from "@/sad-components-lib/components/BreadCrumbs";

import { BreadCrumb } from "./mock";
import { Body } from "./styled";

export const AboutMobile = () => {
  return (
    <Body>
      <BreadCrumbs {...BreadCrumb} />
      <Top />
    </Body>
  );
};
