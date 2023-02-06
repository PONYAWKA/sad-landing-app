import facebook from "../../assets/images/facebook.png";
import facebookW from "../../assets/images/facebookW.png";
import google from "../../assets/images/google.png";
import googleW from "../../assets/images/googleW.png";
import linkedIn from "../../assets/images/linkedIn.png";
import linkedInW from "../../assets/images/linkedInW.png";
import smth from "../../assets/images/smth.png";
import smthW from "../../assets/images/smthW.png";
import twitter from "../../assets/images/twitter.png";
import twitterW from "../../assets/images/twitterW.png";
import youTube from "../../assets/images/youTube.png";
import youTubeW from "../../assets/images/youTubeW.png";
import { IProps } from "./interfaces";
import { Body, ChildrenContainer, MediaContainer, MediaItem } from "./styled";

export const Media = ({ children, black }: IProps) => {
  return (
    <Body>
      {children && <ChildrenContainer>{children}</ChildrenContainer>}
      <MediaContainer>
        <MediaItem src={black ? facebook : facebookW} />
        <MediaItem src={black ? google : googleW} />
        <MediaItem src={black ? linkedIn : linkedInW} />
        <MediaItem src={black ? smth : smthW} />
        <MediaItem src={black ? twitter : twitterW} />
        <MediaItem src={black ? youTube : youTubeW} />
      </MediaContainer>
    </Body>
  );
};
