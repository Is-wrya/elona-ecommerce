"use client";

import { useState } from "react";

export default function  ColorSelector({ colors}) {
    const [selectedColor, setSelectedColor] = useState("");

    return(
        <div className="color-selector">
            <div className="color-options">
                {colors.map((color)=>(
                    <span key={color}
                    className={`color-box ${color} ${
                    selectedColor === color ? "active" : ""}`}
                    onClick={()=>setSelectedColor(color)}
                    ></span>
                ))}
            </div>
        </div>
    )
}