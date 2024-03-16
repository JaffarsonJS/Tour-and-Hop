"use client";
import React, { FC, Fragment } from "react";
import Image from "next/image";
import rupee from "../../../../assets/SVG/rupee.svg";
import calender from "../../../../assets/SVG/calendar.svg";
import people from "../../../../assets/SVG/people.svg";
import data from "../../data/packagesData";

const TourDetaoilsBody: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {
                data.map(({ src, tourName, price, about, id }) => {
                return (
                  <div key={id} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <Image src={src} alt="" className="w-[400px] h-[420px] rounded-3xl object-cover	"/>
                    <div className="mt-6 text-2xl font-bold text-zinc-800">
                      {tourName}
                    </div>
                    <div className="flex gap-2.5 items-center self-start mt-3 whitespace-nowrap">
                      <div className="grow self-stretch my-auto text-lg font-semibold text-zinc-800">
                        from
                      </div>
                      <Image
                        src={rupee}
                        alt=""
                      />
                      <div className="self-stretch text-2xl font-extrabold text-teal-700">
                        {price}
                      </div>
                    </div>
                    <div className="flex gap-5 pr-20 mt-3 w-full text-base font-semibold text-center text-teal-700 max-md:pr-5">
                      <div className="flex flex-1 gap-1.5 justify-center whitespace-nowrap">
                        <Image
                          src={calender}
                          alt=""
                        />
                        <div className="my-auto">MONDAY</div>
                      </div>
                      <div className="flex flex-1 gap-1.5 justify-center">
                        <Image
                          src={people}
                          alt=""
                        />

                        <div className="my-auto">10-30 PP</div>
                      </div>
                    </div>
                    <div className="mt-3 text-lg leading-7 text-zinc-800">
                      {about}
                    </div>
                    <button className="pointer justify-center items-center px-16 py-4 mt-6 text-xl font-bold text-center text-teal-700 rounded-lg border border-teal-700 border-solid max-md:px-5">
                      Book Now
                    </button>
            </div>
          </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default TourDetaoilsBody;
