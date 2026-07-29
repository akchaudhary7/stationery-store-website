import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Item from './Item';


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products])



    return (
        <div className='mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'PRODUCTS'} />
                <p className='w-full sm:w-3/4 md:w-2/3 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, assumenda omnis amet ad exercitationem veritatis porro corporis. Recusandae tenetur
                </p>
            </div>

            {/* Rendering Products */}

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {latestProducts.map((item) => (
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

export default LatestCollection
