import { createContext, useEffect, useState } from "react";
import { products } from '../assets/assets';
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'Rs';
    const delivery_fee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId) => {
        let cartData = { ...cartItems };

        if (cartData[itemId]) {
            cartData[itemId] = cartData[itemId] + 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
    };

    const getCartCount = () => {

        let totalCount = 0;

        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items]
            }
        }
        return totalCount;
    }

    //     useEffect(() => {
    //   const totalItems = getCartCount();

    //   console.log("Total cart items:", totalItems);
    // }, [cartItems]);

    const updateQuantity = async (itemId, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);

            if (itemInfo && cartItems[itemId] > 0) {
                totalAmount += itemInfo.price * cartItems[itemId]
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        showSearch, setShowSearch, search, setSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount,
        navigate
    }

    return (

        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
