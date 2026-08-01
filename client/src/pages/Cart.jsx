import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { RiDeleteBinLine } from "react-icons/ri";
import CartTotal from '../components/CartTotal';


const Cart = () => {

    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);

    useEffect(() => {

        const tempData = [];
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                tempData.push({
                    _id: items,
                    quantity: cartItems[items]
                })
            }
        }
        setCartData(tempData);
    }, [cartItems])

    return (
        <div className='max-w-7xl mx-auto px-10 pt-14'>
            <div className='text-2xl mb-3'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div>
                {
                    cartData.map((item) => {
                        const productData = products.find((product) => product._id === item._id);

                        return (
                            <div key={item._id} className='py-4 border-t border-b border-gray-200 text-gray-700 grid grid-cols-[4fr_0,5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20'
                                        src={productData.image[0]} alt="" />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{currency} {productData.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        updateQuantity(item._id, value === '' ? 0 : Number(value));
                                    }}
                                    className='border border-gray-200 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number"
                                    min={1}
                                    value={item.quantity} />
                                <button onClick={() => updateQuantity(item._id, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer'>
                                    <RiDeleteBinLine className='size-5.5' />
                                </button>
                            </div>
                        )
                    })
                }
            </div>


            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal />
                    <div className='w-full text-end'>
                        <button 
                        onClick={() => navigate('/place-order')}
                        className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
