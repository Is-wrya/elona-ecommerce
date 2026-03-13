"use client";

import Link from "next/link";

export default function OrderSummary(){
    return(
        <section className="order-summary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="delivery-details">
                            <div className="heading">
                                <h3>Delivering to john</h3>
                            </div>
                            <div className="address-card">
                                <div className="top-section">
                                    <div className="address-info">
                                        <h4>
                                            John
                                        </h4>
                                        <p>90A, Street 5</p>
                                    <p>California</p>
                                    <p>Contact : 125364789</p>
                                    </div>
                                    <Link href="#" className="change-btn">Change</Link>
                                </div>
                                <Link href="#" className="delivery-link">Add Delivery Instructions</Link>
                                <div className="delivery-instructions">
                                    {/* <textarea placeholder="Add your instructions" id="instruction"></textarea>
                                    <div className="instruction-btn">
                                        <button className="cancelBtn">
                                            Cancel
                                        </button>
                                        <button className="SaveBtn">
                                            Save
                                        </button>
                                    </div> */}
                                </div>
                                <div className="check-icon">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                            </div>
                        </div>
                        <div className="payment-section">
                            <div className="heading">
                            <h3>Payment Method</h3>
                            </div>
                            <div className="payment-methods">
                            <div className="payment-card">
                                <label className="payment-option">
                                    <input type="radio" name="payment"/>
                                    <span>Credit or Debit card</span>
                                </label>
                                <div className="images">
                                    <img src="./assets/img/payment.svg" alt=""/>
                                </div>
                                <label className="payment-option">
                                    <input type="radio" name="payment"/>
                                    <span>Net Banking</span>
                                </label>
                                <select className="netbank-select">
                                    <option>Choose an option</option>
                                    <option>SBI</option>
                                    <option>HDFC</option>
                                    <option>ICIC</option>
                                </select>
                                <label className="payment-option">
                                    <input type="radio" name="payment"/>
                                    <span>UPI Apps</span>
                                </label>
                                <label className="payment-option">
                                    <input type="radio" name="payment"/>
                                    <span>Cash on Delivery</span>
                                </label>
                                <p className="instruction">Cash, Cards and UPI accepted</p>
                            </div>
                        </div>
                        <div className="button">
                            <Link href="#">
                            <button className="confirm">Use this payment method</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                <div className="col-md-6">
                    <div className="summary">
                        <div className="heading">
                            <h3>
                                Summary
                            </h3>
                        </div>
                        <div className="price-info">
                            <div className="summary-row">
                                <span>Sub-Total</span>
                                <span>$540</span>
                            </div>
                            <div className="summary-row">
                                <span>Delivery charges</span>
                                <span>$540</span>
                            </div>
                            <hr/>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>$505</span>
                        </div>
                        </div>
                    </div>
                       <div className="order-items">
                        <div className="heading">
                            <h3>Order Details</h3>
                        </div>

                        <div className="cart-items">
                            <div className="cart-card">
                                <div className="cart-img">
                                    <Link href="productview.php"><img src="/images/sample1.jpeg" alt=""/></Link>
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
                                   
                                </div>
                            </div>

                        </div>
                        <div className="cart-items">
                            <div className="cart-card">
                                <div className="cart-img">
                                    <Link href="productview.php"><img src="/images/sample2.jpeg" alt=""/></Link>
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
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}