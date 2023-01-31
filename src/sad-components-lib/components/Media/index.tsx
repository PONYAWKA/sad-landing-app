import facebook from "../../assets/facebook.png";
import facebookW from "../../assets/facebookW.png";
import google from "../../assets/google.png";
import googleW from "../../assets/googleW.png";
import linkedIn from "../../assets/linkedIn.png";
import linkedInW from "../../assets/linkedInW.png";
import smth from "../../assets/smth.png";
import smthW from "../../assets/smthW.png";
import twitter from "../../assets/twitter.png";
import twitterW from "../../assets/twitterW.png";
import youTube from "../../assets/youTube.png";
import youTubeW from "../../assets/youTubeW.png";
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
