import React, { FC } from 'react'
import countries from "../../data/TrendingCountries"
import Image from 'next/image';

const Body:FC = () => {
    
  return (
    <div className='flex gap-[25px]'>
      {
        countries.map(({src,place}, index) => {
          return (
            <div key={index} className='w-[300px] h-[341px]'>
             <Image src={src} alt='' priority={true} style={{width:"300px",height:"300px"}} />
             <p className='text-[24px] text-center font-bold' style={{}}>{place}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Body
