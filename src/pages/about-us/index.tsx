import { aboutUsData } from "@/constants";
import React from "react";
import TeamCard from "./components/teamcard";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="pt-24">
      <div className="flex justify-center">
        <p className="text-3xl font-bold">Team Details</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-5 pb-5 ">
        {aboutUsData.TeamCardData.map((item, index) => {
          return (
            <div key={index}>
              <TeamCard
                profile={item.profile}
                fullname={item.fullname}
                position={item.position}
                email={item.email}
                git={item.git}
                linkedin={item.linkedin}
                insta={item.insta}
              ></TeamCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
