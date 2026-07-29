import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Item from './Item';


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestSeller))
        setBestSeller(products.slice(0, 4));
    }, [products])



    return (
        <div className='mt-10 mx-35'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, assumenda omnis amet ad exercitationem veritatis porro corporis. Recusandae tenetur
                </p>
            </div>

            {/* Rendering Products */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {bestSeller.map((item) => (
                    <Item
                        key={item._id}
                        id={item._id}
                        image={item.image[0]}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>


        </div>
    )
}

export default BestSeller
