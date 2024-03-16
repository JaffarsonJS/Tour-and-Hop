import React from 'react'
import plus from "../../../assets/SVG/plus.svg"

const Footer = () => {
  return (
    <>
     <div className="flex justify-between items-center">
                <button className="p-[8px] w-[167px] h-[33px] text-sm flex justify-center items-center gap-2 rounded-lg " style={{border:"1px solid #1D7B83"}}>
                    <span  className="text-sm font-medium h-[17px] w-[143px]" style={{color:"#1D7B83"}}>Add Another Room</span>
                </button>

                <button className="pr-[8px] py-[8px] w-[76px] h-[33px] text-sm text-white flex justify-center items-center gap-2 rounded-lg " style={{border:"1px solid #1D7B83",background:"#1D7B83"}}>
                    APPLY
                </button>
            </div> 
    </>
  )
}

export default Footer
