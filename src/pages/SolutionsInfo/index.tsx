import { Help } from "@/components/Help";
import { PageHeader } from "@/components/PageHeader";
import { SolutionsInfoNav } from "@/components/Solutions/SolutionsInfoNav";
import { SolutionsInfoText } from "@/components/Solutions/SolutionsInfoText";
import { useTranslate } from "@/hooks/useTranslate";

import { options } from "./mock";
import {
  Body,
  Content,
  HeaderContent,
  HederLine,
  TextContent,
  Titles,
} from "./styled";

export const SolutionInfo = () => {
  const { value } = useTranslate();
  const { pageHeadConfig } = options[value];
  return (
    <Body>
      <HederLine id="whatIs" />
      <HeaderContent>
        <PageHeader {...pageHeadConfig} />
      </HeaderContent>
      <Content>
        <Titles>
          <SolutionsInfoNav />
        </Titles>
        <TextContent>
          <SolutionsInfoText />
        </TextContent>
      </Content>
      <Help />
    </Body>
  );
};
