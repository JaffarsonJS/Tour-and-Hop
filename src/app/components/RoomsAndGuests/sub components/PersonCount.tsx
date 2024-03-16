import React from 'react'
import Button from './IncrementAndDecrementButtons'

const PersonCount = () => {
    
  return (
    <>
      <div className="">
                <h1 className='text-base font-medium opacity-80	' style={{}}>
                    Room 1
                </h1>


                <div className="flex justify-between w-[333px] h-[62px] px-[8px] py-[4px]" >
                    
                    <div className="adult-whole-button-sec ">
                        <label htmlFor="quantity-input" className="w-[100%] h-[100%] text-[14px] font-medium" style={{ color: "#827E7E" }}>Adults - <span style={{ color: "#827E7E" }} className='text-[11px] opacity-80'>Above 12 Years</span></label>
                        {/* WHOLE BUTTON */}
                        <Button/>
                    </div>

                    <div className="children-whole-button-sec ">
                        <div className="">
                            <label htmlFor="quantity-input" className="w-[137px] h-[17px] text-[14px] font-medium" style={{ color: "#827E7E" }}>Children - <span style={{ color: "#827E7E" }} className='text-[11px] opacity-80'>Below 12 Years</span></label>
                            {/* WHOLE BUTTON */}
                            <Button/>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PersonCount
