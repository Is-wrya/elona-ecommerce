"use client";
import { useState } from "react";
import { categories } from "@/lib/categories";
import Link from "next/link";
import Banner from "../wishlist/banner";

import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function Categories() {
    const router = useRouter();
    const params = useSearchParams();
    const activeGender = params.get("gender") || "all";

    const handleClick = (value)=>{
        const newParams = new URLSearchParams(params.toString());
        newParams.set("gender",value);
        router.push(`?${newParams.toString()}`);
    };
        
    const filteredCategories =
    activeGender === "all"
      ? categories
      : categories.filter((cat) => cat.gender === activeGender);


      
    return(
        <>
        <Banner title="Categories"/>
        <section className="categories-sec">
            <div className="container">
                <div className="cate-name">
                    <h3>Categories</h3>
                    <p>
                        <Link href="/" style={{fontSize:"12px"}}>home</Link> / <Link href="/categories" style={{fontSize:"12px"}}>categories</Link> 
                    </p>
                </div>
                <div className="filter-cat">
                <div className="cate-filters">
                    <button className={`filter-btn ${activeGender === "all" ? "active" : ""}`} onClick={()=> handleClick("all")}>ALL</button>
                    <button className={`filter-btn ${activeGender === "men" ? "active" : ""}`} onClick={()=> handleClick("men")}>MEN</button>
                    <button className={`filter-btn ${activeGender === "women" ? "active" : ""}`}onClick={()=> handleClick("women")}>WOMEN</button>
                </div>
                </div>
                <div className="category-grid">
                    <div className="row">
                    {filteredCategories.map((cat) => (
                    <div key={cat.name} className="col-md ">
                        <div className="category-card">
                        <div className="cat-image">
                        <img src={cat.image} alt={cat.label}/>
                              {/* <Link href={`/products?category=${cat.name}`} className="cat-label"> */}
                              <Link 
                                href={`/products?category=${cat.name}&gender=${cat.gender}`} 
                                className="cat-label"
                                >
                                <h4>{cat.name}</h4>
                            </Link>
                        </div>
                    </div>
                    </div>
                    ))}
                    </div>
                </div>
                </div>
        
        
        </section>
        </>
    )

}