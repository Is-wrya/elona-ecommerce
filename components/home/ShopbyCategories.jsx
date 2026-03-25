
"use client";

import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ShopbyCategories(){
    return(
        <>
        <section className="shop-by-categories">
            <div className="container text-center">
                <h3 className="shopbycategories">Shop by Categories</h3>
            </div>
            <div className="container">
                <Swiper
                
                slidesPerGroup={1}
                speed={600}
                navigation
                breakpoints={{
                    320: { slidesPerView: 2 ,spaceBetween:10},
                    576: { slidesPerView: 3,spaceBetween:20 },
                    768: { slidesPerView: 3 ,spaceBetween:20},
                    1024: { slidesPerView: 5 ,spaceBetween:30},
                }}
> 
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="/productview"><img src="/images/sample1.jpeg"/></Link>
                                <Link href="/collections"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="/productview"><img src="/images/sample2.jpeg"/></Link>
                                <Link href="/collections"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="/productview"><img src="/images/sample3.jpeg"/></Link>
                                <Link href="/collections"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="/productview"><img src="/images/sample4.jpeg"/></Link>
                                <Link href="/collections"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="/productview"><img src="/images/sample6.jpeg"/></Link>
                                <Link href="/collections"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="/productview"><img src="/images/sample7.jpeg"/></Link>
                                <Link href="/collections"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
         
                </Swiper>
            </div>
        </section>
       
        </>
    );
    
}

