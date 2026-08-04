import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';


const Contact = () => {
	return (
		<div className='max-w-7xl mx-auto px-10'>
			<div className='text-center text-3xl pt-10'>
				<Title text1={'CONTACT'} text2={'US'} />
			</div>

			<div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
				<img className='w-full md:max-w-[440px]' src={assets.contact_img} alt=""/>
				<div className='flex flex-col justify-center items-start gap-6'>
					<p className='font-semibold text-xl text-gray-600'>Our Store</p>
					<p className='text-gray-500'>Tamnagar, Butwal, Rupandehi</p>
					<p className='text-gray-500'>Tel: +977 9800000000 <br /> Email: stationerystore@gmail.com</p>
				</div>
			</div>

			<NewsLetterBox/>

		</div>
	)
}

export default Contact
