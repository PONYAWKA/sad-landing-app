import log1 from "@/assets/icons/logo_1.png";
import log3 from "@/assets/icons/logo_3.png";
import log4 from "@/assets/icons/logo_4.png";
import log5 from "@/assets/icons/logo_5.png";
import log6 from "@/assets/icons/logo_6.png";
import log7 from "@/assets/icons/logo_7.png";

import { Metrics } from "./mock";
import {
  SuccessBody,
  SuccessContent,
  SuccessIcon,
  SuccessIconsContainer,
  SuccessMetric,
  SuccessMetricElement,
  SuccessMetricSubTitle,
  SuccessMetricTitle,
  SuccessText,
  SuccessTitle,
} from "./styled";
export const Success = () => (
  <SuccessContent>
    <SuccessTitle>We provide services that guarantee your success</SuccessTitle>
    <SuccessBody>
      <SuccessMetric>
        {Metrics.map(({ title, sub }) => (
          <SuccessMetricElement key={title}>
            <SuccessMetricTitle>{title}</SuccessMetricTitle>
            <SuccessMetricSubTitle>{sub}</SuccessMetricSubTitle>
          </SuccessMetricElement>
        ))}
      </SuccessMetric>
      <SuccessText>
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
        inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </SuccessText>
    </SuccessBody>
    <SuccessIconsContainer>
      <SuccessIcon src={log1} />
      <SuccessIcon src={log3} />
      <SuccessIcon src={log4} />
      <SuccessIcon src={log5} />
      <SuccessIcon src={log6} />
      <SuccessIcon src={log7} />
    </SuccessIconsContainer>
  </SuccessContent>
);
