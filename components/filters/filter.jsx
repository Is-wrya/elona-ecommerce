"use client";
import { useState } from "react";

export default function Filter(){
    const[ openShop, setOpenShop ] = useState(true);
    const[ openNewarrivals, setOpenNewarrivals ] = useState(true);
    const[ openCollection, setOpenCollection ] = useState(true);
    const[ openBestseller, setOpenBestseller ] = useState(true);
    const[ min, setMin ] = useState(100);
    const[ max, setMax ] = useState(1000);
    const [activeSize, setActiveSize] = useState("");
    return(
        <>
        <section className="filter">
        <div className="category-filter">
            <div className="heading"><h4>CATEGORIES</h4></div>
            <h4 onClick={()=>setOpenShop(!openShop)}>
                Shop<span className="arrow">{openShop ? <i className="fa-solid fa-angle-up arrow"></i> : (<i className="fa-solid fa-angle-down arrow"></i>)}</span>
            </h4>
            {openShop && (
              <div className="options">
                <label className="check-item">
                    <input type="checkbox" /><span className="text">Men</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Women</span>
                </label>
                </div>
            ) }
            
            <h4 onClick={()=>setOpenNewarrivals(!openNewarrivals)}>
                New Arrivals<span className="arrow">{openNewarrivals ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
            {openNewarrivals && (
              <div className="options">
                <label className="check-item">
                    <input type="checkbox" /><span className="text">Suits</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Pants</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Shirts</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Denim</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Dress</span>
                </label>
                </div>
            ) }
            <h4 onClick={()=>setOpenCollection(!openCollection)}>
                Collection<span className="arrow">{openCollection ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
            {openCollection && (
              <div className="options">
                <label className="check-item">
                    <input type="checkbox" /><span className="text">Suits</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Pants</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Shirts</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Denim</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Dress</span>
                </label>
                </div>
            ) }
            <h4 onClick={()=>setOpenBestseller(!openBestseller)}>
                Bestsellers<span className="arrow">{openBestseller ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </h4>
            {openBestseller && (
              <div className="options">
                <label className="check-item">
                    <input type="checkbox" /><span className="text">Suits</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Pants</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Shirts</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Denim</span>
                </label>
                 <label className="check-item">
                    <input type="checkbox" /><span className="text">Dress</span>
                </label>
                </div>
            ) }


        </div>

            
            {/* COLORS */}


            <div className="color-sel">
                <div className="heading"><h4>COLORS</h4></div>
                <label className="color-item">
                    <input type="checkbox"/><span className="box-col yellow"></span><span className="text">Yellow</span>
                </label>
                <label className="color-item">
                    <input type="checkbox"/><span className="box-col black"></span><span className="text">Black</span>
                </label>
                <label className="color-item">
                    <input type="checkbox"/><span className="box-col red"></span><span className="text">Red</span>
                </label>
                <label className="color-item">
                    <input type="checkbox"/><span className="box-col pink"></span><span className="text">Pink</span>
                </label>
                <label className="color-item">
                    <input type="checkbox"/><span className="box-col orange"></span><span className="text">Orange</span>
                </label>
                <label className="color-item">
                    <input type="checkbox"/><span className="box-col brown"></span><span className="text">Brown</span>
                </label>
            </div>

            {/* SIZE */}
            <div className="size-sel">
                <div className="heading"><h4>SIZE</h4></div>
                <div className="size-op">
                <button className={`size ${activeSize === "XS" ? "active" : ""}`} 
                        onClick={() => setActiveSize("XS")}>XS</button>
                <button className={`size ${activeSize === "S" ? "active" : ""}`} 
                        onClick={() => setActiveSize("S")}>S</button>
                <button className={`size ${activeSize === "M" ? "active" : ""}`} 
                        onClick={() => setActiveSize("M")}>M</button>
                <button className={`size ${activeSize === "L" ? "active" : ""}`} 
                        onClick={() => setActiveSize("L")}>L</button>
                <button className={`size ${activeSize === "XL" ? "active" : ""}`} 
                        onClick={() => setActiveSize("XL")}>XL</button>
                <button className={`size ${activeSize === "XXL" ? "active" : ""}`} 
                        onClick={() => setActiveSize("XXL")}>XXL</button>
                </div>
            </div>



            {/* PRICE */}

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
                            onChange={(e)=>setMin(e.target.value)}
                            className="range range-left"
                    />
                    <input type="range"
                            min="0"
                            max="1000"
                            value={max}
                            onChange={(e)=>setMax(e.target.value)}
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



