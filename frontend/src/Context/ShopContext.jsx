import { createContext, useState } from "react";
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

    console.log(cartItems);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = {
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart,
        // You can add more values or functions here that might be needed across the app
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
