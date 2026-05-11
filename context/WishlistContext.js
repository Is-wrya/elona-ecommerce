"use client";

import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({children}) {
    const[wishlistItems, setWishlistItems] = useState([]);
    const addToWishlist = (product) => {
        setWishlistItems((prev) => {
            const exist = prev.find((item) => item.id === product.id);
            if(exist)
                return prev
            return[...prev, product];
        });
    };
    const removeFromWishlist = (id) =>{
        setWishlistItems((prev) => 
        prev.filter((item) => item.id !==id)
        );
    };
    const isInWishlist = (id) =>{
        return wishlistItems.some((item)=> item.id === id);
    };
    return(
        <WishlistContext.Provider 
         value={{
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
         }}
         >
            {children}
         </WishlistContext.Provider>
    );
}

export const useWishlist = () => useContext(WishlistContext);