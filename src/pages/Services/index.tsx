import { Help } from "@/components/Help";
import { ServiceList } from "@/components/ServicesComponents/ServiceList";
import { Top } from "@/components/ServicesComponents/Top";
import { Success } from "@/components/Success";

import { Body } from "./styled";

export const Services = () => {
  return (
    <Body>
      <Top />
      <ServiceList />
      <Success />
      <Help />
    </Body>
  );
};
