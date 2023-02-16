import person1 from "@/assets/images/person1.png";
import person2 from "@/assets/images/person2.png";
import person3 from "@/assets/images/person3.png";
import { cardEn, cardRu } from "@/constants/benefidsCard";

export const config = {
  en: {
    breadCrumb: {
      curPage: "About Us",
      links: [{ name: "Home", to: "/" }],
    },
    topConfig: {
      title: "We work with 15 years of experience",
      text: "About Us",
      subtext:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
    successConfig: {
      hide: true,
      title: "We provide services that guarantee your success",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.",
    },
    benefitConfig: {
      title: "Why our clients chosse Ensome?",
      text: "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cards: cardEn,
    },
    Testimonials: {
      title: "Testimonials",
      itemsToShow: 1,
      items: [
        {
          icon: person1,
          pos: "CEO by PixelPerfect",
          title: "Alex Bern",
          text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
        },
        {
          icon: person2,
          pos: "CEO by NOX",
          title: "Ruben Chifundo",
          text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
        },
        {
          icon: person3,
          pos: "Data analyst",
          title: "Tigran Nazaret",
          text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
        },
      ],
    },
  },
  ru: {
    breadCrumb: {
      curPage: "About Us",
      links: [{ name: "Home", to: "/" }],
    },
    topConfig: {
      title: "We work with 15 years of experience",
      text: "About Us",
      subtext:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
    successConfig: {
      hide: true,
      title: "We provide services that guarantee your success",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.",
    },
    benefitConfig: {
      title: "Why our clients chosse Ensome?",
      text: "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      cards: cardRu,
    },
    Testimonials: {
      title: "Testimonials",
      itemsToShow: 1,
      items: [
        {
          icon: person1,
          pos: "CEO by PixelPerfect",
          title: "Alex Bern",
          text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
        },
        {
          icon: person2,
          pos: "CEO by NOX",
          title: "Ruben Chifundo",
          text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
        },
        {
          icon: person3,
          pos: "Data analyst",
          title: "Tigran Nazaret",
          text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
        },
      ],
    },
  },
};
