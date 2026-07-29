import React, { useContext } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


const Item = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    const handleAddToCart = () => {
        console.log("Product added to cart");
    };

    return (
        <Link className='cursor-pointer' to={`/products/${id}`}>
            <div className="w-full">
                {/* Product image box */}

                <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-contain p-3"
                    />
                </div>

                {/* Product name */}
                <h3 className="mt-4 text-[19px] font-bold text-black sm:text-[19px]">
                    {name}
                </h3>

                {/* Single product price */}
                <p className="mt-3 text-[19px] font-bold text-red-500 sm:text-[19px] ">
                    {currency} {price}
                </p>

                {/* Add-to-cart button */}
                <button
                    type="button"
                    onClick={handleAddToCart}
                    className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-200 to-amber-400  py-2 text-[19px] font-bold text-black transition hover:brightness-95"
                >
                    {/* Cart icon */}
                    <IoCartOutline className='' />

                    {/* Button text */}
                    Add To Cart
                </button>

            </div>

        </Link>

    )
}

export default Item;