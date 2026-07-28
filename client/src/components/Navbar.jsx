import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoMdMenu, IoIosArrowBack } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

import { assets } from '../assets/assets';

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <header className=''>
      <nav className='flex items-center justify-between px-2 md:px-6 ak:px-16 h-16 lg:gap-8'>
        <NavLink to='/' className='text-xl md:text-2xl font-bold whitespace-nowrap'>Stationery Store</NavLink>
        <div className=''>
          <ul className='hidden ak:flex gap-6 text-lg items-center '>
            <NavLink to='/' className='hover:underline'>
              <p> Home </p>
              {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
            </NavLink>
            <NavLink to='/shop' className='hover:underline'>
              <p> Shop </p>
              {/* <hr className='underline hidden' /> */}
            </NavLink>
            <NavLink to='/about' className='hover:underline'>
              <p> About </p>
              {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
            </NavLink >
            <NavLink to='/contact' className='hover:underline'>
              <p> Contact </p>
              {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
            </NavLink>

          </ul>
        </div>

        <div className='flex items-center gap-6'>
          <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
          <div className='group relative'>
            <CiUser className='size-5 cursor-pointer' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col  gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>

              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <IoCartOutline className='size-5' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>10</p>
          </Link>
            {/* <i onClick={() => setVisible(true)} className='ak:hidden' class="fa-solid fa-bars cursor-pointer"></i> */}
            {/* <img onClick={()=> setVisible(true)} className='ak:hidden w-5 cursor-pointer' src={assets.menu_icon} alt="" /> */}
            <button onClick={()=> setVisible(true)} >

              <BiMenuAltRight className='ak:hidden w-5 cursor-pointer'/>
              </button>


        </div>

              {/* Sidebar menu for small screen */}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-600'>
                      <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <IoIosArrowBack  />
                        <p >Back</p>
                      </div>
                      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/shop'>Shop</NavLink>
                      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
                    </div>
                </div>



      </nav>
    </header>
  )
}

export default Navbar
