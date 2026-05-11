"use client";
import { useState } from "react";

export default function Filter({filters, setFilters}){
    const [openShop, setOpenShop] = useState(true);
    const[ openNewarrivals, setOpenNewarrivals ] = useState(true);
    const[ openCollection, setOpenCollection ] = useState(true);
    const[ openBestseller, setOpenBestseller ] = useState(true);
    const[ min, setMin ] = useState(100);
    const[ max, setMax ] = useState(1000);
   const toggleCategory = (category) => {
  setFilters((prev) => ({
    ...prev,
    category: prev.category.includes(category)
      ? prev.category.filter((c) => c !== category)
      : [...prev.category, category],
  }));
};
const toggleFilter = (key, value) => {
  setFilters((prev) => ({
    ...prev,
    [key]: (prev[key] || []).includes(value)
      ? prev[key].filter((item) => item !== value)
      : [...(prev[key] || []), value],
  }));
};
    return(
        <>
        <section className="filter">
        <div className="category-filter">
            <div className="heading"><h4>CATEGORIES</h4></div>
            <h4 onClick={() => setOpenShop(!openShop)}>
                Shop<span className="arrow">{openShop ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
           {openShop && (
            <div className="options">
                   <label className="check-item">
                    <input
                    type="checkbox"
                    checked={filters.category.includes("men")}
                    onChange={() => toggleFilter("category", "men")}
                    /><span className="text">Men</span>
                    </label>

                    <label className="check-item">
                    <input type="checkbox"
                    checked={filters.category.includes("women")}
                    onChange={() => toggleFilter("category", "women")}
                    /><span className="text">Women</span>
                    </label>

            </div>
           )}
            
            <h4 onClick={()=>setOpenNewarrivals(!openNewarrivals)}>
                New Arrivals<span className="arrow">{openNewarrivals ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
            {openNewarrivals && (
              <div className="options">
               <label className="check-item">
                <input
                    type="checkbox"
                    checked={filters.name.includes("SHIRT")}
                    onChange={() => toggleFilter("name", "SHIRT")}
                />
                <span className="text">Shirts</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" 
                    checked={filters.name.includes("PANTS")}
                    onChange={() => toggleFilter("name", "PANTS")}
                    /><span className="text">Pants</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" 
                    checked={filters.name.includes("JUMPSUITS")}
                    onChange={() => toggleFilter("name", "JUMPSUITS")}
                    /><span className="text">Jumpsuits</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" 
                    checked={filters.name.includes("SKIRT")}
                    onChange={() => toggleFilter("name", "SKIRT")}
                    /><span className="text">Skirt</span>
                </label>
                 <label className="check-item">
                   <input type="checkbox" 
                    checked={filters.name.includes("DRESS")}
                    onChange={() => toggleFilter("name", "DRESS")}
                    /><span className="text">Dress</span>
                </label>
                </div>
            ) }
            <h4 onClick={()=>setOpenCollection(!openCollection)}>
                Collection<span className="arrow">{openCollection ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
            {openCollection && (
              <div className="options">
                <label className="check-item">
                    <input type="checkbox" 
                    checked = {filters.name.includes("SUITS")}
                    onChange={() => toggleFilter("name","SUITS")}/><span className="text">Suits</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" 
                    checked = {filters.name.includes("PANTS")}
                    onChange={() => toggleFilter("name", "PANTS")}/><span className="text">Pants</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox"
                    checked={filters.name.includes("SHIRT")}
                    onChange={() => toggleFilter("name", "SHIRT")}
                     /><span className="text">Shirts</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" checked={filters.name.includes("SKIRT")}
                    onChange={() => toggleFilter("name", "SKIRT")}/><span className="text">Denim</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" checked={filters.name.includes("DRESS")}
                    onChange={() => toggleFilter("name", "DRESS")}/><span className="text">Dress</span>
                </label>
                </div>
            ) }
            <h4 onClick={()=>setOpenBestseller(!openBestseller)}>
                Bestsellers<span className="arrow">{openBestseller ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
            {openBestseller && (
              <div className="options">
                <label className="check-item">
                    <input type="checkbox" checked={filters.Featured.includes("SUITS")}
                    onChange={() => toggleFilter("Featured", "SUITS")}/><span className="text">Suits</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" checked={filters.Featured.includes("PANTS")}
                    onChange={() => toggleFilter("Featured", "PANTS")}/><span className="text">Pants</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" checked={filters.Featured.includes("SHIRT")}
                    onChange={() => toggleFilter("Featured", "SHIRT")}/><span className="text">Shirts</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" checked={filters.Featured.includes("SKIRT")}
                    onChange={() => toggleFilter("Featured", "SKIRT")}/><span className="text">Denim</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" checked={filters.Featured.includes("DRESS")}
                    onChange={() => toggleFilter("Featured", "DRESS")}/><span className="text">Dress</span>
                </label>
                </div>
            ) }


        </div>

            
            {/* COLORS */}


            <div className="color-sel">
                <div className="heading"><h4>COLORS</h4></div>
                <label className="color-item">
                    <input type="checkbox" checked={filters.colors.includes("yellow")}
                    onChange={() => toggleFilter("colors", "yellow")}/><span className="box-col yellow"></span><span className="text">Yellow</span>
                </label>
                <label className="color-item">
                    <input type="checkbox" checked={filters.colors.includes("black")}
                    onChange={() => toggleFilter("colors", "black")}/><span className="box-col black"></span><span className="text">Black</span>
                </label>
                <label className="color-item">
                    <input type="checkbox" checked={filters.colors.includes("red")}
                    onChange={() => toggleFilter("colors", "red")}/><span className="box-col red"></span><span className="text">Red</span>
                </label>
                <label className="color-item">
                    <input type="checkbox" checked={filters.colors.includes("pink")}
                    onChange={() => toggleFilter("colors", "pink")}/><span className="box-col pink"></span><span className="text">Pink</span>
                </label>
                <label className="color-item">
                    <input type="checkbox" checked={filters.colors.includes("orange")}
                    onChange={() => toggleFilter("colors", "orange")}/><span className="box-col orange"></span><span className="text">Orange</span>
                </label>
                <label className="color-item">
                    <input type="checkbox" checked={filters.colors.includes("brown")}
                    onChange={() => toggleFilter("colors", "brown")}/><span className="box-col brown"></span><span className="text">Brown</span>
                </label>
            </div>

            {/* SIZE */}
            <div className="size-sel">
                <div className="heading"><h4>SIZE</h4></div>
                <div className="size-op">
                {["XS","S","M","L","XL","XXL"].map((size)=>
                (<button key={size}
                    type="button"
                className={`size ${filters.sizes.includes(size) ? "active" : ""}`}
                onClick={()=> toggleFilter("sizes", size)}>
                    {size}
                </button>))}
            </div>
            </div>


    {/*  PRICE  */}

            <div className="price-sec">
                <div className="heading-price"><h4>PRICE</h4></div>
                <div className="slider-container">
                    <div className="slider-track"></div>
                <div className="slider-range"style={{left:`${(min / 1000) * 100}%`,right:`${100 - (max / 1000) * 100}%`}}> 
                    </div>
                    <input type="range"
                            min="0"
                            max="1000"
                            value={min}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setMin(value);
                                setFilters((prev) => ({
                                    ...prev,
                                    minPrice: value,
                                }));
                                }}
                            className="range range-left"
                    />
                    <input type="range"
                            min="0"
                            max="1000"
                            value={max}
                            onChange={(e)=>{
                                const value = Number(e.target.value);
                                setMax(value);
                                setFilters((prev) => ({
                                    ...prev,
                                    maxPrice: value,
                                }));
                            }
                            }
                            className="range range-right"/>
                </div>
                     <div className="price">
                    <p className="price-text">
                        ₹{min} - ₹{max}
                    </p>
                    </div>
                </div>
            
</section>

</>
    )

}


