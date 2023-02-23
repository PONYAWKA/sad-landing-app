import emailjs from "@emailjs/browser";

import { IContactUs } from "./interfaces";

const subscribeParams = (email: string) => ({
  to_name: email,
  to_email: email,
  from_name: "PONYAWKA",
  from_email: "firstbloodcyclehasbegan@gmail.com",
  subject: "You have subscribed to Anekdot.com",
  message: "You have subscribed to Anekdot.com",
});
const ContactParams = ({ email, theme, message }: IContactUs) => ({
  to_name: "Dev",
  to_email: "firstbloodcyclehasbegan@gmail.com",
  from_name: email,
  from_email: email,
  subject: theme,
  message: message,
});

export const SubEmail = (email: string) => {
  emailjs
    .send(
      process.env.REACT_APP_MAIL_KEY as string,
      process.env.REACT_APP_MAIL_TEMPLATE_SEND as string,
      subscribeParams(email),
      process.env.REACT_APP_MAIL_SECRET
    )
    .then(() => alert("The letter was sent"))
    .catch(() => alert("The letter was not sent"));
};
export const Contact = (params: IContactUs) => {
  return emailjs
    .send(
      process.env.REACT_APP_MAIL_KEY as string,
      process.env.REACT_APP_MAIL_TEMPLATE as string,
      ContactParams(params),
      process.env.REACT_APP_MAIL_SECRET
    )
    .then(() => alert("The letter was sent"))
    .catch(() => alert("The letter was not sent"));
};
