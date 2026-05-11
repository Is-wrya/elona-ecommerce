"use client";

import Link from "next/link";
import Banner from "../../components/wishlist/banner";
import BrandsOffer from "../../lib/brands-sec";

export default function Brandsection() {
  return (
    <>
      <Banner title="Brands" />
      <section className="trusted-brands">
        <div className="container">
          
          <div className="brands-sec">
            <h3>Our Brands</h3>
            <p>
              Explore a curated collection of trusted brands that deliver quality,
              style, and reliability in every product.
            </p>
          </div>
          <div className="brand-det">
            <div className="row">
        {BrandsOffer ?. map((item) =>
              <div className=" col-6 col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                   <Link href="/products"> <img src={item.image} alt={item.name} /></Link>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}