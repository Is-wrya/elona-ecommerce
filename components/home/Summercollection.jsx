"use client";

import Link from "next/link";

export default function SummerCollections(){

    return(
        <>
        <section className="summer">
            <div className="container text-center">
                <h3 className="summer-title">This Summer</h3>
                <p className="summer-subtitle">Effortless everyday</p>
            </div>
        </section>
        <section className="card-wrapper" id="cardWrapper">
            <div className="container">
               <div className="card"><img src="/images/promo1.jpeg"/></div> 
               <div className="card"><img src="/images/promo2.jpeg"/></div>
               <div className="card"><img src="/images/promo3.jpeg"/></div>
               <div className="card"><img src="/images/promo4.jpeg"/></div>
               <div className="card"><img src="/images/promo5.jpeg"/></div>
               <div className="card"><img src="/images/promo6.jpeg"/></div>
            </div>
        </section>
        <div className="button">
            <Link href="/products"><button className="primary-button">EXPLORE NOW</button></Link>
        </div>
        </>
    );
}