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
const ContactParams = ({ email, theme, message, name }: IContactUs) => ({
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
      "service_8hrgw1c",
      "template_o6j3iyr",
      subscribeParams(email),
      "qh9yLJ-kCj1NJaBB8"
    )
    .then(() => alert("The letter was sent"))
    .catch(() => alert("The letter was not sent"));
};
export const Contact = (params: IContactUs) => {
  emailjs
    .send(
      "service_8hrgw1c",
      "template_sfl0gpu",
      ContactParams(params),
      "qh9yLJ-kCj1NJaBB8"
    )
    .then(() => alert("The letter was sent"))
    .catch(() => alert("The letter was not sent"));
};
