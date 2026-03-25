"use client";

import Image from "next/image";

export default function Banner({ title }){
    return(
        <section className="bottom-image">
            <div className="container">
                <div className="img-card">
                    <Image src="/images/bannersec.png"
                    width={1200}
                    height={500}
                    className="banner-img"/>
                    <h1 className="heeading">{title}</h1>
                </div>
            </div>
        </section>
    )
}