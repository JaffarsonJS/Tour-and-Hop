"use client"
import React, { useState } from 'react'

// type index=any
const AgeofChild = () => {
    let childcounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (index : number) => {
        console.log(index)
        setSelectedButton(index);
    };
    return (
        <>
            <div className="w-[333px] h-[68px] pr-0.5 pb-0.5 pl-px flex flex-col gap-[11px]">

                <p className="w-[93px] h-[17px] text-[14px] text-sm font-medium" style={{ color: "#827E7E" }}>Age of Child 1</p>

                <div className="h-[33px] w-[329px] flex border">
                    {
                        childcounts.map((ele, index) => {
                            return <button key={index} onClick={() => handleButtonClick(index)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="text-[15px] flex justify-center items-center dark:border-gray-600 hover:bg-gray-200 px-[0.535rem] py-2 h-[100%] focus:ring-gray-500 focus:bg-gray-200 focus:ring-1 ">
                                {ele}
                            </button>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AgeofChild
