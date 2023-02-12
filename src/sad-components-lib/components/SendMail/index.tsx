import { IProps } from "./interfaces";
import { Body, Field, Send } from "./styled";

export const SendMail = ({
  onChange,
  value,
  placeholder = "You Email",
  onClick,
  error,
  isMobile,
}: IProps) => {
  const sendText = isMobile ? "Subscribe" : "Send";
  return (
    <Body>
      <Field placeholder={placeholder} onChange={onChange} error={error} />
      <Send onClick={onClick} value={value}>
        {sendText}
      </Send>
    </Body>
  );
};
