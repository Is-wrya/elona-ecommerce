
"use client";

import { useState } from "react";
import Link from "next/link";
import Banner from "../../components/wishlist/banner";
import WishlistCard from "../../components/wishlist/details";
import Products from "../../lib/products";

export default function Wishlist(){
    
    const [wishlist, setWishlist] = useState(Products);
    const handleRemove = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };
    return(
        <>
        <Banner title ="Whishlist"/>
            <section className="wishlist-cont">
                <div className="container">
                    <div className="wishlist-name">
                        <h3>Wishlist</h3>
                        <p>
                            <Link href="/" style={{fontSize:"12px"}}>home</Link> / <Link href="/wishlist" style={{fontSize:"12px"}}>wishlist</Link> 
                        </p>
                    </div>
                    {wishlist.length === 0 ? (
                        <div className="empty-wishlist">
                        <h4>Your Wishlist is Empty Now <i class="fa-solid fa-heart-crack heart"></i></h4>
                        <p>Start adding your favorite products</p>
                        <Link href="/products" className="explore">Explore</Link>
                        </div>
                    ) : (
                    <div className="row">
                        {Products.map((item)=>(
                            <div className="col-md" key={item.id}>
                                <WishlistCard product={item}
                                 onRemove={handleRemove} />
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            </section>
        </>
    )
}