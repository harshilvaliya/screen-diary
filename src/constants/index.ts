import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { GoDeviceDesktop } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";

import { ITheme, INavLink } from "../types";

export const navLinks: INavLink[] = [
  {
    title: "home",
    path: "/",
    icon: AiOutlineHome,
  },
  {
    title: "movies",
    path: "/movie",
    icon: TbMovie,
  },
  {
    title: "tv series",
    path: "/tv",
    icon: MdOutlineLiveTv,
  },
];

export const themeOptions: ITheme[] = [
  {
    title: "Dark",
    icon: BsMoonStarsFill,
  },
  {
    title: "Light",
    icon: FiSun,
  },
  {
    title: "System",
    icon: GoDeviceDesktop,
  },
];

export const footerLinks = [
  // "home",
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Movies",
    path: "/movie",
  },
  {
    title: "Tv Series",
    path: "/tv",
  },
];

export const aboutUsData = {
  TeamCardData: [
    {
      profile: "/Images/linkpfp.jpg",
      fullname: "Harshil Valiya",
      position: "Team Member",
      email: "harshilvaliya40@gmail.com",
      git: "https://github.com/harshilvaliya",
      linkedin: "https://www.linkedin.com/in/harshil-valiya-1b1082274/",
      insta: "https://www.instagram.com/harshil_valiya/",
    },
    {
      profile: "/Images/VishwangProfile.jpg",
      fullname: "Vishwang Suthar",
      position: "Team Leader",
      email: "vishwangsuthar.997@gmail.com",
      git: "https://github.com/Vishwang0Suthar",
      linkedin: "https://www.linkedin.com/in/vishwang-suthar-062b39233/",
      insta: "https://www.instagram.com/vishwang._.suthar/",
    },
    {
      profile: "/Images/RaviProfile.jpeg",
      fullname: "Ravi Sanghani",
      position: "Team Member",
      email: "jasanghani126@gmail.com",
      git: "",
      linkedin: "https://www.linkedin.com/in/ravi-sanghani-662b30237/",
      insta: "https://www.instagram.com/ravi_sanghani_1206/",
    },
  ],
};

// "live",
// "you must watch",
// "contact us",
// "FAQ",
// "Recent release",
// "term of services",
// "premium",
// "Top IMDB",
// "About us",
// "Privacy policy",

export const sections = [
  {
    title: "Trending movies",
    category: "movie",
    type: "popular",
  },
  {
    title: "Top rated movies",
    category: "movie",
    type: "top_rated",
  },
  {
    title: "Trending series",
    category: "tv",
    type: "popular",
  },
  {
    title: "Top rated series",
    category: "tv",
    type: "top_rated",
  },
];
