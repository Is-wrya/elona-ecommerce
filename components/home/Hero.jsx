"use clients";

import Link from "next/link";

export default function Hero() {
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Dress for The <span>Life</span><br/>You Want
                </h1>
            </div>
            <button className="cta"><Link href="#">SHOP NOW <i className="fa-solid fa-arrow-right"></i></Link></button>
        </section>
    );
}