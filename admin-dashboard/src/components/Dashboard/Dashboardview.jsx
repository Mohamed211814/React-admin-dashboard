import React, { useState } from 'react'

import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

import eren from '../../assets/eren.jpeg'


export default function Dashboardview() {

    const [open , setOpen] = useState(false)

    const showDropDown = () => {
        setOpen(!open)
    }

  return (
    <div className='flex justify-between items-center h-[70px] shadow-md'>
        <div className='flex items-center pl-5'>
            <input type="text" className='bg-white/90 h-[40px] w-[350px] outline-none pl-[13px] rounded-[5px] placeholder:text-[14px] border'
             placeholder='Search For...'/>
            <div className='bg-[#B25304] text-white p-[14px] cursor-pointer rounded-tr-[5px]'><FaSearch /></div>
        </div>

        <div className='flex items-center gap-[35px]'>
            <div className='flex gap-[25px] items-center'>
                <FaRegBell />
                <FaRegEnvelope />
            </div>


            <div className='flex items-center gap-[15px] pr-10' onClick={showDropDown}>
                <p>Mohammed abde</p>
                <div>
                    <img src={eren} alt="" className='w-12 h-12 rounded-full cursor-pointer relative'/>
                </div>

                {
                    open &&
                    <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135] top-16 z-20 right-10 pt-[15px]'>
                        <p className='cursor-pointer hover:bg-red-200 text-center font-semibold'>Profile</p>
                        <p className='cursor-pointer hover:bg-red-200 text-center font-semibold'>Settings</p>
                        <p className='cursor-pointer hover:bg-red-200 text-center font-semibold'>Log out</p>
                    </div>
                }

            </div>
        </div>
    </div>
  )
}
