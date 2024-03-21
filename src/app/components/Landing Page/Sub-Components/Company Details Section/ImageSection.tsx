import React from "react";
import Image from "next/image";
import bg from "../../../../assets/Images/Company Details Section Images/backgroundImage.svg"

const ImageSection = () => {
  return (
    <>
      <div className="imageSection ">
          <Image className="w-[100%]" src={bg} alt=""/>
      </div>
    </>
  );
};

export default ImageSection;
