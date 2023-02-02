import { Metrics } from "./mock";
import {
  Body,
  Content,
  SuccessMetric,
  SuccessMetricElement,
  SuccessMetricSubTitle,
  SuccessMetricTitle,
  Title,
} from "./styled";

export const Numbers = () => {
  return (
    <Body>
      <Content>
        <Title>Ensome in numbers</Title>
        <SuccessMetric>
          {Metrics.map(({ title, sub }) => (
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
