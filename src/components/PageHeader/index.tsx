import { memo } from "react";
import { BreadCrumbs } from "sad-landing-lib";

import { PageHeaderProps } from "./interfaces";
import { Body, Content, Title } from "./styled";

export const PageHeader = memo(({ title, crumb }: PageHeaderProps) => {
  return (
    <Body>
      <Content>
        <Title>{title}</Title>
        <BreadCrumbs {...crumb} />
      </Content>
    </Body>
  );
});
