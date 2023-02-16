import { LocationIcon } from "@/assets/icons/servicesInfo/locationIcon";
import { MailIcon } from "@/assets/icons/servicesInfo/mailIcon";
import { PhoneIcon } from "@/assets/icons/servicesInfo/phoneIcon";
import customerImage from "@/assets/images/servicesInfo/service-info-image-1.png";
import solutionImage from "@/assets/images/servicesInfo/service-info-image-2.png";

const Icons = [
  { Img: <MailIcon fill="#185CFF" />, text: "ensome@info.co.us" },
  { Img: <PhoneIcon fill="#185CFF" />, text: "+1 601-201-5580" },
  {
    Img: <LocationIcon fill="#185CFF" />,
    text: "1642 Washington Ave, Jackson, MS",
  },
];

export const options = {
  en: {
    headerConfig: {
      title: "Access control",
      text: "Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa.",
      crumb: {
        curPage: "Access control",
        links: [{ name: "Home", to: "/" }],
        curPageColor: "#ffffff",
      },
    },

    customer: {
      image: customerImage,
      title: "Customer",
      text: `Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.`,
    },

    challenge: {
      title: `Challenge`,
      text: `Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.`,
    },

    solution: {
      title: `Solution`,
      image: solutionImage,
      text: `Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.`,
      items: [
        "Hid mobile access",
        "Location services",
        "Location services",
        "Cybersecurity coordination",
      ],
    },

    result: {
      title: "Results",
      text: "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.",
    },

    technologies: {
      title: "Technologies",
      text: "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.",
    },

    services: {
      text: "Services",
      items: [
        { text: "Machine learning", id: 0 },
        { text: "Embed analytics", id: 1 },
        { text: "Data analytics", id: 2 },
        { text: "Big data consulting", id: 3 },
        { text: "Artificial intelligence", id: 4 },
      ],
    },
    footerConfig: {
      title: "Contact information",
      text: "Fill up the form and our Team will get back to you with 25 hours.",
      items: Icons,
    },
  },
  ru: {
    headerConfig: {
      title: "Контроль доступа",
      text: "Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa.",
      crumb: {
        curPage: "Access control",
        links: [{ name: "Home", to: "/" }],
        curPageColor: "#ffffff",
      },
    },

    customer: {
      image: customerImage,
      title: "Клиент",
      text: `Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.`,
    },

    challenge: {
      title: `Испытание`,
      text: `Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.`,
    },

    solution: {
      title: `Решение`,
      image: solutionImage,
      text: `Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.`,
      items: [
        "Скрыл мобильный доступ",
        "Сервисы определения местоположения",
        "Сервисы определения местоположения",
        "Координация кибербезопасности",
      ],
    },

    result: {
      title: "Полученные результаты",
      text: "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.",
    },

    technologies: {
      title: "Технологии",
      text: "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.",
    },

    services: {
      text: "Услуги",
      items: [
        { text: "Машинное обучение", id: 0 },
        { text: "Встроить аналитику", id: 1 },
        { text: "Аналитика данных", id: 2 },
        { text: "Консультации по работе с большими данными", id: 3 },
        { text: "Искусственный интеллект", id: 4 },
      ],
    },
    footerConfig: {
      title: "Контактная информация",
      text: "Заполните форму, и наша команда свяжется с вами в течение 25 часов.",
      items: Icons,
    },
  },
};
