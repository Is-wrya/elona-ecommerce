"use client";

import Link from "next/link";
import { useState } from "react";

export default function Profile(){

    const [activeTab,setActiveTab] = useState("orders");
    const [firstName,setFirstName] = useState("");
    const [lastName,setName] = useState("");
    const [phoneNum,setphone] = useState("");
    const [email,setEmail] = useState("");
    const [date,setDateofbirth] =useState("");
    // const newLocal = (<h2 className="your-address">Address</h2>, <div className="address-card">
    // </div>);
    return(
        <section className="myAccount padding-main">
            <div className="container">
                <div className="sidebar">
                    <div className="profile">
                        <img className="profile-pic" src="/images/profile.jpg" alt=""/>
                        <h4>Zara</h4>
                    </div>
                    <button className={`tab-button ${activeTab==="orders" ? "active" : ""}`}
                        onClick={()=>setActiveTab("orders")}>My Orders</button>
                    <button className={`tab-button ${activeTab==="address" ? "active" : ""}`}
                        onClick={()=>setActiveTab("address")}>Address</button>
                    <button className={`tab-button ${activeTab==="account" ? "active" : ""}`}
                        onClick={()=>setActiveTab("account")}>Account Details</button>
                    <button className="log-out">Log Out</button>
                </div>

                <div className="right-content-wrapper">
                    {activeTab==="orders" && (
                        <div className="tab-content">
                            <h2 className="your-orders">Your Orders</h2>
                            <div className="order-card">
                                <p className="order-id">Order id : E6Cx986</p>
                                <p className="status">
                                    Status :
                                    <span className="status-transmit">Transmit</span>
                                    <Link href="#"><span className="track">Track Order</span></Link>
                                </p>
                                <div className="text-right">
                                    <p>Dec 17 2025</p>
                                    <span className="badge">On time</span>
                                    <i className="fa-regular fa-truck" style={{ color: "rgb(112,112,112)" }}></i>
                                    <span className="detail">Estimate Delivery in 6 Days</span>
                                </div>
                            </div>
                            <div className="order-items">
                                <div className="cart-items">
                                    <div className="cart-card">
                                        <div className="cart-img">
                                            <Link href="/products"><img src="/images/sample6.jpeg"/></Link>
                                        </div>
                                        <div className="cart-details active">
                                            <h4>Elegant co ord set</h4>
                                            <p>color : off white</p>
                                            <p>size : s</p>
                                            <div className="price-row">
                                                <span className="new-price">$250</span>
                                                <span className="oldprice">$270</span>
                                                <span className="offer">-20%</span>
                                                <span className="return">
                                                    <Link href="#">Return product</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab==="address" && (
                      <div className="tab-content">
                      <h2 className="your-address">Address</h2>
                      <div className="address-card">
                        <div className="card-items">
                            <div className="card-details">
                                <h4>Zara</h4>
                                <p>90A, Street 5</p>
                                <p>California</p>
                                <p>Pin-code : 678765</p>
                                <p>Landmark : Near details</p>
                                <p>Phone : +91 5433543543</p>
                                <div className="card-actions">
                                    <span>Edit</span>
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="card-details">
                                <h4>Zara</h4>
                                <p>90A, Street 5</p>
                                <p>California</p>
                                <p>Pin-code : 678765</p>
                                <p>Landmark : Near details</p>
                                <p>Phone : +91 6352417955</p>
                                <div className="card-actions">
                                    <span>Edit</span>
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="add-button">
                                <button className="add-btn">
                                    <i className="fa-solid fa-plus"></i>Add Address
                                </button>
                            </div>
                        </div>
                       </div> 
                      </div>
                    )}
                    {activeTab==="account" && (
                        <div className="tab-content">
                        <h2 className="account-de">Account Details</h2>
                        <div className="profile">
                            <img className="profile-image" src="/images/profile.jpg" alt=""/>
                        </div>
                        <form className="account-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    {/* <input type="text" value=""/> */}
                                    <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text"
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <div className="phone-input">
                                    <span>IN +91</span>
                                     <input type="text"
                                    value={phoneNum}
                                    onChange={(e)=>setphone(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>DOB</label>
                                <input type="date" value={date} onChange={ (e)=>setDateofbirth(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Mail</label>
                                <input type="text"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-button">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}