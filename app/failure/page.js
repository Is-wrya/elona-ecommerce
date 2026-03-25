"use client";

import Link from "next/link";

export default function FailurePage(){
    return(
        <section className="failure">
            <div className="failure-page">
                <div className="container">
                    <h1>Sorry for the trouble!</h1>
                    <div className="img">
                        <img src="/images/failure.png" alt=""/>
                    </div>
                    <p className="update">Your Transaction has failed due to some technical error !<br/>Please Try Again</p>
                    <div className="btn-failure">
                        <Link href="/profile" className="btn-odr">Go to Orders</Link>
                        <Link href="/products" className="cont-shop">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}