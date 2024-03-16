import React from 'react'
import Image from 'next/image';
import prebtn from "../../../../assets/SVG/previousBtn.svg"
import nxtbtn from "../../../../assets/SVG/next-Btn.svg"

const Header = () => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-[32px] font-bold'>Trending Destinations</h1>

      <div className=''>
        <button className='w-[50px] h-[50px]'>
            <Image src={prebtn} alt=''/>
        </button>
        <button className='w-[50px] h-[50px]'>
            <Image src={nxtbtn} alt=''/>
        </button>
      </div>
    </div>
  )
}

export default Header
