import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';


const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname)
        if (location.pathname.includes('shop')){
            setVisible(true);
        }
        else{
            setVisible(false)
        }
    }, [location])


    return showSearch && visible ? (
        <div className='bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type="text"
                    placeholder='Search'
                />
                <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
            </div>
            <button onClick={()=> setShowSearch(false)}>
            <RxCross2 className='inline size-5 cursor-pointer' />

            </button>

        </div>
    ) : null
}

export default SearchBar
