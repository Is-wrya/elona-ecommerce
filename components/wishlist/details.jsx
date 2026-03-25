"use client";

import Image from "next/image";
import Link from "next/link";
import ColorSelector from "./colorselection";

export default function WishlistCard({ product, onRemove }){
    return(
        <div className="wishlist-card">
            <div className="img-card">
                <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={350}
                className="img-sec"
                />
                
                <div className="hover-icons">
                    <Link href={`/productview/${product.id}`}className="view-icon">
                    <i className="fa-regular fa-eye"></i>
                </Link>
                {!product.soldout && (
                    <button className="addtocart-sec">ADD TO CART</button>)}
                    <button className="remove-btn"
                onClick={()=>onRemove(product.id)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                </div>
                {product.soldout && (
                    <button className="soldout">Soldout</button>
                )}
            </div>
            <div className="content">
        <h5 className="heading">{product.name}</h5>
        <h5>${product.price}</h5>
        </div>
         {product.colors && (
        <ColorSelector colors={product.colors} />
      )}
        </div>
    );
}