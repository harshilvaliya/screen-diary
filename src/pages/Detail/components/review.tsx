import React from "react";

type Props = {};

const Review = (props: Props) => {
  return (
    <section className="sm:py-[20px]  xs:py-[18.75px] py-[16.75px] font-nunito max-w-[1140px] mx-auto md:px-8 sm:px-6 px-4 xl:px-0">
      <div className=" mx-auto flex flex-col md:gap-2 sm:gap-[6px] xs:gap-1 gap-[2px]">
        <div className="flex flex-col md:flex-row gap-2 ">
          <div className="flex-1 text-white flex-col">
            <div className=" text-4xl py-2">
              <h1>Reviews</h1>
            </div>
            <div className="flex">
              <img src="" alt="" />
              <p>Vishwang Suthar</p>
            </div>
            <div className="border-b-2 border-slate-400 px-2">
              <p>
                A controversial adaptation of the controversial Brett Easton
                Ellis novel, this is actually a brilliantly conceived movie that
                sheds new life on the disturbed world of the serial killer – and
                as such may be the most innovative "psycho" movie since, well,
                PSYCHO! Filmly embedded in a hilariously '80s setting, this is
                both a thriller and a biting satire of the decade, with tons of
                subtle comedy and lashings of black humour to make the grisly
                subject matter a lot easier to digest.
              </p>
            </div>
          </div>
          <div className="flex-1 min-h-20vh">
            <textarea
              rows="6"
              placeholder="Add a review..."
              cols="50"
              className="bg-slate-500 min-h-20vh rounded-md p-2 outline-none border-black border-2 focus:ring-0 active:ring-0"
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
