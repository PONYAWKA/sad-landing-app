import teamPhoto from "@/assets/images/ourTeam/teamPhoto.png";

export const options = {
  en: {
    headerConfig: {
      title: "Our team",
      text: `Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu consectetur.
      Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.`,
      crumb: {
        curPage: "Our team",
        links: [{ name: "Home", to: "/" }],
        curPageColor: "#FFFFFF",
      },
    },

    headerConfigMobile: {
      text: `Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. 
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis. `,
      pageHeaderConfig: {
        title: "Get to know us closer",
        text: "Our team",
        subText:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
      teamPhoto: teamPhoto,
    },
  },
  ru: {
    headerConfig: {
      title: "Наша команда",
      text: `Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu consectetur.
      Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero.`,
      crumb: {
        curPage: "Our team",
        links: [{ name: "Home", to: "/" }],
        curPageColor: "#FFFFFF",
      },
    },

    headerConfigMobile: {
      text: `Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. 
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis. `,
      pageHeaderConfig: {
        title: "Узнай нас ближе",
        text: "Наша команда",
        subText:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
      teamPhoto: teamPhoto,
    },
  },
};
