"use client";

import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Newarrivals(product){
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
> <SwiperSlide>
                        <div className="product-card1 ">
                            <div className="product-img">
                                <img src="/images/croptop.jpeg" alt=""/>
                                <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <button className="addtocart-sec">ADD TO CART</button>
                                    <button className="soldout">Soldout</button>
                                </div>
                               
                            </div>
                             <div className="details">
                                    <h5 className="heading">Shirt</h5>
                                    <h5 >$ 120</h5>
                                      </div>
                            
                             <div className="color-sel">
                                        <button className="blue"></button>
                                        <button className="black"></button>
                                        <button className="white"></button>
                                    </div>
                                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card1 ">
                            <div className="product-img">
                                <img src="/images/shirts.jpeg" alt=""/>
                                <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <button className="addtocart-sec">ADD TO CART</button>
                                   <button className="heart-btn">
                                    <i className="fa-regular fa-heart "></i></button>
                                </div>
                               
                            </div>
                             <div className="details">
                                    <h5 className="heading">Shirt</h5>
                                    <h5 >$ 120</h5>
                                      </div>
                            
                             <div className="color-sel">
                                        <button className="blue"></button>
                                        <button className="black"></button>
                                        <button className="white"></button>
                                    </div>
                                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card1 ">
                            <div className="product-img">
                                <img src="/images/pants.jpeg" alt=""/>
                                <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <button className="addtocart-sec">ADD TO CART</button>
                                    <button className="heart-btn">
                                    <i className="fa-regular fa-heart "></i></button>
                                </div>
                               
                            </div>
                             <div className="details">
                                    <h5 className="heading">Shirt</h5>
                                    <h5 >$ 120</h5>
                                      </div>
                            
                             <div className="color-sel">
                                        <button className="blue"></button>
                                        <button className="black"></button>
                                        <button className="white"></button>
                                    </div>
                                    </div>
                    </SwiperSlide>
                  <SwiperSlide>
                        <div className="product-card1 ">
                            <div className="product-img">
                                <img src="/images/gown.jpeg" alt=""/>
                                <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <button className="addtocart-sec">ADD TO CART</button>
                                    <button className="heart-btn">
                                    <i className="fa-regular fa-heart "></i></button>
                                </div>
                               
                            </div>
                             <div className="details">
                                    <h5 className="heading">Shirt</h5>
                                    <h5 >$ 120</h5>
                                      </div>
                            
                             <div className="color-sel">
                                        <button className="blue"></button>
                                        <button className="black"></button>
                                        <button className="white"></button>
                                    </div>
                                    </div>
                    </SwiperSlide>
                  
         <SwiperSlide>
                        <div className="product-card1 ">
                            <div className="product-img">
                                <img src="/images/shirtswomen.jpeg" alt=""/>
                                <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <button className="addtocart-sec">ADD TO CART</button>
                                    <button className="heart-btn">
                                    <i className="fa-regular fa-heart "></i></button>
                                </div>
                               
                            </div>
                             <div className="details">
                                    <h5 className="heading">Shirt</h5>
                                    <h5 >$ 120</h5>
                                      </div>
                            
                             <div className="color-sel">
                                        <button className="blue"></button>
                                        <button className="black"></button>
                                        <button className="white"></button>
                                    </div>
                                    </div>
                    </SwiperSlide>
                  
         <SwiperSlide>
                        <div className="product-card1 ">
                            <div className="product-img">
                                <img src="/images/trousers.jpeg" alt=""/>
                                <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <button className="addtocart-sec">ADD TO CART</button>
                                    <button className="heart-btn">
                                    <i className="fa-regular fa-heart "></i></button>
                                </div>
                               
                            </div>
                             <div className="details">
                                    <h5 className="heading">Shirt</h5>
                                    <h5 >$ 120</h5>
                                      </div>
                            
                             <div className="color-sel">
                                        <button className="blue"></button>
                                        <button className="black"></button>
                                        <button className="white"></button>
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

