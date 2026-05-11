"use client";
import { useState } from "react";

export default function FitDetails(){
    const [openIndex, setOpenIndex] = useState(null);
    const toggleSection = (index) => {
     if (openIndex === index) {
       setOpenIndex(null);
     } else {
       setOpenIndex(index);
     }
   };
    return(
        <section className="product-view">
       <div className="details-sec">
                         <div className="fit-details" onClick={() => toggleSection(1)}>
                             <h5>Fit Details</h5>
                             <i className="fa-solid fa-chevron-down"/>
                         </div>
                         {openIndex === 1 &&(
                         <div className="content">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                 ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                         </div>
                         )}
                         <div className="fit-details" onClick={() => toggleSection(2)}>
                             <h5>Fabric & After care Details</h5>
                             <i className="fa-solid fa-chevron-down"/>
                         </div>
                         {openIndex === 2 &&(
                         <div className="content">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                 ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                         </div>
                         )}
                         <div className="fit-details" onClick={() => toggleSection(3)}>
                             <h5>Shipping & Return</h5>
                             <i className="fa-solid fa-chevron-down"/>
                         </div>
                         {openIndex === 3 &&(
                         <div className="content">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                 ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                         </div>
                         )}
                     </div>  
                     </section>
    )
}