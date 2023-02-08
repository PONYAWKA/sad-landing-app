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

export const Icons = [facebook, twitter, linkedIn];

export const ShareTitle = (name: string) =>
  `Want ${name.split(" ")[0]} to share his expertise with you?`;
