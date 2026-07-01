
"use client";

import Link from "next/link";
import Banner from "../../components/wishlist/banner";
import Products from "../../lib/products";
import Image from "next/image";
import Sort from "@/components/filters/sort";
import { useState } from "react";
import ColorSelector from "@/components/wishlist/colorselection";
import Filter from "../../components/filters/filter";
import { useCart } from "../../context/CartContent";
import { useWishlist } from "../../context/WishlistContext";


export default function ProductData(){
   const [filters, setFilters] = useState({
    category: [],
    colors: [],
    sizes: [],
    name: [],
    Featured:[],
    minPrice: 0,
    maxPrice: 1000,
   });
   const [products, setProducts] = useState(Products);
    const filteredProducts = products.filter((item) => {
    const shopMatch =
    filters.category.length === 0 ||
    filters.category.includes(item.category);
      const categoryMatch =
      filters.name.length === 0 ||
      filters.name.includes(item.name);
    const bestsellerMatch =
      filters.Featured.length === 0 ||
        (item.label === "Featured" &&
    filters.Featured.includes(item.name));
    const colorMatch =
      filters.colors.length === 0 ||
      item.colors.some((c) => filters.colors.includes(c));
  const sizeMatch =
   filters.sizes.length === 0 ||
  item.size.some((size) => filters.sizes.includes(size));

    const priceMatch =
      item.price >= filters.minPrice &&
      item.price <= filters.maxPrice;

    return shopMatch && categoryMatch &&bestsellerMatch && colorMatch && sizeMatch && priceMatch;
   });
   const [showFilter ,setShowFilter ] =useState(false);
   const {  addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const toggleLike = (item) => {
      if (isInWishlist(item.id)) {
        removeFromWishlist(item.id);
      } else {
        addToWishlist(item);
      }
    };

   const { addToCart } = useCart();
   
   
   return(
      <>
    <Banner title ="Products"/>
    <div className="container">
    <div className="mobile-filter-btn">
          <button onClick={() => setShowFilter(true)}>
            <i className="fa-solid fa-filter"></i> Filters
          </button>
         <Sort products={products} setProducts={setProducts} />
    </div>

         <div className="row">
            <div className="col-md-3">
              <div className={`filter-wrapper ${showFilter ? "open" : ""}`}>
            <button className="close-btn" onClick={() => setShowFilter(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <Filter filters={filters} setFilters={setFilters}/>
          </div>
            </div>
        
         <div className="col-md-9">
            
         <div className="products-list">
       <div className="row">
  {filteredProducts.map((item) => (
    <div key={item.id} className=" col-6 col-md-3">
      
      <div className="productlist-card">
        <div className="img-card">
          <img
            src={item.image}
            alt={item.name}
            width={300}
            height={350}
            className="img-sec"
          />

          <div className="hover-icons">
            <Link href={`/productview/${item.id}`} className="view-icon">
              <i className="fa-regular fa-eye"></i>
            </Link>

            {/* {!item.soldout && (
              <button className="addtocart-sec" onClick={() => addToCart(item)}>ADD TO CART</button>
            )} */}
             <button className="heart-btn" onClick={() => {console.log("clicked", item.id);
              toggleLike(item);}}>
                                    <i className={ isInWishlist(item.id) ? "fa-solid fa-heart" : "fa-regular fa-heart" }style={{
                                        color: isInWishlist(item.id) ? "red" : "black",
                                        }}
                                    />
                                </button>
          </div>

          {item.soldout && (
            <button className="soldout">Soldout</button>
          )}
        </div>

        <div className="content">
          <h5 className="heading">{item.name}</h5>
          <h5>₹{item.price}</h5>
        </div>

        {item.colors && (
          <ColorSelector colors={item.colors} />
        )}
      </div>

    </div>
  ))}
</div>
      </div>
      </div>
       </div>

   
</div>
    </>
   ) 
}



