import React from 'react';
import { RiExchangeFundsFill } from "react-icons/ri";
import { assets } from '../assets/assets';
import { RiCustomerService2Line } from "react-icons/ri";



const Policy = () => {
    return (
        <div className='mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700'>
            <div>
                <RiExchangeFundsFill className=' size-14 m-auto mb-5' />
                <p className='font-semibold text-xl'>Easy Exchange</p>
                <p className='text-gray-400'>We offer hassle free exchange policy</p>
            </div>

            <div>
                <img src={assets.quality} alt="qualitybadge" className='size-14 m-auto mb-5' />
                <p className='font-semibold text-xl'>7 Days Return Policy</p>
                <p className='text-gray-400'>We provide 7 days free return policy</p>
            </div>

            <div>
                <RiCustomerService2Line className='size-14 m-auto mb-5'/>
                <p className='font-semibold text-xl'>Best Customer Support</p>
                <p className='text-gray-400'>We provide 24/7 customer support</p>
            </div>

        </div>
    )
}

export default Policy
