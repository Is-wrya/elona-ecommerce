"use client";

import Link from "next/link";
import Promo from "../../lib/home-banner";

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
               {Promo.map((item)=>(
                <div className="card" key={item.id}>
                    <img src={item.image} alt={`Promo-${item.id}`}/>
                </div>
               ))}
            </div>
        </section>

        <div className="button">
            <Link href="/products"><button className="primary-button">EXPLORE NOW</button></Link>
        </div>
        </>
    );
}