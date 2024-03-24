import React from 'react'

import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { GrTable } from "react-icons/gr";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";


export default function Sidebar() {
  return (
    <div className='bg-[#B25304] h-screen text-white px-4'>
        <div className='px-[15px] py-[30px] flex justify-center items-center border-b-[1px] border-[#ededed]/[0.3]'>
            <h1 className='text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
        </div>

        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3] font-bold'>
            <IoHomeOutline />
            <p>Dashboard</p>
        </div>

        <div className='pt-[15px] border-b-[1px] border-[#ededed]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <SiPowerpages />
                    <p className='text-[14px] leading-[20px]'>Pages</p>
                </div>
                <IoIosArrowForward />
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <GrTable  />
                    <p className='text-[14px] leading-[20px]'>Tables</p>
                </div>
                <IoIosArrowForward />
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <IoStatsChartSharp  />
                    <p className='text-[14px] leading-[20px]'>Charts</p>
                </div>
                <IoIosArrowForward />
            </div>
        </div>


        <div className='pt-[15px] border-b-[1px] border-[#ededed]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONS</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <IoSettingsOutline />
                    <p className='text-[14px] leading-[20px]'>Components</p>
                </div>
                <IoIosArrowForward />
            </div>

            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <GrServices />
                    <p className='text-[14px] leading-[20px]'>Utilities</p>
                </div>
                <IoIosArrowForward />
            </div>
        </div>


        <div className='flex justify-center pt-4'>
            <div className='h-[40px] w-[40px] bg-[#8D4204] rounded-full flex justify-center items-center cursor-pointer'>
                <FaRegArrowAltCircleLeft />
            </div>
        </div>

        <div className='bg-[#8d4204] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[10px] rounded-[5px]'>
            <FaBolt />
            <p className='text-center text-white/[0.4] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='bg-[#07B458] rounded-[5px] px-2 py-1 font-bold'>Upgrade to Pro!</button>
        </div>


    </div>
  )
}
