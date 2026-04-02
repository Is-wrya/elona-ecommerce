"use client";

import Link from "next/link";
import Banner from "../../components/wishlist/banner";

export default function AddtoCart(){
    return(
        <>
        <section className="add-to-cart">
             <Banner title="Your Cart"/>
    </section>   

    <section className="cart-page">
        <div className="container">
                <div className="row">
                    <div className="cart-details"></div>
                        <div className="col-md-7">
                             <div>
                        <h4> Cart</h4>
                        <p><Link href="/"> home</Link> / <Link href="/products">cart</Link>
                        </p>
                    </div>
                             <div className="recent-carts">
                                <div className="cart-img">
                                    <img src="/images/shirts.jpeg" />
                                </div>
                                <div className="cart-content">
                                    <h6>Light pink shirt</h6>
                                    <h5>$120</h5>
                                    <div className="color-sec">
                                        <h6>color:</h6>
                                        <button className="sel-col"></button>
                                    </div>
                                    <div className="size-sec">
                                        <h6>size: S</h6>
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
                       
                            <div className="recent-carts">
                                <div className="cart-img">
                                    <img src="/images/denimskirt.jpeg" />
                                </div>
                                <div className="cart-content">
                                    <h6>Denim Skirt</h6>
                                    <h5>$120</h5>
                                    <div className="color-sec">
                                        <h6>color:</h6>
                                        <button className="sel-col"></button>
                                    </div>
                                    <div className="size-sec">
                                        <h6>size: S</h6>
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
                    

                    <div className="col-md-5">
                            <h4>Order Summary</h4>
                             <div className="order-summary1">
                                <div className="summary-row">
                                    <span>Sub total</span>
                                    <span id="subtotal">$0</span>
                                </div>

                                <div className="summary-row">
                                    <span>Delivery Fee</span>
                                    <span id="delivery">$5</span>
                                </div>

                                <div className="summary-row totals">
                                    <span>Total</span>
                                    <span id="total">$0</span>
                                </div>

                            <hr/>
                                <div className="summary-row sub-total">
                                    <span>Total</span>
                                    <span id="total1">$0</span>
                                </div>
                            
                                <div className="coupon-box">
                                    <input type="text" placeholder="Apply coupon"/>
                                    <button>Apply</button>
                                </div>


                        <button className="buy-now">Buy Now</button>
                    </div>
                    
                        </div>
            </div>
        </div>
           
    </section>

</>
    );
}