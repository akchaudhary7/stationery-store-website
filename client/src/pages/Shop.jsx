import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { IoIosArrowForward } from "react-icons/io";
import Title from '../components/Title';
import Item from '../components/Item';



const Shop = () => {

    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    useEffect(() => {
        setFilterProducts(products)
    }, []);

    useEffect(() => {
        console.log(category)
    }, [category]);

    useEffect(() => {
        console.log(subCategory)
    }, [subCategory]);



    return (
        <div className='flex flex-col max-w-7xl mx-auto px-10 sm:flex-row gap-1 sm:gap-10 pt-10'>

            {/* Filter Options  */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <IoIosArrowForward className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />

                </p>

                {/* Category Filter  */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Pen"} onChange={toggleCategory} /> Pen
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Notebook"} onChange={toggleCategory} /> Notebook
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Nobel"} onChange={toggleCategory} /> Nobel
                        </p>
                    </div>
                </div>

                {/* Sub-Category Filter  */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Writing"} onChange={toggleSubCategory} /> Writing
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Reading"} onChange={toggleSubCategory} /> Reading
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Accessories"} onChange={toggleSubCategory} /> Accessories
                        </p>
                    </div>
                </div>
            </div>


            {/* Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'PRODUCTS'} />
                    {/* Product Sort  */}
                    <select className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>


                {/* Map Products  */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <Item
                                key={index}
                                id={item._id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                            />

                        ))
                    }
                </div>

            </div>


        </div>
    )
}

export default Shop
