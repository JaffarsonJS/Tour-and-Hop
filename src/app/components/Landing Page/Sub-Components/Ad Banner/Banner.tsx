"use client"
import React from 'react'

const Banner = () => {
    let handlechange=()=>{
        
    }
  return (
    <div className='text-center flex flex-col justify-center items-center text-white p-[30px] gap-[32px] ' style={{borderRadius: '24px',
    background: 'rgba(134, 200, 196, 0.50)'}}>
      <h1 className='text-[32px] font-extrabold	'>Get Special Offers for Organizations</h1>
      <p className='text-lg	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos`s standard dummy text ever since the 1500s.</p>
      <button onClick={handlechange} className='text-[20px] font-semibold px-[24px] py-[10px] rounded-[50px]' style={{background:"#1D7B83"}}>
        Contact Us
      </button>
    </div>
  )
}

export default Banner
