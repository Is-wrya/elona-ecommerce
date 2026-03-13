"use client";

import Link from "next/link";

export default function AddtoCart(){
    return(
        <>
         <section className="add-to-cart">
        <div className="container">
            <div className="inner-content">
                <div className="left-heading">
                    <div>
                        <h3> Cart</h3>
                        <p><Link href="index.html"> home</Link> / <Link href="product.html">cart</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>   

            <section className="cart-page">
        <div className="container">
            <div className="row">
                <div className="order-detail"></div>
                <div className="col-md-6">
                    <div className="cart-items">
                        <div className="cart-card">
                            <div className="cart-img">
                                <Link href="product.php"><img src="/images/sample1.jpeg" alt=""/></Link>
                            </div>

                            <div className="cart-details">
                                <h4>Elegant co ord set</h4>
                                <p>color : off white</p>
                                <p>size : s</p>

                                <div className="price-row">
                                    <span className="new-price" data-price = "250">$250</span>
                                    <span className="oldprice">$270</span>
                                    <span className="offer">-20%</span>
                                </div>

                                <span className="stock">In Stock</span>
                            </div>

                            <div className="cart-actions">
                                <button className="minus" >-</button>
                                <span className="quantity">1</span>
                                <button className="plus">+</button>
                            </div>

                            <div className="delete">
                                <i className="fa-regular fa-trash-can"></i>
                            </div>
                        </div>

                    </div>
                    <div className="cart-items">
                        <div className="cart-card">
                            <div className="cart-img">
                                <img src="/images/sample2.jpeg" alt=""/>
                            </div>

                            <div className="cart-details">
                                <h4>Elegant co ord set</h4>
                                <p>color : off white</p>
                                <p>size : s</p>

                                <div className="price-row">
                                    <span className="new-price" data-price = "250">$250</span>
                                    <span className="oldprice">$270</span>
                                    <span className="offer">-20%</span>
                                </div>

                                <span className="stock">In Stock</span>
                            </div>

                            <div className="cart-actions">
                                 <button className="minus" >-</button>
                                <span className="quantity">1</span>
                                <button className="plus">+</button>
                            </div>

                            <div className="delete">
                                <i className="fa-regular fa-trash-can"/>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="col-md-6">
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                            <div className="summary-row">
                                <span>Sub total</span>
                                <span id="subtotal">$0</span>
                            </div>

                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <span id="delivery">$5</span>
                            </div>

                            <div className="summary-row total">
                                <span>Total</span>
                                <span id="total">$0</span>
                            </div>

                        <hr/>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span id="total1">$0</span>
                            </div>
                        
                        <div className="coupon-box">
                            <input type="text" placeholder="Apply coupon"/>
                            <button>Apply</button>
                        </div>

                    </div>

                    <button className="buy-now">Buy Now</button>
                </div>

            </div>
        </div>
    </section>
<img className="banner-bottom" src="/images/bottom-banner.png" alt=""/>
</>
    );
}