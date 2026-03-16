"use client";

import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WishList(){
    return(
        <>
        <section className="wishlist container">
            <div className="inner-content">
                <div className="heading">
                    <div>
                        <h3> Wishlist</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="wish-lits">
        <div className="container">
        <div className="row ">
            <div className="col-md-7">
                <div className="cart-items">
                    <div className="cart-card">
                        <div className="cart-img">
                            <Link href="#"><img src="/images/sample1.jpeg" alt=""/></Link>
                        </div>

                        <div className="cart-details">
                            <h4>Elegant co ord set</h4>
                            <p>color : off white</p>
                            <p>size : s</p>

                            <div className="price-row">
                                <span className="new-price">$250</span>
                                <span className="oldprice">$270</span>
                                <span className="offer">-20%</span>
                            </div>

                            <span className="stock">In Stock</span>
                        </div>

                        <div className="cart-actions">
                            <button>Add to cart</button>
                        </div>

                        <div className="like">
                            <i className="fa-solid fa-heart" style={{ color: "rgb(252, 0, 0)" }}></i>
                        </div>
                    </div>

                </div>
                <div className="cart-items">
                    <div className="cart-card">
                        <div className="cart-img">
                            <Link href="productview"><img src="/images/sample2.jpeg" alt=""/></Link>
                        </div>

                        <div className="cart-details">
                            <h4>Elegant co ord set</h4>
                            <p>color : off white</p>
                            <p>size : s</p>

                            <div className="price-row">
                                <span className="new-price">$250</span>
                                <span className="oldprice">$270</span>
                                <span className="offer">-20%</span>
                            </div>

                            <span className="stock">In Stock</span>
                        </div>

                        <div className="cart-actions">
                            <button>Add to cart</button>
                        </div>

                        <div className="like">
                            <i className="fa-solid fa-heart" style={{ color: "rgb(252, 0, 0)" }}></i>
                        </div>
                    </div>
                </div>
                <div className="cart-items">
                    <div className="cart-card">
                        <div className="cart-img">
                            <Link href="/productview"><img src="/images/sample3.jpeg" alt=""/></Link>
                        </div>

                        <div className="cart-details">
                            <h4>Elegant co ord set</h4>
                            <p>color : off white</p>
                            <p>size : s</p>

                            <div className="price-row">
                                <span className="new-price">$250</span>
                                <span className="oldprice">$270</span>
                                <span className="offer">-20%</span>
                            </div>

                            <span className="stock">In Stock</span>
                        </div>

                        <div className="cart-actions">
                            <button>Add to cart</button>
                        </div>

                        <div className="like">
                            <i className="fa-solid fa-heart" style={{ color:"rgb(252, 0, 0)"}}></i>
                        </div>
                    </div>
                </div>
                <div className="cart-items">
                    <div className="cart-card">
                        <div className="cart-img">
                            <Link href="/productview"><img src="/images/sample4.jpeg" alt=""/></Link>
                        </div>

                        <div className="cart-details">
                            <h4>Elegant co ord set</h4>
                            <p>color : off white</p>
                            <p>size : s</p>

                            <div className="price-row">
                                <span className="new-price">$250</span>
                                <span className="oldprice">$270</span>
                                <span className="offer">-20%</span>
                            </div>

                            <span className="stock">In Stock</span>
                        </div>

                        <div className="cart-actions">
                            <button>Add to cart</button>
                        </div>

                        <div className="like">
                            <i className="fa-solid fa-heart" style={{ color: "rgb(252, 0, 0)"}}></i>
                        </div>
                    </div>
                </div>


            </div>

            {/* RIGHT SECTION */}
            <div className="col-md-5">
                <div className="heading">
                    <h3> You might also like</h3>
                </div>  
                 <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={4}
                slidesPerGroup={1}
                speed={600}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3.5 },
                }}
> <SwiperSlide>
                        <div className="product-card ">
                            <div className="product-img">
                                <Link href="/productview"><img src="/images/sample6.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
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
                                <Link href="productview"><img src="/images/sample4.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                
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
                                <Link href="productview"><img src="/images/sample1.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                
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
                                
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="product-card">
                            <div className="product-img">
                                <Link href=".productview"><img src="/images/sample3.jpeg" alt=""/></Link>
                            </div>
                            <div className="details">
                                <h4>Green maxi dress</h4>
                                <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                                
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
                                
                                  <div className="price">
                                    $120
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
         
                </Swiper>  
        
        </div>
    </div>
    </div>
    
</section>
        
        </>
    );
}