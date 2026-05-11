
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import HomeBanner from "../../lib/banner";

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
          {HomeBanner.map((item)=>(
            <SwiperSlide>        
          <div className="img-hero">
            <div className="img-hero-sec">
            <img src={item.image} alt={`Promo-${item.id}`} />
            </div>
            <div className="hero-content">
                <h1>
                    {item.text.line1} <span>{item.text.highlight}</span><br/>{item.text.line2}
                </h1>
            </div>
          </div>
        </SwiperSlide>
           ))}       
            

            <button className="cta"><Link href="/products">SHOP NOW <i className="fa-solid fa-arrow-right"></i></Link></button>
            </Swiper>
         
        </section>
    );
}