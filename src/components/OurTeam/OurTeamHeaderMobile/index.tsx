import { memo } from "react";

import { SecondPageHeader } from "@/components/SecondPageHeader";

import { IOurTeamHeader } from "./interfaces";
import { Body, Image, Text } from "./styled";

export const OurTeamHeaderMobile = memo(
  ({ text, teamPhoto, pageHeaderConfig }: IOurTeamHeader) => {
    return (
      <Body>
        <SecondPageHeader {...pageHeaderConfig} />
        <Image
          src={teamPhoto}
          loading="lazy"
          alt="Loading..."
          title="team photo"
        />
        <Text>{text}</Text>
      </Body>
    );
  }
);
