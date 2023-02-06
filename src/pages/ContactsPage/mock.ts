import location from "@/assets/icons/contacts/location.svg";
import mail from "@/assets/icons/contacts/mail.svg";
import phone from "@/assets/icons/contacts/phone.svg";

export const breadCrumb = {
  curPage: "Contacts",
  links: [{ name: "Home", to: "/" }],
};

export const contacts = [
  {
    icon: mail,
    title: "Email",
    description: "ensome@info.co.us",
  },
  {
    icon: phone,
    title: "Phone",
    description: "+1 601-201-5580",
  },
  {
    icon: location,
    title: "Address",
    description: "1642 Washington Ave, Jackson, MS",
  },
];
