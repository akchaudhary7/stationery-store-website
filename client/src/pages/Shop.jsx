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
    // const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant')

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    };

    // const toggleSubCategory = (e) => {
    //     if (subCategory.includes(e.target.value)) {
    //         setSubCategory(prev => prev.filter(item => item !== e.target.value))
    //     }
    //     else {
    //         setSubCategory(prev => [...prev, e.target.value])
    //     }
    // };

    // const applyfilter = () => {
    //     let productsCopy = products.slice();

    //     // Filter
    //     if (category.length > 0) {
    //         productsCopy = productsCopy.filter(item => category.includes(item.category));
    //     }

    //     // Sort
    //     switch (sortType) {
    //         case 'low-high':
    //             setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
    //             break;

    //         case 'high-low':
    //             setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
    //             break;

    //         default:
    //             applyfilter();
    //             break;
    //     }

    //     setFilterProducts(productsCopy)
    // }

    const applyfilter = () => {
        let productsCopy = [...products];

        // Filter
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item =>
                category.includes(item.category)
            );
        }

        // Sort
        switch (sortType) {
            case "low-high":
                productsCopy.sort((a, b) => a.price - b.price);
                break;

            case "high-low":
                productsCopy.sort((a, b) => b.price - a.price);
                break;

            default:
                break;
        }

        setFilterProducts(productsCopy);
    };

    // const sortProduct = () => {
    //     let fpCopy = filterProducts.slice();
    // }


    // useEffect(() => {
    //     console.log(category)
    // }, [category]);

    // useEffect(() => {
    //     console.log(subCategory)
    // }, [subCategory]);

    useEffect(() => {
        applyfilter();
    }, [category, sortType, products]);

    // useEffect(()=>{
    //     sortProduct();
    // },[sortType])


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
                            <input className="w-3" type="checkbox" value={"Writing Materials"} onChange={toggleCategory} /> Writing Materials
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Notebooks"} onChange={toggleCategory} /> Notebooks
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Books"} onChange={toggleCategory} /> Books
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Nobels"} onChange={toggleCategory} /> Nobels
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"School Items"} onChange={toggleCategory} /> School Items
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Office Items"} onChange={toggleCategory} /> Office Items
                        </p>
                        <p className='flex gap-2'>
                            <input className="w-3" type="checkbox" value={"Accessories"} onChange={toggleCategory} /> Accessories
                        </p>

                    </div>
                </div>

                {/* Sub-Category Filter  */}
                {/* <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
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
                </div> */}
            </div>


            {/* Right Side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'PRODUCTS'} />
                    {/* Product Sort  */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        value={sortType}
                        className='border-2 border-gray-300 text-sm px-2'>
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
