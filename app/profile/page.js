"use client";

import Link from "next/link";
import { useState } from "react";
import WishlistCard from "../../components/wishlist/details";
import Products from "../../lib/products";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeAddress, setActiveAddress] = useState("");
  const [showForm,setShowForm] = useState(false);
   const saveAddress = () => {
         alert("Your Address saved successfully!");
         setShowForm(false);
         };
         const [wishlist, setWishlist] = useState(Products);
    const handleRemove = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };
    const [firstName,setFirstName] = useState("");
     const [lastName,setName] = useState("");
     const [phoneNum,setphone] = useState("");
     const [email,setEmail] = useState("");
     const [date,setDateofbirth] =useState("");
   

  return (
    <>
      <section className="top-bar container">
        <div className="top-card">
          <div className="profile-sec">
            <img src="/images/profile.jpeg" />
          </div>
          <div className="details">
            <h5>Welcome Back, Zara</h5>
            <div className="info-sec">
              <p>
                <i className="fa-solid fa-location-dot"></i> Kozhikode
              </p>
              <p>
                <i className="fa-regular fa-envelope"></i> zara@gmail.com
              </p>
            </div>
            <button className="edit-profile">
              <i className="fa-solid fa-pen-to-square"></i> Edit profile
            </button>
          </div>
        </div>
      </section>

      <section className="Account-details padding-main">
        <div className="container">
          <div className="row">
            
            {/* SIDEBAR */}
            <div className="col-md-2">
              <div className="sidebar">
                <button
                  className={`tab-button ${
                    activeTab === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <i className="fa-solid fa-gauge"></i> Dashboard
                </button>

                <button
                  className={`tab-button ${
                    activeTab === "orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  <i className="fa-solid fa-box"></i> My Orders
                </button>

                <button
                  className={`tab-button ${
                    activeTab === "address" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("address")}
                >
                  <i className="fa-solid fa-location-dot"></i> Address
                </button>

                <button
                  className={`tab-button ${
                    activeTab === "wishlist" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  <i className="fa-regular fa-heart"></i> Wishlist
                </button>

                <button
                  className={`tab-button ${
                    activeTab === "account" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("account")}
                >
                  <i className="fa-solid fa-gear"></i> Account details
                </button>

                <Link href="/">
                  <button className="log-out">
                    <i className="fa-solid fa-right-from-bracket"></i> Log Out
                  </button>
                </Link>
              </div>
            </div>

                {activeTab === "dashboard" && (
                    
            <div className="col-md-10">
              <div className="profile-content">
                  <div className="table-content">
                    <div className="row">

                      <div className="col-md-8">

                        <h5>Recent Orders</h5>

                        <div className="top-section">
                          <p>Dec 17 2025</p>
                          <div className="top-right">
                            <span className="badge">On time</span>
                            <i
                              className="fa-regular fa-truck"
                              style={{ color: "rgb(112,112,112)" }}
                            ></i>
                            <span className="detail">
                              Estimate Delivery in 6 Days
                            </span>
                          </div>
                        </div>


                        <div className="recent-orders">
                          <div className="order-img">
                            <Link href="/productview"> <img src="/images/shirts.jpeg"/></Link>
                          </div>
                          <div className="order-content">
                            <p className="order-id">#CE3445</p>
                            <h5>Light pink shirt</h5>
                            <div className="color-sec">
                              <h6>color:</h6>
                              <button className="sel-col"></button>
                            </div>
                            <div className="size-sec">
                              <h6>size: S</h6>
                            </div>
                            <div className="return-product">
                              <Link href="/return"><p>return product ?</p></Link>
                            </div>
                          </div>
                        </div>

                        <div className="recent-orders">
                          <div className="order-img">
                            <Link href="/productview"> <img src="/images/gown.jpeg" /></Link>
                          </div>
                          <div className="order-content">
                            <p className="order-id">#CE3446</p>
                            <h5>Maroon gown</h5>
                            <div className="color-sec">
                              <h6>color:</h6>
                              <button className="sel-col"></button>
                            </div>
                            <div className="size-sec">
                              <h6>size: S</h6>
                            </div>
                            <div className="return-product">
                              <Link href="/return"><p>return product ?</p></Link>
                            </div>
                          </div>
                        </div>

                        {/* WISHLIST */}
                        <div className="wishlist-section-myprofile">
                          <h5>Your wishlist</h5>
                          <div className="sub-section">
                          <p>Your compact picks you saved for later</p>
                            <Link href="/wishlist"><h6>view all</h6></Link>
                            </div>
                          <div className="row">
                            <div className="col-md">
                              <div className="product-card1">
                                <div className="product-img">
                                     <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <Link href="/addtocart"  className="addtocart-sec">MOVE TO CART</Link>
        
                                </div>
                                  <img src="/images/shirts.jpeg" />
                                </div>
                                <div className="details">
                                  <h5>Shirt</h5>
                                  <h5>$120</h5>
                                </div>
                              </div>
                            </div>

                            <div className="col-md">
                              <div className="product-card1">
                                <div className="product-img">
                                  <img src="/images/croptop.jpeg" />
                                  <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <Link href="/addtocart"  className="addtocart-sec">MOVE TO CART</Link>
        
                                </div>
                                </div>
                                <div className="details">
                                  <h5>Shirt</h5>
                                  <h5>$120</h5>
                                </div>
                              </div>
                            </div>

                              <div className="col-md">
                              <div className="product-card1">
                                <div className="product-img">
                                  <img src="/images/pants.jpeg" />
                                  <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <Link href="/addtocart"  className="addtocart-sec">MOVE TO CART</Link>
        
                                </div>
                                </div>
                                <div className="details">
                                  <h5>Shirt</h5>
                                  <h5>$120</h5>
                                </div>
                              </div>
                            </div>

                              <div className="col-md">
                              <div className="product-card1">
                                <div className="product-img">
                                  <img src="/images/tshirt.jpeg" />
                                  <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <Link href="/addtocart"  className="addtocart-sec">MOVE TO CART</Link>
        
                                </div>
                                </div>
                                <div className="details">
                                  <h5>Shirt</h5>
                                  <h5>$120</h5>
                                </div>
                              </div>
                            </div>
                            
                              <div className="col-md">
                              <div className="product-card1">
                                <div className="product-img">
                                  <img src="/images/denimskirt.jpeg" />
                                  <div className="hover-icons">
                                    <Link href="/productview"><i className="fa-regular fa-eye"></i></Link>
                                    <Link href="/addtocart"  className="addtocart-sec">MOVE TO CART</Link>
        
                                </div>
                                </div>
                                <div className="details">
                                  <h5>Shirt</h5>
                                  <h5>$120</h5>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>

                      <div className="col-md-4 address-part">
                        <div className="heading">
                          <h5>Primary Address</h5>
                          <span className="def-add">default</span>
                        </div>

                        <p>Your default delivery destination</p>

                        <div className="add-det">
                          <div className="name-sec">
                            <h6>Zara Fathima</h6>
                            <h6 className="phone">+91 9898765455</h6>
                          </div>

                          <p>
                            26/52 Rose residency, Near HiLite mall, Mavoor road,
                            Kozhikode, Kerala 670362, India
                          </p>

                          <div className="address-button">
                            <button className="change-address">
                              <i className="fa-regular fa-pen-to-square"></i> Change address
                            </button>
                            <button className="sel-def">
                              <i className="fa-solid fa-box-open"></i> Deliver here
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  
              </div>
            </div>
                )}

                {activeTab === "orders" &&(
                      <div className="col-md-10">
                     <div className="profile-content">
                        <h4>Your Orders</h4>
                        <div className="table-content">
                        <div className="top-section">
                          <p>Dec 17 2025</p>
                          <div className="top-right">
                            <span className="badge">On time</span>
                            <i
                              className="fa-regular fa-truck"
                              style={{ color: "rgb(112,112,112)" }}
                            ></i>
                            <span className="detail">
                              Estimate Delivery in 6 Days
                            </span>
                          </div>
                       
                        <div className="recent-orders">
                          <div className="order-img">
                            <Link href="/productview"><img src="/images/shirts.jpeg" /></Link>
                          </div>
                          <div className="order-content">
                            <p className="order-id">#CE3445</p>
                            <h5>Light pink shirt</h5>
                            <div className="color-sec">
                              <h6>color:</h6>
                              <button className="sel-col"></button>
                            </div>
                            <div className="size-sec">
                              <h6>size: S</h6>
                            </div>
                            <div className="return-product">
                              <Link href="/return"><p>return product ?</p></Link>
                            </div>
                          </div>
                        </div>
                        <div className="recent-orders">
                          <div className="order-img">
                            <Link href="/productview"><img src="/images/pants.jpeg" /></Link>
                          </div>
                          <div className="order-content">
                            <p className="order-id">#CE3445</p>
                            <h5>Light pink shirt</h5>
                            <div className="color-sec">
                              <h6>color:</h6>
                              <button className="sel-col"></button>
                            </div>
                            <div className="size-sec">
                              <h6>size: S</h6>
                            </div>
                            <div className="return-product">
                              <Link href="/return"><p>return product ?</p></Link>
                            </div>
                          </div>
                        </div>
                            </div>
                        </div>
                </div>
                </div>
                )}

                {activeTab === "address" && (
                    <div className="address-section col-md-10">
                        <div className="heading">
                        <h5>Your address</h5>
                        <button className="add-new" onClick={()=> setShowForm(true)}><i className="fa-solid fa-plus"></i>Add New Address</button>
                        </div>
                         {showForm &&(
                                 <div className="overlay">
                                    <div className="address-form">
                                         <input type="text" placeholder="Full Name"/>
                                         <input type="text" placeholder="Street Address"/>
                                         <input type="text" placeholder="City"/>
                                         <input type="text" placeholder="Pin Code"/>
                                         <input type="text" placeholder="Landmark"/>
                                         <input type="text" placeholder="Phone Number"/>
                                         <div className="form-buttons">
                                             <button className="button1" type="button" onClick={saveAddress}>Save</button>
                                             <button className="button2" type="button" onClick={()=>setShowForm(false)}>Cancel</button>
                                         </div>
                                         </div>   
                                 </div>
                             )}
                        <div className="row">
                            <div className="col-md-4">
                             <div className={`address-part ${activeAddress === "home" ? "active" : ""}`}
                                onClick={() => setActiveAddress("home")}
                            >
                        <div className="heading">
                            <h5>Home</h5>
                          <span className="def-add">default</span>
                        </div>

                        <p>Your default delivery destination</p>

                        <div className="add-det">
                          <div className="name-sec">
                            <h6>Zara Fathima</h6>
                            <h6 className="phone">+91 9898765455</h6>
                          </div>

                          <p>
                            26/52 Rose residency, Near HiLite mall, Mavoor road,
                            Kozhikode, Kerala 670362, India
                          </p>

                          <div className="address-button">
                            <button className="change-address">
                              <i className="fa-regular fa-pen-to-square"></i> Change address
                            </button>
                            <button className="sel-def">
                              <i className="fa-solid fa-box-open"></i> Deliver here
                            </button>
                          </div>
                        </div>
                      </div>
                      </div>

                          <div className="col-md-4">
                           <div
                                className={`address-part ${activeAddress === "office" ? "active" : ""}`}
                                onClick={() => setActiveAddress("office")}
                            >
                        <div className="heading">
                            <h5>Office</h5>
                        </div>

                        <p>Your Office delivery destination</p>

                        <div className="add-det">
                          <div className="name-sec">
                            <h6>Zara Fathima</h6>
                            <h6 className="phone">+91 9898765455</h6>
                          </div>

                          <p>
                            26/52 Rose residency, Near HiLite mall, Mavoor road,
                            Kozhikode, Kerala 670362, India
                          </p>

                          <div className="address-button">
                            <button className="change-address">
                              <i className="fa-regular fa-pen-to-square"></i> Change address
                            </button>
                            <button className="sel-def">
                              <i className="fa-solid fa-box-open"></i> Deliver here
                            </button>
                          </div>
                        </div>
                      </div>
                      </div>

                      </div>
                      </div>
                )}
                {activeTab === "wishlist" && (
                    <div className="col-md-10 wishlist-profile">
                        <div className="heading-wishlist">
                            <h5>Your Wishlist</h5>
                            <p></p>
                        </div>
                         {wishlist.length === 0 ? (
                        <div className="empty-wishlist">
                        <h4>Your Wishlist is Empty Now <i class="fa-solid fa-heart-crack heart"></i></h4>
                        <p>Start adding your favorite products</p>
                        <Link href="/products" className="explore">Explore</Link>
                        </div>
                    ) : (
                    <div className="row">
                        {Products.map((item)=>(
                            <div className="col-md" key={item.id}>
                                <WishlistCard product={item}
                                 onRemove={handleRemove} />
                            </div>
                        ))}
                    </div>
                    )}
                    </div>
                )}
                {activeTab === "account" &&(
                  <div className="col-md-10">
                
                   <div className="tab-content">
                         <h5 className="account-de">Account Details</h5>
                         <div className="profile">
                             <img className="profile-image" src="/images/profile.jpg" alt=""/>
                             <div className="camera-edit">
                                 <i className="fa-regular fa-camera"></i>
                             </div>
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
                         </div>
                       
                )}
          </div>
        </div>
      </section>
    </>
  );
}
            
