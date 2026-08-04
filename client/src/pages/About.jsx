import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <div className='text-3xl text-center pt-8'>
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[600px]' src={assets.about_us} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>At our stationery store, we believe that every great idea begins with the right tools. Whether you're a student, professional, artist, or creative enthusiast, we're dedicated to providing high-quality stationery that inspires productivity and creativity.</p>
                    <p>From everyday office essentials to premium notebooks, writing instruments, art supplies, and study accessories, we carefully select products that combine quality, functionality, and value. Our goal is to make your shopping experience simple, reliable, and enjoyable while helping you stay organized and bring your ideas to life.</p>
                    <p>We're more than just a stationery store—we're your creative partner. Thank you for choosing us and being part of our journey.</p>
                </div>
            </div>

            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHHOSE US'}/>
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>

            <NewsLetterBox />
        </div>
    )
}

export default About
