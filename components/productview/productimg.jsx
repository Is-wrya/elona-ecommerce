"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Products from "../../lib/products";


export default function ProductImg({image=[]}){

    const [ activeImg, setActiveImg ] = useState(image[0] || "");
    return(
        <>
           <div className="left-images">
                <div className="img">
                    <div className="main-image">
                        <img className="img-main" src={activeImg} alt=""/>
                    </div>
                </div>
                <Swiper className="myThumbSwiper"
                spaceBetween={5}
                slidesPerGroup={1}
                slidesPerView={4.2}
                >
                    {image.map((img,index)=>(
                        <SwiperSlide key={index}>
                            <img className={`thumb ${activeImg===img ? "active" : ""}`}
                            src={img}
                            alt=""
                            onClick={()=> setActiveImg(img)}
                            style={{cursor:"pointer"}}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> 
        </>
    )
}