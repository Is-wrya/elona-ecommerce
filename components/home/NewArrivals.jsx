"use client";
import { useState } from "react";
import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "../../lib/products";
import ColorSelector from "../wishlist/colorselection";

export default function Newarrivals(product){
    const [ liked, setLiked ] = useState({})
    const toggleLike=(id)=>{
        setLiked((prev)=>({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const newArrivals = Products.filter(
  (item) => item.label === "new-arrivals"
);
    return(
        <>
        <section className="new-arrivals">
            <div className="container text-center">
                <h3 className="top-product ">New Arrivals</h3>
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
> 

                {newArrivals.map((item)=>(
                    <SwiperSlide>
                        <div className="product-card1">
                            <div className="product-img">
                            <img src={item.image} alt={`Products-${item.name}`}/>
                            <div className="hover-icons">
                                 <Link href={`/productview/${item.id}`}><i className="fa-regular fa-eye"></i></Link>
                                 {!item.soldout && (<button className="heart-btn" onClick={() => toggleLike(item.id)}>
                                    <i className={ liked[item.id] ? "fa-solid fa-heart" : "fa-regular fa-heart" }style={{
                                        color: liked[item.id] ? "red" : "black",
                                        }}
                                    />
                                </button>)}
                                {!item.soldout? <Link href="#" className="addtocart-sec">ADD TO CART</Link>:<button className="soldout">
                                soldout
                                </button>} 
                            </div>
                           
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

