import { NotFound } from "sad-landing-lib";

import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { BlogInfo } from "@/pages/BlogInfo";
import { Contacts } from "@/pages/Contacts";
import { FAQ } from "@/pages/FAQ";
import { Home } from "@/pages/Home/index";
import { OurTeamPage } from "@/pages/OurTeam";
import { OurTeamInfo } from "@/pages/OurTeamInfo";
import { Services } from "@/pages/Services";
import { ServicesInfo } from "@/pages/ServicesInfo";
import { Solutions } from "@/pages/Solutions";
import { SolutionInfo } from "@/pages/SolutionsInfo";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "services-info",
    element: <ServicesInfo />,
  },
  {
    path: "blog-info",
    element: <BlogInfo />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "our-team",
    element: <OurTeamPage />,
  },
  {
    path: "our-team-info",
    element: <OurTeamInfo />,
  },
  {
    path: "FAQ",
    element: <FAQ />,
  },
  {
    path: "solutions",
    element: <Solutions />,
  },
  {
    path: "solutions-info",
    element: <SolutionInfo />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
