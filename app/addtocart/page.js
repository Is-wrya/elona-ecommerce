"use client";

import Link from "next/link";
import Banner from "../../components/wishlist/banner";
import { useCart } from "../../context/CartContent";

export default function AddtoCart(){

    const {
        cartItems,
        increaseQty,
        removeFromCart,
        decreaseQty,
    } = useCart();
    const subTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );
    const deliveryCharge = cartItems.length > 0 ? 5 : 0;
    const total = subTotal + deliveryCharge; 

    return(
        <>
        <section className="add-to-cart">
             <Banner title="Your Cart"/>
    </section>   

    <section className="cart-page">
        <div className="container">
                <div className="row">
                    <div className="cart-details"></div>
                        <div className="col-md-12">
                            <div>
                                <h4> Cart</h4>
                                <p><Link href="/"> home</Link> / <Link href="/products">cart</Link>
                                </p>
                            </div>
                        </div>
                            {cartItems.length === 0 ? (
                                <div className="col-md-12">
                                <div className="empty-wishlist">
                            <h4>Your Cart is Empty Now <i class="fa-solid fa-heart-crack heart"></i></h4>
                            <p>Start adding your favorite products</p>
                            <Link href="/products" className="explore">Explore</Link>
                            </div>
                            </div> 
                            ) : 
                            (
                                <>
                                <div className="col-md-7">
                                    {cartItems.map((item) => (
                                <div className="recent-carts" key={item.id}>
                                    <div className="cart-img">
                                        <Link href={`/productview/${item.id}`}>
                                        <img src={item.image} alt={item.text}/>
                                        </Link>
                                    </div>
                                    <div className="cart-content">
                                        <h6>{item.name}</h6>
                                        <h5>${item.price}</h5>
                                        <div className="color-sec">
                                            <h6>color:</h6>
                                            <button className="sel-col" style={{backgroundColor: item.selectedColor}}></button>
                                        </div>
                                        <div className="size-sec">
                                            <h6>size: {item.selectedSize }</h6>
                                        </div>
                                        <div className="cart-actions">
                                            <button className="minus" onClick={() => decreaseQty(item.id)}>-</button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button className="plus" onClick={() => increaseQty(item.id)}>+</button>
                                        </div>
                                        <div className="delete">
                                            <button onClick={()=> removeFromCart(item.id)}>
                                                <i className="fa-regular fa-trash-can"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                </div>
                               {cartItems.length > 0 && (
                        <div className="col-md-5">
                            <h4>Order Summary</h4>
                            <div className="order-summary1">
                                <div className="summary-row">
                                    <span>Sub Total</span>
                                    <span id="subtotal">$ {subTotal}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery Fee</span>
                                    <span id="delivery">$ {deliveryCharge}</span>
                                </div>
                                <div className="summary-row totals">
                                    <span>Total</span>
                                    <span id="total">$ {total} </span>
                                </div>
                                <hr/>
                                <div className="summary-row sub-total">
                                    <span>Total</span>
                                    <span id="total1">$ {total} </span>
                                </div>
                                <div className="coupon-box">
                                    <input type="text" placeholder="Apply coupon">
                                    </input>
                                    <button>Apply</button>
                                </div>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        </div>
                        )}
                                </>
                            )}
                        </div>
                 </div>    
    </section>
</>
    );
}


