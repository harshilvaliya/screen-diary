import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../public/favicon.png";
import { cn } from "@/utils/helper";

interface logoProps {
  className?: string;
  logoColor?: string;
}

const Logo: React.FC<logoProps> = ({
  className = "",
  logoColor = "text-black dark:text-primary",
}) => (
  <Link
    to="/"
    className={cn(`flex flex-row items-center xs:gap-2 gap-[6px])`, className)}
  >
    <img
      src={logo}
      alt="logo"
      className="sm:h-[28px] h-[24px] sm:w-[28px] w-[24px]"
    />
    <span
      className={cn(logoColor, `font-semibold sm:text-[18px] text-[16.75px]`)}
    >
      ScreenDiary
    </span>
  </Link>
);

export default Logo;
