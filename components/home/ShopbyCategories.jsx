
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
                // modules={[Autoplay]}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={600}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                navigation
                breakpoints={{
                    320: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
> 
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="#"><img src="/images/sample1.jpeg"/></Link>
                                <Link href="#"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="#"><img src="/images/sample2.jpeg"/></Link>
                                <Link href="#"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href=""><img src="/images/sample3.jpeg"/></Link>
                                <Link href="#"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="#"><img src="/images/sample4.jpeg"/></Link>
                                <Link href="#"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="#"><img src="/images/sample6.jpeg"/></Link>
                                <Link href="#"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="product-card">
                            <div className="image-card">
                                <Link href="#"><img src="/images/sample7.jpeg"/></Link>
                                <Link href="#"><button className="category-label">Shirts</button></Link>
                            </div>
                        </div> 
                    </SwiperSlide>
         
                </Swiper>
            </div>
        </section>
       
        </>
    );
    
}

