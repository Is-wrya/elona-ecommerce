"use client";

import Link from "next/link";

export default function Collection(){
    return(
        <>
         <section className="collection-details">
        <div className="container">
            <div className="inner-content">
                <div className="left-heading">
                    <div>
                        <h3> Collections</h3>
                        <p><Link href="/"> home</Link> / <Link href="/products">collections</Link> / <Link href="/collections">dresses</Link>
                        </p>
                    </div>
                </div>
                <div className="right-heading">
                    <button className="sort-btn">sort</button>
                    <button className="filter-btn">filter
                        <i className="fa-solid fa-filter"></i></button>
                </div>
                <div className="sort-selection">
                    <ul>
                        <li data-sort="low">Price: Low to High</li>
                        <li data-sort="high">Price: High to Low</li>
                        <li data-sort="new">Newest</li>
                    </ul>
                </div>
                <div className="filter-selection">
                    <h4>Filter By</h4>
                        <label><input type="checkbox"/> Under $100</label>
                        <label><input type="checkbox"/> $100 - $300</label>
                        <label><input type="checkbox"/> Above $300</label>
                    <button className="apply"id="applyFilter">apply</button>
                </div>
            </div>
        </div>

    </section>
  
    <section className="collection-image">
        <div className="container">
            <div className="row  product-row ">
                <div className="col-md">
                    <div className="product-card" data-aos="fade-up"
         data-aos-delay="0">
                        <div className="product-img">
                           <img src="/images/sample1.jpeg" alt="product"/>
                           <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                        </div>
                        <div className="details">
                            <h4>Green maxi dress</h4>
                            <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                            <div className="rating d-flex">
                                ★★★★★ <span>4.5/5</span>
                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-md">
                <div className="product-card" data-aos="fade-up"
         data-aos-delay="0">
                    <div className="product-img">
                        <img src="/images/sample2.jpeg" alt="product"/>
                        <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                    </div>
                    <div className="details">
                        <h4>Green maxi dress</h4>
                        <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                        <div className="rating d-flex">
                            ★★★★★ <span>4.5/5</span>
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="product-card" data-aos="fade-up"
         data-aos-delay="0">
                    <div className="product-img">
                        <img src="/images/sample3.jpeg" alt="product"/>
                        <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                    </div>
                    <div className="details">
                        <h4>Green maxi dress</h4>
                        <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                        <div className="rating d-flex">
                            ★★★★★ <span>4.5/5</span>
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="product-card" data-aos="fade-up"
         data-aos-delay="0">
                    <div className="product-img">
                        <img src="/images/sample4.jpeg" alt="product"/>
                        <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                    </div>
                    <div className="details">
                        <h4>Green maxi dress</h4>
                        <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                        <div className="rating d-flex">
                            ★★★★★ <span>4.5/5</span>
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="product-card" data-aos="fade-up"
         data-aos-delay="0">
                    <div className="product-img">
                        <img src="/images/sample1.jpeg" alt="product"/>
                        <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                    </div>
                    <div className="details">
                        <h4>Green maxi dress</h4>
                        <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                        <div className="rating d-flex">
                            ★★★★★ <span>4.5/5</span>
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="product-card" data-aos="fade-up"
         data-aos-delay="100">
                    <div className="product-img">
                        <img src="/images/sample6.jpeg" alt="product"/>
                        <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                    </div>
                    <div className="details">
                        <h4>Green maxi dress</h4>
                        <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                        <div className="rating d-flex">
                            ★★★★★ <span>4.5/5</span>
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md">
                <div className="product-card" data-aos="fade-up"
         data-aos-delay="100">
                    <div className="product-img">
                        <img src="/images/sample7.jpeg" alt="product"/>
                        <div className="hover-icons">
                                        <Link href="/productview" className="view-icon">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>

                                        <Link href="/addtocart" className="cart-icon">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </div>
                    </div>
                    <div className="details">
                        <h4>Green maxi dress</h4>
                        <span className="wishlist"><i className="fa-regular fa-heart"></i></span>
                        <div className="rating d-flex">
                            ★★★★★ <span>4.5/5</span>
                        </div>
                        <div className="price">
                            $120
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
