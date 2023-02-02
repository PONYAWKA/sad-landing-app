import { IProps } from "./interfaces";
import { Body, Field, Send } from "./styled";

export const SendMail = ({
  onChange,
  value,
  placeholder = "You Email",
  onClick,
}: IProps) => {
  const screenWidth = window.screen.width;
  const sendText = screenWidth < 767 ? "Subscribe" : "Send";
  return (
    <Body>
      <Field placeholder={placeholder} onChange={onChange} />
      <Send onClick={onClick} value={value}>
        {sendText}
      </Send>
    </Body>
  );
};
