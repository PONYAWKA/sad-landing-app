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

export const Numbers = ({ title, metrics }: IEnsomeInNumbers) => {
  return (
    <Body>
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
};
