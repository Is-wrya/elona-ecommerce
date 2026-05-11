import Link from "next/link";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import  BrandsOffer from "../../lib/brands-sec";

export default function Brands(brands){
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
                  0: {slidesPerView: 2 },
                    320: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}>
           {BrandsOffer.slice(0,9).map((brands)=>(
               <SwiperSlide>
                  <Link href="/brandpage">
                  <img src={brands.image} alt={brands.name}/>
                  </Link>
               </SwiperSlide>
           ))}
           
             </Swiper>
        </div>
       </section>
       </> 
    )
}