import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {
  profile: string | StaticImport;
  fullname: string | undefined;
  position: string | undefined;
  email: string | undefined;
  git: string | undefined;
  linkedin: string | undefined;
  insta: string | undefined;
};

function TeamCard({
  profile,
  fullname,
  position,
  email,
  git,
  linkedin,
  insta,
}: Props) {
  return (
    <section className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center h-80 bg-amber-200 rounded-2xl shadow-xl group hover:-translate-y-5 transition-all duration-300">
      <img
        className="inline-flex object-cover border-4 border-yellow-500 dark:border-yellow-400 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-yellow-500/100 dark:shadow-yellow-500/100 bg-yellow-50 dark:bg-yellow-700 text-yellow-500 dark:text-yellow-300 h-24 w-24 group-hover:scale-110 duration-300"
        src={profile}
        alt={"▼・ᴥ・▼"}
        height={96}
        width={96}
      ></img>
      <p className="text-heading6 pt-4">{fullname}</p>
      <p className="text-subtitle1">{position}</p>
      <p className="text-caption1">{email}</p>
      <ul className="flex flex-row mt-2">
        <li className="mx-2 hover:scale-150 duration-300">
          <a href={git} target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
        </li>

        <li className="mx-2 hover:scale-150 duration-300">
          <a href={linkedin} target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>

        <li className="mx-2 hover:scale-150 duration-300">
          <a href={insta} target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default TeamCard;
