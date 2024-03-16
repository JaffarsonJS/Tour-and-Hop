"use client"
import React, { ChangeEvent, useState } from "react";
import decBtn from "../../../assets/SVG/decrement-btn.svg"
import incBtn from "../../../assets/SVG/increment-btn.svg"
import Image from 'next/image';

type event=any

const Button = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= 4) {
      setCount(newValue);
    }
  };

  return (
    <>
      <div className="flex w-[114px] h-[32px]  justify-center items-center">
        {/* DECREMENT BUTTON */}
        <div className="w-[98px] h-[24px] flex gap-[16px] items-center">
          <div onClick={handleDecrement}>
            <Image src={decBtn} alt="" className=" dark:border-gray-600 hover:bg-gray-300 focus:ring-gray-500 focus:bg-gray-200" />
          </div>

          {/* INPUT */}
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            data-input-counter-min="1"
            data-input-counter-max="4"
            aria-describedby="helper-text-explanation"
            className="w-[18px] h-[18px]  border-x-0 tesxt-[16px] font-medium text-center  text-sm focus:ring-blue-500 focus:border-blue-500 py-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 "
            placeholder=""
            value={count}
            onChange={handleChange}
            required
          />

          {/* INCREMENT BUTTON */}

          <div onClick={handleIncrement}>
           <Image src={incBtn} alt="" className="dark:border-gray-600 hover:bg-gray-300 focus:ring-gray-500 focus:bg-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
