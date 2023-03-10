import { memo } from "react";

import { icons } from "@/constants/icons";

import { IconsMapper } from "../IconMapper";
import { ISuccess } from "./interfaces";
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
export const Success = memo(
  ({ text, title, hide, center, items }: ISuccess) => (
    <SuccessContent className="element-animation">
      <SuccessTitle>{title}</SuccessTitle>
      <SuccessBody center={center}>
        <SuccessMetric>
          {items?.map(({ title, sub }) => (
            <SuccessMetricElement key={title}>
              <SuccessMetricTitle>{title}</SuccessMetricTitle>
              <SuccessMetricSubTitle>{sub}</SuccessMetricSubTitle>
            </SuccessMetricElement>
          ))}
        </SuccessMetric>
        <SuccessText>{text}</SuccessText>
      </SuccessBody>
      {!hide && <IconsMapper icons={icons} />}
    </SuccessContent>
  )
);
