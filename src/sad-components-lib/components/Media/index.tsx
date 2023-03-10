import facebook from "@/sad-components-lib/assets/images/facebook.png";
import facebookW from "@/sad-components-lib/assets/images/facebookW.png";
import google from "@/sad-components-lib/assets/images/google.png";
import googleW from "@/sad-components-lib/assets/images/googleW.png";
import linkedIn from "@/sad-components-lib/assets/images/linkedIn.png";
import linkedInW from "@/sad-components-lib/assets/images/linkedInW.png";
import smth from "@/sad-components-lib/assets/images/smth.png";
import smthW from "@/sad-components-lib/assets/images/smthW.png";
import twitter from "@/sad-components-lib/assets/images/twitter.png";
import twitterW from "@/sad-components-lib/assets/images/twitterW.png";
import youTube from "@/sad-components-lib/assets/images/youTube.png";
import youTubeW from "@/sad-components-lib/assets/images/youTubeW.png";

import { IProps } from "./interfaces";
import { Body, ChildrenContainer, MediaContainer, MediaItem } from "./styled";

export const Media = ({ children, black }: IProps) => {
  return (
    <Body>
      {children && <ChildrenContainer>{children}</ChildrenContainer>}
      <MediaContainer>
        <MediaItem alt="Loading..." src={black ? facebook : facebookW} />
        <MediaItem alt="Loading..." src={black ? google : googleW} />
        <MediaItem alt="Loading..." src={black ? linkedIn : linkedInW} />
        <MediaItem alt="Loading..." src={black ? smth : smthW} />
        <MediaItem alt="Loading..." src={black ? twitter : twitterW} />
        <MediaItem alt="Loading..." src={black ? youTube : youTubeW} />
      </MediaContainer>
    </Body>
  );
};
