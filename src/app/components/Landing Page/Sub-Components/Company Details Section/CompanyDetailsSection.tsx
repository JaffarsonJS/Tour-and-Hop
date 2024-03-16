import React, { FC } from "react"
import list from "../../data/CompanyExperience"

const CompanyDetailsSection: FC = () => {
  
  return (
    <>
      <div className='flex flex-col'>
        <p className='text-base	font-semibold opacity-60 text-black' style={{lineHeight:"19.36px"}}>WHY US</p>
        <p className='text-[32px] font-extrabold' style={{lineHeight:"38.73px"}}>We are the best company for your visit</p>
        <p className='text-lg	leading-8	font-normal py-[32px]' style={{fontFamily:"Inter-Light"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <ul className='w-[494px] h-[90px] flex justify-between'>
          {
          list.map(({counts, content}: {counts: string, content: string}, index: number) => {
            return (
              <li key={index} className="w-[84px] h-[90px] flex flex-col justify-between">
                <h1 className='text-[32px] leading-8 font-bold' style={{lineHeight:"32px",color:"#287D5F"}}>{counts}</h1>
                <h3 className='opacity-60 text-base' style={{lineHeight:"26px",fontFamily:"Inter-Light"}}>{content}</h3>
              </li>
            )
          })
          }
        </ul>
      </div>
    </>
  )
}

export default CompanyDetailsSection
