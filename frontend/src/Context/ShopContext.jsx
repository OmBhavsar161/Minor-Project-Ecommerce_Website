import { createContext, useState, useEffect } from "react";
import allProductData from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = (allProductData) => {
    let cart = {};
    for (let index = 0; index < allProductData.length; index++) {
        cart[index] = 0;
    }
    return cart; // Return the cart object
};

const ShopContextProvider = (props) => {
    // Initialize state for all products
    const [all_product, setAllProduct] = useState(allProductData);
    
    // Initialize state for cart items
    const [cartItems, setCartItems] = useState(() => getDefaultCart(allProductData));

    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]); // Log cart items when they change

    const addToCart = (itemId, quantity) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + quantity };
            return newCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
    };

    const contextValue = {
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
