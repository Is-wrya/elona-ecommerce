"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../context/CartContent";

export default function AddButton({item ,selectedColor, selectedSize}){

    const [ liked, setLiked ] = useState(false);
    const { addToCart } = useCart();

    return(
        <section className="product-view">
        <div className="addtocart-button">
            <div className="action-row">
            <Link href="/addtocart" className="buynow-btn" >BUY NOW</Link>
            <Link href="/addtocart"  className="add-tocart" onClick={(e) => {if (!selectedColor || !selectedSize) {
                 e.preventDefault();
                alert("please select color and size");
                return;
            }addToCart({...item,
                selectedColor, 
                selectedSize}); 
            }}>ADD TO CART
            </Link>

            <span 
                className={`wishlist ${liked ? "active" : ""}`}
                onClick={() => setLiked(!liked)}
            >
                <i className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"} />
            </span>
        </div>
        </div>  
        </section>  
    )
}