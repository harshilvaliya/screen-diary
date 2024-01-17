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
    path: "/about-us",
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
      profile: "/Images/HarshilProfile.png",
      fullname: "Harshil Valiya",
      position: "Team Leader",
      email: "harshilvaliya40@gmail.com",
      git: "https://github.com/harshilvaliya",
      linkedin: "https://www.linkedin.com/in/harshil-valiya-1b1082274/",
      insta: "https://www.instagram.com/harshil_valiya/",
    },
    {
      profile: "/Images/ArjunProfile.jpg",
      fullname: "Arjun Latiwala",
      position: "Team Member",
      email: "arjunlatiwala@gmail.com",
      git: "https://github.com/ArjunCJ",
      linkedin: "https://www.linkedin.com/in/arjun-latiwala-344449243/",
      insta: "https://www.instagram.com/aalu._.arjun/",
    },
    {
      profile: "/Images/HeetProfile.jpg",
      fullname: "Khushi Wala",
      position: "Team Member",
      email: "khushi122004@gmail.com",
      git: "https://github.com/4Victory",
      linkedin: "https://www.linkedin.com/in/khushi-wala-738019284/",
      insta: "https://www.instagram.com/violet_flame_4/",
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
