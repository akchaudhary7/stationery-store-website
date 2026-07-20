import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className=''>
        <nav className='flex items-center justify-between px-12 h-16 lg:gap-8'>
          <NavLink to='/' className='text-2xl font-bold whitespace-nowrap'>Stationery Store</NavLink>
      <div className=''>
          <ul className='flex gap-6 text-lg items-center '>
              <NavLink to='/' className='hover:underline'>
               <p> Home </p>
               {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
              </NavLink>
              <NavLink to='/about' className='hover:underline'>
                               <p> About </p>
              {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
              </NavLink >
              <NavLink to='/contact' className='hover:underline'>
                               <p> Contact </p>
              {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
              </NavLink>
              <NavLink to='/shop' className='hover:underline'>
                               <p> Shop </p>
              {/* <hr className='underline hidden' /> */}
              </NavLink>
             
          </ul>
      </div>

      <div>

      </div>
          
        </nav>
      </header>
  )
}

export default Navbar
