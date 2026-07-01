"use client";

import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "../../lib/products";
import ColorSelector from "../wishlist/colorselection";
import { useWishlist } from "../../context/WishlistContext";

export default function FeaturedProduct(){

    const FeaturedProducts = Products.filter((item)=>item.label === "Featured")
    const {  addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const toggleLike = (item) => {
      if (isInWishlist(item.id)) {
        removeFromWishlist(item.id);
      } else {
        addToWishlist(item);
      }
    };
    return(
        <>
        <section className="featured-products">
            <div className="container text-center">
                <h3 className="top-product ">Featured Products</h3>
            </div>
            <div className="container">
                <Swiper
                modules={[Autoplay]}
                slidesPerGroup={1}
                speed={600}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation
                breakpoints={{
                    320: { slidesPerView: 2,spaceBetween:10 },
                    576: { slidesPerView: 3, spaceBetween:20},
                    768: { slidesPerView: 3, spaceBetween:20},
                    1024: { slidesPerView: 5, spaceBetween:30
                    },
                }}
> {FeaturedProducts.map((item)=>(
                    <SwiperSlide key={item.id}>
                        <div className="product-card1">
                            <div className="product-img">
                            <img src={item.image} alt={`Products-${item.name}`}/>
                            <div className="hover-icons">
                                <Link href={`/productview/${item.id}`} className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>

                                {/* {!item.soldout && (
                                <button className="addtocart-sec" onClick={() => addToCart(item)}>ADD TO CART</button>
                                )} */}
                                <button className="heart-btn" onClick={() => {console.log("clicked", item.id);
                                toggleLike(item);}}>
                                                        <i className={ isInWishlist(item.id) ? "fa-solid fa-heart" : "fa-regular fa-heart" }style={{
                                                            color: isInWishlist(item.id) ? "red" : "black",
                                                            }}
                                                        />
                                                    </button>
                            </div>
                                {item.soldout && (
                                    <button className="soldout">Soldout</button>
                                )}
                           
                            </div>
                            <div className="details">
                            <h5 className="heading">{item.name}</h5>
                            <h5>$ {item.price}</h5>
                        </div>
                        <div className="color-sel1">
                             {item.colors && (
                                <ColorSelector colors={item.colors}/>
                            )}
                        </div>
                        </div>
                        
                    </SwiperSlide>
                ))}
         
         
                </Swiper>
            </div>
            <div className="button">
                <Link href="/products"><button className="primary-button">SHOP NOW</button></Link>
            </div>
        </section>
       
        </>
    );
    
}

