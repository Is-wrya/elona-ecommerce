"use client";

import Link from "next/link";
import Banner from "../../components/wishlist/banner";

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
              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand1.svg" alt="brand" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand2.svg" alt="brand" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand3.svg" alt="brand" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand4.svg" alt="brand" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand5.svg" alt="brand" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand7.svg" alt="brand" />
                  </div>
                </div>
              </div>
             <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand8.svg" alt="brand" />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand9.svg" alt="brand" />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="brand-details">
                  <div className="brand-img">
                    <img src="/images/brand1.svg" alt="brand" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}