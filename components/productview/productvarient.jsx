"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProductVarient({
      product,
      selectedColor,
      setSelectedColor,
      selectedSize,
      setSelectedSize,
}){

    return(
        <div className="product-view">
            <div className="product-right">
            <div className="color">
                <h5>Color:</h5>
                <span className="col-name">Off-white</span>
            </div>
            <div className="color-options1">
                <h5>Colors</h5>
                <div className="color-opt">
                     {product.colors?.map((color) => (
                        <button
                        key={color}
                        className={selectedColor === color ? "active" : ""}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </div>
            </div>
            <div className="size-options">
                <h5>size</h5>
                <div className="size-wrapper">
                    {product.size?.map((size) => (
                        <button
                        key={size}
                        className={selectedSize === size ? "active" : ""}
                        onClick={() => setSelectedSize(size)}>
                            {size}
                        </button>
                    ))}
                </div>
                <Link href="#"><span className="measurement-guide">Find your size | Measurement Guide</span></Link>
            </div>
            </div>
        </div>
    )
}