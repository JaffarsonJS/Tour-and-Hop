import React from 'react'
import image from "../../../../assets/Images/Ad Banner/positive smie.png"
import Image from 'next/image';

const ImageDiv = () => {
  return (
    <div className='w-[840px] h-[573px] mb-[125px]'>
      <Image src={image} className='' alt=''/>
    </div>
  )
}

export default ImageDiv
