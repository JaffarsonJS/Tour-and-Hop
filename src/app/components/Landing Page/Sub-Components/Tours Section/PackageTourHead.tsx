import React from "react";
import Image from "next/image";
import prebtn from "../../../../assets/SVG/previousBtn.svg";
import nxtbtn from "../../../../assets/SVG/next-Btn.svg";

const PackageTourHeadSec = () => {
  return (
    <>
      <div className="flex gap-5 px-5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-3xl font-bold text-zinc-800">
          Explore Our Popular Tours
        </div>
        <div className="flex gap-5 justify-between">
          <a
            href=""
            className="my-auto text-xl text-center text-teal-700 underline"
          >
            Show All
          </a>
          <div className="flex gap-4">
            <button className="w-[50px] h-[50px]">
              <Image src={prebtn} alt="" />
            </button>
            <button className="w-[50px] h-[50px]">
              <Image src={nxtbtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageTourHeadSec;
