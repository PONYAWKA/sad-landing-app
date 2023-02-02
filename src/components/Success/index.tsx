import { Icons } from "@/constants/icons";

import { IconsMapper } from "../IconMapper";
import { SuccessInterface } from "./interfaces";
import { Metrics } from "./mock";
import {
  SuccessBody,
  SuccessContent,
  SuccessMetric,
  SuccessMetricElement,
  SuccessMetricSubTitle,
  SuccessMetricTitle,
  SuccessText,
  SuccessTitle,
} from "./styled";
export const Success = ({ text, title }: SuccessInterface) => (
  <SuccessContent>
    <SuccessTitle>{title}</SuccessTitle>
    <SuccessBody>
      <SuccessMetric>
        {Metrics.map(({ title, sub }) => (
          <SuccessMetricElement key={title}>
            <SuccessMetricTitle>{title}</SuccessMetricTitle>
            <SuccessMetricSubTitle>{sub}</SuccessMetricSubTitle>
          </SuccessMetricElement>
        ))}
      </SuccessMetric>
      <SuccessText>{text}</SuccessText>
    </SuccessBody>
    <IconsMapper Icons={Icons} />
  </SuccessContent>
);
