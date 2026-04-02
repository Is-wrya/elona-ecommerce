"use clients";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Hero() {
    return(
        <section className="hero">
            
            <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            speed={1}
            autoplay={{delay:10000}}
            loop={true}
            >
                
            <SwiperSlide>
                    
          <div className="img-hero">
            <div className="img-hero-sec">
            <img src="/images/bannerimg2.jpeg" />
            </div>
            <div className="hero-content">
                <h1>
                    “Dress for The <span>Life</span><br/>You Want”
                </h1>
            </div>
          </div>
        </SwiperSlide>
              
            <SwiperSlide>
                    
          <div className="img-hero">
            <div className="img-hero-sec">
            <img src="/images/bannerimg3.jpeg" />
            </div>
            <div className="hero-content">
                <h1>
                   “Fashion That Speaks <span>Louder</span> <br/>Than Words” 
                </h1>
            </div>
          </div>
        </SwiperSlide>
             
            <SwiperSlide>
                    
          <div className="img-hero">
            <div className="img-hero-sec">
            <img src="/images/bannerimg1.jpeg" />
            </div>
            <div className="hero-content">
                <h1>
                    “Where Fashion Meets <span>Timeless</span><br/>Design”
                </h1>
            </div>
          </div>
        </SwiperSlide>

            <button className="cta"><Link href="/products">SHOP NOW <i className="fa-solid fa-arrow-right"></i></Link></button>
            </Swiper>
         
        </section>
    );
}