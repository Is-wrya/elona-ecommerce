"use client";

import Link from "next/link";

export default function Error(){
    return(
        <section className="error-page">
            <div className="container">
                <div className="container error-img">
                    <img src="/images/error.png"/>
                </div>
                <div className="content">
                    <p>"The page you are looking for might have been removed<br/>had it's name changed or it's temporary unavailable</p>
                </div>
                <div className="back-btn">
                    <Link href="/"><button>back</button></Link>
                </div>
            </div>
        </section>
    );
}