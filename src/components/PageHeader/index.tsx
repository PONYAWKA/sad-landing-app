import { BreadCrumbs } from "../../sad-components-lib/components/BreadCrumbs";
import { PageHeaderProps } from "./interfaces";
import { Body, Content, Title } from "./styled";

export const PageHeader = ({ title, crumb }: PageHeaderProps) => {
  return (
    <Body>
      <Content>
        <Title>{title}</Title>
        <BreadCrumbs {...crumb} />
      </Content>
    </Body>
  );
};
