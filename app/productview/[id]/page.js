
"use client"

import { useParams } from "next/navigation";
import ProductDetails from "../../../components/productview/productdetails";
import ProductImg from "../../../components/productview/productimg";
import ProductVarient from "../../../components/productview/productvarient";
import AddButton from "../../../components/productview/button";
import Link from "next/link";
import FitDetails from "../../../components/productview/productaccordation";
import ReviewSec from "../../../components/productview/productreview";
import RelatedProducts from "../../../components/productview/relatedproducts";
import Products from "../../../lib/products";
import { useState } from "react";


export default function ProductView(){
  const params = useParams();
    const productId = parseInt(params.id);
    const product = Products.find((p)=>p.id ===productId);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    if(!product) return<p className="not-found">Product not found</p>
    return(
        <>
        <div className="product-view">
          <div className="subheading">
             <p>
                 <Link href="/">home</Link> / <Link href="/products">explore</Link> //
             </p>
         </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="sticky-img">
                    <ProductImg image={product.image}/>
                    </div>
                </div>
                <div className="col-md-8">
                    <ProductDetails/>
                    <ProductVarient
                        product={product}
                        selectedColor = {selectedColor}
                        setSelectedColor = {setSelectedColor}
                        selectedSize = {selectedSize}
                        setSelectedSize = {setSelectedSize}
                    />
                    <AddButton 
                        item={product}
                        selectedColor = {selectedColor}
                        selectedSize = {selectedSize}
                    />
                    <FitDetails/>
                    <ReviewSec/>     
                </div>
            </div>
            <RelatedProducts/>
        </div>
        </>
    )
}
