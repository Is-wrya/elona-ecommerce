"use client";

import Link from "next/link";

export default function SuccessPage(){
    return(
        <section className="success">
            <div className="success-page">
                <div className="container">
                    <h1>Thank you for purchasing with us!</h1>
                    <div className="img">
                        <img src="/images/success.png" alt=""/>
                    </div>
                    <p className="update">We’re getting started on your order right away . You’ll receive an confirmation Email shortly</p>
                    <p class="order-id">Your Order Id : JE6Cx986</p>
                    <div className="btn-success">
                        <Link href="/addtocart" className="btn-odr">Go to Orders</Link>
                        <Link href="/products" className="cont-shop">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}