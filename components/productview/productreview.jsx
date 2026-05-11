"use client";
import { useState } from "react";

export default function ReviewSec(){
    const [showAll,setShowAll] = useState(false);
    const [showForm,setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const handlePostReview = () => {
         alert("Your review has been submitted!");
         setShowForm(false);
         };
    return(
        <section className="product-view">
            <div className="rating-by-customers">
                <div className="heading">
                    <h5>Customer Review</h5>
                </div>
                <div className="cust-rating">
                    <div className="Customer-rating">
                        <div className="rating-5">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                             </div>
                            </div>
                            <div className="bars">
                                <div className="fill" style={{width:"70%"}}></div>
                            </div>
                            <span>50</span>
                        </div>
                         <div className="Customer-rating">
                        <div className="rating-5">
                            <div className="stars"><i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                             className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                             </div>
                            </div>
                            <div className="bars">
                                <div className="fill" style={{width:"70%"}}></div>
                            </div>
                            <span>50</span>
                        </div>
                         <div className="Customer-rating">
                        <div className="rating-5">
                            <div className="stars"><i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                             className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                             </div>
                            </div>
                            <div className="bars">
                                <div className="fill" style={{width:"75%"}}></div>
                            </div>
                            <span>20</span>
                        </div>
                         <div className="Customer-rating">
                        <div className="rating-4">
                            <div className="stars"><i className="fa-solid fa-star"></i>
                             <i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i
                             className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                             </div>
                            </div>
                            <div className="bars">
                                <div className="fill" style={{width:"75%"}}></div>
                            </div>
                            <span>70</span>
                        </div>
                          <div className="Customer-rating">
                        <div className="rating-3">
                            <div className="stars"><i className="fa-solid fa-star"></i>
                             <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i
                             className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                             </div>
                            </div>
                            <div className="bars">
                                <div className="fill" style={{width:"45%"}}></div>
                            </div>
                            <span>30</span>
                        </div>
                    </div>
                    
                </div>
                <div className="customer-review">
                             <div className="review-top">
                                 <div className="review-items">
                                     <div className="user">
                                         <img src="/images/customer.jpg" alt=""/>
                                         <h5>Mary<span className="verified"><i className="fa-solid fa-circle-check"></i></span>
                                         </h5>
                                     </div>
                                     <span className="date">10/08/2025</span>
                                 </div>
                                 <div className="review-stars"><i className="fa-solid fa-star"></i><i
                                         className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                         className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                 <p>Pretty dress with good quality.</p>
                             </div>
                             <div className="review-top">
                                 <div className="review-items">
                                     <div className="user">
                                         <img src="/images/customer.jpg" alt=""/>
                                         <h5>Mary<span className="verified"><i className="fa-solid fa-circle-check"></i></span>
                                         </h5>
                                     </div>
                                     <span className="date">10/08/2025</span>
                                 </div>
                                 <div className="review-stars"><i className="fa-solid fa-star"></i><i
                                         className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                         className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                 <p>Pretty dress with good quality.</p>
                             </div>
                             <div className="review-top">
                                 <div className="review-items">
                                     <div className="user">
                                         <img src="/images/customer.jpg" alt=""/>
                                         <h5>Mary<span className="verified"><i className="fa-solid fa-circle-check"></i></span>
                                         </h5>
                                     </div>
                                     <span className="date">10/08/2025</span>
                                 </div>
                                 <div className="review-stars"><i className="fa-solid fa-star"></i><i
                                         className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                         className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></div>
                                 <p>Pretty dress with good quality.</p>
                             </div>
                         </div>   
                         <div className="review-footer">
                          {!showAll && (
                             <button
                             className="viewAll"
                             onClick={() => setShowAll(true)}
                             >
                             VIEW ALL
                             </button>
                             )}
                             <div className="btn">
                                 <button className="addreview" onClick={()=>setShowForm(true)}>Add Review</button>
                             </div>
                                 {showForm &&(
                                     <div className="add-review-form">
                                         <h5>Add Review</h5>
                                         <hr/>
                                         <div className="head">
                                         <img src="/images/profile.jpeg"/>
                                         <span className="name"><h4>Zara</h4></span>
                                         </div>
                                         <div className="star-rating">
                                             <div className="stars">
                                                 <span 
                                                 className={`star ${rating >= 1 ? "active" : ""}`} 
                                                 onClick={() => setRating(1)}
                                                 >★</span>
                                                  <span 
                                                 className={`star ${rating >= 2 ? "active" : ""}`} 
                                                 onClick={() => setRating(2)}
                                                 >★</span>
                                                  <span 
                                                 className={`star ${rating >= 3 ? "active" : ""}`} 
                                                 onClick={() => setRating(3)}
                                                 >★</span>
                                                  <span 
                                                 className={`star ${rating >= 4 ? "active" : ""}`} 
                                                 onClick={() => setRating(4)}
                                                 >★</span>
                                                  <span 
                                                 className={`star ${rating >= 5 ? "active" : ""}`} 
                                                 onClick={() => setRating(5)}
                                                 >★</span>
                                                
                                             </div>
                                         </div>
                                         <h4 className="review-experience">Review your experience</h4>  
                                         <textarea placeholder="Write your review"></textarea>  
                                         <div className="buttons">
                                             <button className="cancel" onClick={() => setShowForm(false)}>
                                                 Cancel
                                             </button>
                                             <button className="submit" onClick={()=> handlePostReview (true)} >Post review</button>
                                         </div>
                                        </div>
                                 )}
                                 </div>

        </section>
    )
}