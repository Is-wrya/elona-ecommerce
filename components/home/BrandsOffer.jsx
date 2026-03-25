import Link from "next/link";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Brands(){
    return(
       <>
       <section className="brands">
        <div className="container">
            <h3 className="brand-we-offer">Brand We Offer</h3>
            <Swiper
                                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={3}
                slidesPerGroup={1}
                speed={600}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                navigation
                breakpoints={{
                    320: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}>
           
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand2.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand1.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand3.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand4.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand5.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand6.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand7.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand8.svg" alt=""/></Link> 
            </SwiperSlide>
            <SwiperSlide>
               <Link href="/collections"><img src="images/brand9.svg" alt=""/></Link> 
            </SwiperSlide>
             </Swiper>
        </div>
       </section>
       </> 
    )
}