import log1 from "@/assets/icons/logo_1.png";
import log3 from "@/assets/icons/logo_3.png";
import log4 from "@/assets/icons/logo_4.png";
import log5 from "@/assets/icons/logo_5.png";
import log6 from "@/assets/icons/logo_6.png";
import log7 from "@/assets/icons/logo_7.png";
import solutionsImage from "@/assets/images/img_9.png";
import newestImage from "@/assets/images/img_10.png";
import powerImage from "@/assets/images/img_11.png";
import { Button } from "@/sad-components-lib/components/Button";
import { CircleButton } from "@/sad-components-lib/components/CircleButton";

import { Metrics } from "./mock";
import {
  Body,
  ButtonText,
  CircleButtonContainer,
  Content,
  Image,
  Newest,
  NewestContent,
  NewestText,
  NewestTextContainer,
  PowerContent,
  PowerText,
  PowerTitle,
  SolutionsContent,
  SolutionsImage,
  SolutionsImageMobile,
  SolutionsText,
  SolutionsTextContainer,
  SolutionsTextText,
  SolutionsTextTitle,
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

export const Home = () => {
  return (
    <Body>
      <Content>
        <PowerContent>
          <PowerTitle>
            Find true power in your data with <span>Ensome</span>
          </PowerTitle>
          <PowerText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi.
          </PowerText>
        </PowerContent>
        <CircleButtonContainer>
          <CircleButton>Learn more</CircleButton>
        </CircleButtonContainer>
      </Content>
      <Image src={powerImage} />

      <NewestContent>
        <Newest>
          <PowerTitle>
            The<span> newest </span>
            business analytics platform
          </PowerTitle>
          <NewestTextContainer>
            <NewestText>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </NewestText>
            <Button>
              <ButtonText>Discover more</ButtonText>
            </Button>
          </NewestTextContainer>
        </Newest>
      </NewestContent>
      <CircleButtonContainer>
        <CircleButton>Learn more</CircleButton>
      </CircleButtonContainer>

      <SolutionsContent>
        <SolutionsImage src={newestImage} />
        <SolutionsTextContainer>
          <SolutionsText>
            <SolutionsTextTitle>
              Radically new solutions for data
            </SolutionsTextTitle>

            <SolutionsImageMobile src={solutionsImage} />

            <SolutionsTextText>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </SolutionsTextText>
            <Button>
              <ButtonText>Learn more</ButtonText>
            </Button>
          </SolutionsText>
        </SolutionsTextContainer>
      </SolutionsContent>

      <SuccessContent>
        <SuccessTitle>
          We provide services that guarantee your success
        </SuccessTitle>
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
            finibus nec.
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
    </Body>
  );
};
