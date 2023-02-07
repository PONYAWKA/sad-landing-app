import teamPhoto from "@/assets/images/ourTeam/teamPhoto.png";
import { SecondPageHeader } from "@/components/SecondPageHeader";

import { IOurTeamHeader } from "./interfaces";
import { pageHeaderConfig } from "./mock";
import { Body, Image, Text } from "./styled";
export const OurTeamHeaderMobile = ({ text }: IOurTeamHeader) => {
  return (
    <Body>
      <SecondPageHeader {...pageHeaderConfig} />
      <Image src={teamPhoto} />
      <Text>{text}</Text>
    </Body>
  );
};
