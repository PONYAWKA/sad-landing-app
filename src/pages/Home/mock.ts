import { card } from "@/constants/benefidsCard";

export const ElementsToShow = {
  mobile: 1,
  desktop: 3,
};

export const SuccessConfig = {
  title: "We provide services that guarantee your success",
  text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.",
  items: [
    { title: "1830+", sub: "Project executed" },
    { title: "834+", sub: "Satisfied customers" },
    { title: "390", sub: "Data management" },
  ],
};
export const BenefitConfig = {
  title: "The benefits of Ensome",
  text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  cards: card,
};

export const priceCardsConfig = {
  title: "Our pricing",
  clientId:
    "AQDwMTzIWXOvJVPxCjfShNnJQSTUBthostkKH4BACDj8KHHwIgjkfQ9RmHNkKKVwT6cRsUyzCeNQxa6_",
  cards: [
    {
      name: "Free trial",
      mo: 1,
      yr: 12,
      plus: ["For small teams - 5 users", "Community support"],
    },
    {
      name: "Lite",
      mo: 99,
      yr: 1111,
      plus: [
        "For small teams - 15 users",
        "Individual support",
        "Individual data - 60GB",
      ],
    },
    {
      name: "Basic",
      mo: 199,
      yr: 2000,
      plus: [
        "For big teams - 30 users",
        "Individual support",
        "Individual data - 120GB",
        "Advanced permissions",
      ],
      priority: true,
    },
    {
      name: "f",
      mo: "Custom",
      yr: "Custom",
      plus: [
        "Unlimited team members",
        "Individual support",
        "Unlimited Individual data",
        "Advanced permissions",
        "Data history",
        "Audit log",
        "All functions included",
      ],
    },
  ],
};
