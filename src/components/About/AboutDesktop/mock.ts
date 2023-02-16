import img1 from "@/assets/images/about/about-image-1.png";
import img2 from "@/assets/images/about/about-image-2.png";
import person1 from "@/assets/images/person1.png";
import person2 from "@/assets/images/person2.png";
import person3 from "@/assets/images/person3.png";

export const config = {
  en: {
    pageHeadConfig: {
      title: "About Us",
      crumb: { curPage: "About Us", links: [{ name: "Home", to: "/" }] },
    },

    firstDes: {
      image: img1,
      title: "Who we are",
      textOne:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      textTwo:
        "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia lectus.",
    },
    secondDes: {
      image: img2,
      title: "Our mission",
      textOne:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      textTwo:
        "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium.",
    },

    ensomeInNumbersConfig: {
      title: `Ensome in numbers`,
      metrics: [
        { title: "1830+", sub: "Project executed" },
        { title: "220", sub: "Data analytics" },
        { title: "834+", sub: "Satisfied customers" },
        { title: "390", sub: "Data management" },
      ],
    },

    customersConfig: {
      title: "Our customers",
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudan, totam rem aperiam.`,
      testimonials: {
        title: "What our customers say",
        itemsToShow: 2,
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
  },
  ru: {
    pageHeadConfig: {
      title: "About Us",
      crumb: { curPage: "About Us", links: [{ name: "Home", to: "/" }] },
    },

    firstDes: {
      image: img1,
      title: "Who we are",
      textOne:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      textTwo:
        "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia lectus.",
    },
    secondDes: {
      image: img2,
      title: "Our mission",
      textOne:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      textTwo:
        "Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium.",
    },

    ensomeInNumbersConfig: {
      title: `Ensome in numbers`,
      metrics: [
        { title: "1830+", sub: "Project executed" },
        { title: "220", sub: "Data analytics" },
        { title: "834+", sub: "Satisfied customers" },
        { title: "390", sub: "Data management" },
      ],
    },

    customersConfig: {
      title: "Our customers",
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudan, totam rem aperiam.`,
      testimonials: {
        title: "What our customers say",
        itemsToShow: 2,
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
  },
};
