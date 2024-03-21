import React from "react";
import ImageSection from "./Sub-Components/Company Details Section/ImageSection";
import CompanyDetailsSection from "./Sub-Components/Company Details Section/CompanyDetailsSection";
import Header from "./Sub-Components/Trending Destinations Section/Header";
import Body from "./Sub-Components/Trending Destinations Section/Body";
import Banner from "./Sub-Components/Ad Banner/Banner";
import ImageDiv from "./Sub-Components/Ad Banner/ImageDiv";
import PackageTourHeadSec from "./Sub-Components/Tours Section/PackageTourHead";
import TourDetaoilsBody from "./Sub-Components/Tours Section/TourDetaoilsBody";
import "../../styles/landingPage.css";

const LandingPage = () => {
  return (
    <>
      {/* COMPANY DETAILS */}
      <div className="companyDetailsDiv">
        <div className="w-[450px] h-[650px]" style={{ gridArea: "fir" }}>
          <ImageSection />
        </div>

        <div className="w-[700px] h-[415px] " style={{ gridArea: "sec" }}>
          <CompanyDetailsSection />
        </div>
      </div>

      {/* TRENDING DESTINATIONS */}
      <div className="w-[1275px] h-[429px] flex flex-col gap-[32px] ml-[322px] mr-[323px] mt-[164px]">
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </div>

      {/* AD BANNER */}
      <div className="bannerDiv w-[1920px] h-[452px] mt-[141px] ">
        <div className="ml-[345px] mr-[314px] mb-[4rem] w-[569px] h-[317px]">
          <Banner />
        </div>
        <div>
          <ImageDiv />
        </div>
      </div>

      {/* POPULAR TOURS */}
      <div className="mb-[50rem] w-[1275px] h-[429px] flex flex-col gap-[32px] ml-[322px] mr-[323px] mt-[164px]">
        <div className="">
          <PackageTourHeadSec />
        </div>
        <div>
          <TourDetaoilsBody />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
