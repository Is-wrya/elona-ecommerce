"use client";

import { useState } from "react";
import Link from "next/link";
import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";


export default function ProductView() {
      const [openIndex, setOpenIndex] = useState(null);
      const [showAll,setShowAll] = useState(false);
      const [showForm,setShowForm] = useState(false);
      const [rating, setRating] = useState(0);
      const handlePostReview = () => {
        alert("Your review has been submitted!");
        setShowForm(false);
        };
     const [activeColor, setActiveColor] = useState("");
     const [activeSize, setActiveSize] = useState("");


  const toggleSection = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

    return(
        <>
    <section className="product-view">
        <div className="subheading">
            <p>
                <Link href="/">home</Link> / <Link href="/product">explore</Link> / <Link href="/productview">dresses</Link>
            </p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 left-images">
                    <div className="img">
                        <div className="main-image">
                            <img className="img-main" src="/images/sample1.jpeg" alt=""/>
                        </div>
                    </div>
                    <Swiper
                    className="myThumbSwiper"
                        spaceBetween={5}
                        slidesPerGroup={1}
                        slidesPerView={4.2}
                    >
                        <SwiperSlide>
                            <img className="thumb" src="/images/sample1.jpeg" alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="thumb" src="/images/sample1.jpeg" alt=""/>
                        </SwiperSlide>
                         <SwiperSlide>
                            <img className="thumb" src="/images/sample1.jpeg" alt=""/>
                        </SwiperSlide>
                         <SwiperSlide>
                            <img className="thumb" src="/images/sample1.jpeg" alt=""/>
                        </SwiperSlide>
                         <SwiperSlide>
                            <img className="thumb" src="/images/sample1.jpeg" alt=""/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-md-6 product-right">
                    <h3>Elegant dress</h3>
                    <div className="product-price">
                        <span className="new-price">$250</span>
                        <span className="old-price">$300</span>
                        <button className="offer">-25%</button>
                    </div>
                    <p className="note">MRP incl. of all taxes</p>
                    <p className="stock">In stock</p>
                    <p className="details">Elegant two-piece off-white set featuring a relaxed button-down shirt and
                        high-waisted wide-leg pants in lightweight fabric, offering effortless sophistication, comfort,
                        and versatility for warm-weather, resort, or casual-chic styling.</p>
                    <div className="rating d-flex">
                        ★★★★★ <span>4.5/5</span>
                    </div>
                    <div className="color">
                        <h5>COLOR:</h5>
                        <span className="col-name">Off-white</span>
                    </div>
                    <div className="color-options">
                        <h5>Colors</h5>
                        <button className={`color1 ${activeColor=== "color1" ? "active" : ""}`}onClick={()=>setActiveColor("color1")}></button>
                        <button className={`color2 ${activeColor=== "color2" ? "active" : ""}`}onClick={()=>setActiveColor("color2")}></button>
                        <button className={`color3 ${activeColor=== "color3" ? "active" : ""}`}onClick={()=>setActiveColor("color3")}></button>
                    </div>
                    <div className="size-options">
                        <h5>Size</h5>
                        <div className="size-wrapper">
                            <button className={activeSize==="XS" ? "active" : ""}onClick={()=>setActiveSize("XS")}>XS</button>
                            <button className={activeSize==="S" ? "active" : ""}onClick={()=>setActiveSize("S")}>S</button>
                            <button className={activeSize==="M" ? "active" : ""}onClick={()=>setActiveSize("M")}>M</button>
                            <button className={activeSize==="L" ? "active" : ""}onClick={()=>setActiveSize("L")}>L</button>
                            <button className={activeSize==="XL" ? "active" : ""}onClick={()=>setActiveSize("XL")}>XL</button>
                        </div>
                        <Link href="#"><span className="measurement-guide">Find your size | Measurement Guide</span></Link>
                    </div>
                    <div className="cart-add">
                        <button className="add-tocart">ADD TO CART</button>
                        <span className="wishlist"><i className="fa-regular fa-heart"/></span>
                    </div>
                    <div className="details-sec">
                        <div className="fit-details" onClick={() => toggleSection(1)}>
                            <h5>Fit Details</h5>
                            <i className="fa-solid fa-chevron-down"/>
                        </div>
                        {openIndex === 1 &&(
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        )}
                        <div className="fit-details" onClick={() => toggleSection(2)}>
                            <h5>Fabric & After care Details</h5>
                            <i className="fa-solid fa-chevron-down"/>
                        </div>
                        {openIndex === 2 &&(
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        )}
                        <div className="fit-details" onClick={() => toggleSection(3)}>
                            <h5>Shipping & Return</h5>
                            <i className="fa-solid fa-chevron-down"/>
                        </div>
                        {openIndex === 3 &&(
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        )}
                    </div>
                    <div className="rating-by-customer">
                        <div className="heading">
                            <h3>Customer Review</h3>
                        </div>
                            <div className="cust-rating">
                            <div className="Customer-rating">
                                <div className="rating-5">
                                    <div className="stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                </div>
                                <div className="bars">
                                    <div className="fill" style={{width:"70%"}}></div>
                                </div>
                                <span>50</span>
                            </div>
                            <div className="Customer-rating">
                                <div className="rating-5">
                                    <div className="stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                </div>
                                <div className="bars">
                                    <div className="fill" style={{width:"70%"}}></div>
                                </div>
                                <span>50</span>
                            </div>
                            <div className="Customer-rating">
                                <div className="rating-5">
                                    <div className="stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></div>
                                </div>
                                <div className="bars">
                                    <div className="fill" style={{width:"75%"}}></div>
                                </div>
                                <span>20</span>
                            </div>
                            <div className="Customer-rating">
                                <div className="rating-4">
                                    <div className="stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i
                                            className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></div>
                                </div>
                                <div className="bars">
                                    <div className="fill" style={{width:"75%"}}></div>
                                </div>
                                <span>70</span>
                            </div>
                            <div className="Customer-rating">
                                <div className="rating-3">
                                    <div className="stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i
                                            className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></div>
                                </div>
                                <div className="bars">
                                    <div className="fill" style={{width:"45%"}}></div>
                                </div>
                                <span>30</span>
                            </div>
                        </div>
                        <div className="customer-review">
                            <div className="review-top">
                                <div className="review-items">
                                    <div className="user">
                                        <img src="/images/customer.jpg" alt=""/>
                                        <h5>Mary<span className="verified"><i className="fa-solid fa-circle-check"></i></span>
                                        </h5>
                                    </div>
                                    <span className="date">10/08/2025</span>
                                </div>
                                <div className="review-stars"><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                <p>Pretty dress with good quality.</p>
                            </div>
                            <div className="review-top">
                                <div className="review-items">
                                    <div className="user">
                                        <img src="/images/customer.jpg" alt=""/>
                                        <h5>Mary<span className="verified"><i className="fa-solid fa-circle-check"></i></span>
                                        </h5>
                                    </div>
                                    <span className="date">10/08/2025</span>
                                </div>
                                <div className="review-stars"><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                <p>Pretty dress with good quality.</p>
                            </div>
                            <div className="review-top">
                                <div className="review-items">
                                    <div className="user">
                                        <img src="/images/customer.jpg" alt=""/>
                                        <h5>Mary<span className="verified"><i className="fa-solid fa-circle-check"></i></span>
                                        </h5>
                                    </div>
                                    <span className="date">10/08/2025</span>
                                </div>
                                <div className="review-stars"><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                <p>Pretty dress with good quality.</p>
                            </div>
                        </div>   
                        <div className="review-footer">
                         {!showAll && (
                            <button
                            className="viewAll"
                            onClick={() => setShowAll(true)}
                            >
                            VIEW ALL
                            </button>
                            )}
                            <div className="btn">
                                <button className="addreview" onClick={()=>setShowForm(true)}>Add Review</button>
                            </div>
                                {showForm &&(
                                    <div className="add-review-form">
                                        <h3>Add Review</h3>
                                        <hr/>
                                        <div className="head">
                                        <img src="/images/customer.jpg"/>
                                        <span><h5>Green long dress</h5></span>
                                        </div>
                                        <div className="star-rating">
                                            <p>Rate the product</p>
                                            <div className="stars">
                                                <span 
                                                className={`star ${rating >= 1 ? "active" : ""}`} 
                                                onClick={() => setRating(1)}
                                                >★</span>
                                                 <span 
                                                className={`star ${rating >= 2 ? "active" : ""}`} 
                                                onClick={() => setRating(2)}
                                                >★</span>
                                                 <span 
                                                className={`star ${rating >= 3 ? "active" : ""}`} 
                                                onClick={() => setRating(3)}
                                                >★</span>
                                                 <span 
                                                className={`star ${rating >= 4 ? "active" : ""}`} 
                                                onClick={() => setRating(4)}
                                                >★</span>
                                                 <span 
                                                className={`star ${rating >= 5 ? "active" : ""}`} 
                                                onClick={() => setRating(5)}
                                                >★</span>
                                                
                                            </div>
                                        </div>
                                        <h4 className="review-experience">Review your experience</h4>  
                                        <textarea placeholder="Write your review"></textarea>  
                                        <div className="buttons">
                                            <button className="cancel" onClick={() => setShowForm(false)}>
                                                Cancel
                                            </button>
                                            <button className="submit" onClick={()=> handlePostReview (true)} >Post review</button>
                                        </div>
                                    </div>
                                )}
                            
                            
                        </div>    
                            
                       
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className="YouMayLike">
        <div className="container text-center">
            <h3 className="top-product">You might also like</h3>
        </div>
        <div className="container">
            <Swiper
            className="YouMayLike"
                spaceBetween={30}
                slidesPerGroup={1}
                speed={600}
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
                        <div className="product-img">
                            <img src="/images/sample6.jpeg"/>
                            <div className="hover-icons">
                                <Link href="/productview" className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                              ★★★★★ <span>4.5/5</span>  
                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="/images/sample4.jpeg"/>
                            <div className="hover-icons">
                                <Link href="/productview" className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                              ★★★★★ <span>4.5/5</span>  
                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="/images/sample6.jpeg"/>
                            <div className="hover-icons">
                                <Link href="/productview" className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                              ★★★★★ <span>4.5/5</span>  
                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="/images/sample1.jpeg"/>
                            <div className="hover-icons">
                                <Link href="/productview" className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                              ★★★★★ <span>4.5/5</span>  
                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="/images/sample2.jpeg"/>
                            <div className="hover-icons">
                                <Link href="/productview" className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                              ★★★★★ <span>4.5/5</span>  
                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="product-card">
                        <div className="product-img">
                            <img src="/images/sample3.jpeg"/>
                            <div className="hover-icons">
                                <Link href="/productview" className="view-icon">
                                <i className="fa-regular fa-eye"></i>
                                </Link>
                                <Link href="#" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                              ★★★★★ <span>4.5/5</span>  
                            </div>
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

)}