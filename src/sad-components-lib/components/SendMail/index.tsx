import { IProps } from "./interfaces";
import { Body, Field, Send } from "./styled";

export const SendMail = ({ onChange, value, placeholder }: IProps) => {
  const screenWidth = window.screen.width;
  const sendText = screenWidth < 767 ? "Subscribe" : "Send";
  console.log(screenWidth);

  return (
    <Body>
      <Field placeholder="You Email" /> <Send>{sendText}</Send>
    </Body>
  );
};
