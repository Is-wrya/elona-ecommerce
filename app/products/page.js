
"use client";

import Link from "next/link";
import Banner from "../../components/wishlist/banner";
import ProductsData from "@/lib/products";
import Image from "next/image";
import Sort from "@/components/filters/sort";
import { useState } from "react";
import ColorSelector from "@/components/wishlist/colorselection";
import Filter from "../../components/filters/filter";

export default function Products(){
   const [ products, setProducts] = useState(ProductsData);
   return(
      <>
    <Banner title ="Products"/>
   <div className="container">
    <div className="filters"><h4>filters</h4></div>
         <div className="row">
            <div className="col-md">
              <Filter/> 
            </div>
        
         <div className="col-md-9">
            <Sort products={products} setProducts={setProducts}/>
         <div className="products-list row">
       <div className="row">
  {products.map((product) => (
    <div key={product.id} className="col-md-5">
      
      <div className="productlist-card">
        <div className="img-card">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={350}
            className="img-sec"
          />

          <div className="hover-icons">
            <Link href={`/productview/${product.id}`} className="view-icon">
              <i className="fa-regular fa-eye"></i>
            </Link>

            {!product.soldout && (
              <button className="addtocart-sec">ADD TO CART</button>
            )}
            <button className="heart-btn">
            <i className="fa-regular fa-heart heart-icon"></i>
           </button>
          </div>

          {product.soldout && (
            <button className="soldout">Soldout</button>
          )}
        </div>

        <div className="content">
          <h5 className="heading">{product.name}</h5>
          <h5>₹{product.price}</h5>
        </div>

        {product.colors && (
          <ColorSelector colors={product.colors} />
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



