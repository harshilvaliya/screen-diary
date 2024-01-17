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
    <section className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center h-80 bg-rose-500 rounded-2xl shadow-xl group hover:-translate-y-5 transition-all duration-300">
      <img
        className="inline-flex object-cover border-4 border-red-200 dark:border-green-800 rounded-full  h-24 w-24 group-hover:scale-110 duration-300"
        src={profile}
        alt={"▼・ᴥ・▼"}
        height={96}
        width={96}
      ></img>
      <p className="text-2xl font-medium pt-4">{fullname}</p>
      <p className="text-lg font-normal">{position}</p>
      <p className="text-sm">{email}</p>
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
