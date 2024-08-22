import { createContext, useState } from "react";
import allProductData from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Assuming you might want to use state for all_product to manage it dynamically
    const [all_product, setAllProduct] = useState(allProductData);

    const contextValue = {
        all_product,
        // You can add more values or functions here that might be needed across the app
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
