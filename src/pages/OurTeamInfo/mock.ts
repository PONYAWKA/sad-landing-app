import facebook from "@/assets/icons/ourTeam/facebook.svg";
import linkedIn from "@/assets/icons/ourTeam/linkedIn.svg";
import twitter from "@/assets/icons/ourTeam/twitter.svg";

export const pageHeadConfig = {
  title: "Team Profile",
  crumb: {
    curPage: "Team Profile",
    links: [
      { name: "Home", to: "/" },
      { name: "Our team", to: "/OurTeam" },
    ],
  },
};

export const description = `Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. At vero eos et accusamus et iusto odio dignissimos ducimus.`;

export const ShareTitle = (name: string, sex: string) =>
  `Want ${name.split(" ")[0]} to share ${
    sex === "m" ? "his" : "her"
  } expertise with you?`;

export const icons = [facebook, twitter, linkedIn];
export const options = {
  en: {
    pageHeadConfig: {
      title: "Team Profile",
      crumb: {
        curPage: "Team Profile",
        links: [
          { name: "Home", to: "/" },
          { name: "Our team", to: "/OurTeam" },
        ],
      },
    },

    description: `Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. At vero eos et accusamus et iusto odio dignissimos ducimus.`,
    ShareTitle: (name: string, sex: string) =>
      `Want ${name.split(" ")[0]} to share ${
        sex === "m" ? "his" : "her"
      } expertise with you?`,

    nameTitle: "Name",
    professionTitle: "Profession",
    descriptionTitle: "Description Title",
    socialNetworks: "Social networks",
  },
  ru: {
    pageHeadConfig: {
      title: "Профиль комманды",
      crumb: {
        curPage: "Team Profile",
        links: [
          { name: "Home", to: "/" },
          { name: "Our team", to: "/OurTeam" },
        ],
      },
    },

    description: `Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. At vero eos et accusamus et iusto odio dignissimos ducimus.`,
    ShareTitle: (name: string, sex: string) =>
      `Хочешь чтобы ${name.split(" ")[0]} поделил${
        sex === "m" ? "ся" : "ась"
      } опытом с тобой?`,
    nameTitle: "Имя",
    professionTitle: "Проффесия",
    descriptionTitle: "Описание",
    socialNetworks: "Соц сети",
  },
};
