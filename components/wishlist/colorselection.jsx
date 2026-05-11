"use client";

import { useState } from "react";

export default function  ColorSelector({ colors = [] }) {
    const [selectedColor, setSelectedColor] = useState(colors[0] || "");

    return(
        <div className="color-selector">
            <div className="color-options">
                {colors.map((color)=>(
                    <span key={color}
                    className={`color-box ${color} ${
                    selectedColor === color ? "active" : ""}`}
                    style={{backgroundColor: color }}
                    onClick={()=>setSelectedColor(color)}
                    ></span>
                ))}
            </div>
        </div>
    )
}