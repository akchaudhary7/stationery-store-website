import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-10 md:gap-14 my-10 mt-20 md:mt-40 text-sm'>
                <div>
                    <p className='text-xl md:text-2xl font-bold whitespace-nowrap mb-5 w-32'>Stationery Store</p>
                    <p className='max-w-md text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci harum, et aperiam eum nihil at delectus tempore aut tenetur?
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+9779800000000</li>
                        <li>contact@stationerystore.com</li>
                    </ul>
                </div>


            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ stationerystore.com - All Right Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
