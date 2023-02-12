import { SecondPageHeader } from "@/components/SecondPageHeader";

import { IOurTeamHeader } from "./interfaces";
import { Body, Image, Text } from "./styled";

export const OurTeamHeaderMobile = ({
  text,
  teamPhoto,
  pageHeaderConfig,
}: IOurTeamHeader) => {
  return (
    <Body>
      <SecondPageHeader {...pageHeaderConfig} />
      <Image src={teamPhoto} loading="lazy" />
      <Text>{text}</Text>
    </Body>
  );
};
