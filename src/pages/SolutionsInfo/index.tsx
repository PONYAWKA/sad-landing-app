import { Help } from "@/components/Help";
import { PageHeader } from "@/components/PageHeader";
import { SolutionsInfoNav } from "@/components/Solutions/SolutionsInfoNav";
import { SolutionsInfoText } from "@/components/Solutions/SolutionsInfoText";

import { pageHeadConfig } from "./mock";
import {
  Body,
  Content,
  HeaderContent,
  HederLine,
  TextContent,
  Titles,
} from "./styled";

export const SolutionInfo = () => {
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
