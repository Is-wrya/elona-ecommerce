"use client";

import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Newarrivals(){
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
                    delay: 4000,
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
> <SwiperSlide>
                        <div className="product-card ">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample6.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample7.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample1.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120<span className="old">$260</span> <span className="off">
                                    <button className="offer">-20%</button></span>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample2.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample3.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120<span className="old">$260</span> <span className="off">
                                    <button className="offer">-20%</button></span>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample4.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample6.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                <div className="rating d-flex">
                                  ★★★★★ <span>4.5/5</span>  
                                  </div >
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
         
                </Swiper>
            </div>
            <div className="button">
                <Link href="/products"><button className="primary-button">SHOP NOW</button></Link>
            </div>
        </section>
       
        </>
    );
    
}

