import emailjs from "@emailjs/browser";

const subscribeParams = (email: string) => ({
  to_name: email,
  to_email: email,
  from_name: "Hollow",
  from_email: "firstbloodcyclehasbegan@gmail.com",
  subject: "You have subscribed to Anekdot.com",
  message: "You have subscribed to Anekdot.com",
});

export const SubEmail = (email: string) => {
  emailjs
    .send(
      "service_8hrgw1c",
      "template_sfl0gpu",
      subscribeParams(email),
      "qh9yLJ-kCj1NJaBB8"
    )
    .then(() => alert("The letter was sent"))
    .catch(() => alert("The letter was not sent"));
};
