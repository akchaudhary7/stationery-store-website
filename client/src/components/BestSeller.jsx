import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Item from './Item';


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestSeller))
        setBestSeller(products.slice(0, 6));
    }, [products])



    return (
        <div className='mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-full sm:w-3/4 md:w-2/3 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, assumenda omnis amet ad exercitationem veritatis porro corporis. Recusandae tenetur
                </p>
            </div>

            {/* Rendering Products */}

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ak:grid-cols-5 lg:grid-cols-6 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (

                   <div
                     key={item._id}
                     className={index >= 4 ? 'hidden ak:block' : ''}
                  >
                        <Item
                            key={item._id}
                            id={item._id}
                            image={item.image[0]}
                            name={item.name}
                            price={item.price}
                            />
                            </div>
                ))}
            </div>
        </div>
    )
}

export default BestSeller
