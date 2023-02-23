import { memo } from "react";

import { IEnsomeInNumbers } from "./interfaces";
import {
  Body,
  Content,
  SuccessMetric,
  SuccessMetricElement,
  SuccessMetricSubTitle,
  SuccessMetricTitle,
  Title,
} from "./styled";

export const Numbers = memo(({ title, metrics }: IEnsomeInNumbers) => {
  return (
    <Body className="element-animation">
      <Content>
        <Title>{title}</Title>
        <SuccessMetric>
          {metrics?.map(({ title, sub }) => (
            <SuccessMetricElement key={title}>
              <SuccessMetricTitle>{title}</SuccessMetricTitle>
              <SuccessMetricSubTitle>{sub}</SuccessMetricSubTitle>
            </SuccessMetricElement>
          ))}
        </SuccessMetric>
      </Content>
    </Body>
  );
});
