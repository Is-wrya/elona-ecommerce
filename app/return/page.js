"use client";

import Link from "next/link";
import { useState } from "react";

export default function Return(){
    const [step, setStep] = useState(1);
    const [condition, setCondition] = useState("");
    const [reason,setReason] = useState("");
    const [payment,setPayment] = useState("refund");
    const [showPopup,setShowPopup] = useState(false);
    


    return(
        <section className="return">
            <div className="container">
                <div className="product-return">
                    <h2 className="heading">Return my product</h2>
                    <div className="steps">
                        <div className={`step ${step>=1 ? "active" : " "}`}>
                            <div className="circle">
                                <i className="fa-solid fa-box-open"></i>
                            </div>
                            <p>Your Orders</p>
                        </div>
                        <div className="line"></div>
                        <div className={`step ${step>=2 ? "active" : ""}`}>
                            <div className="circle">
                                <i className="fa-solid fa-arrow-rotate-left"></i>
                            </div>
                            <p>Reason for Return</p>
                        </div>
                        <div className="line"></div>
                        <div className={`step ${step>=3 ? "active" : ""}`}>
                            <div className="circle">
                                <i className="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                            <p>payment Reimbursement</p>
                        </div>
                        <div className="line"></div>
                        <div className={`step ${step>=4 ? "active" : ""}`}>
                            <div className="circle">
                                <i className="fa-regular fa-clipboard"></i>
                            </div>
                            <p>Review and Submit</p>
                        </div>  
                    
                    </div>
                    {step===1 && (
                        <>
                        <div className="form-step">
                            <div className="content">
                                <h4>Select the reason for your return</h4>
                                <p>To help us process request quickly, please answer the following questions</p>
                            </div>
                            <div className="order-container">
                                <div className="order-header">
                                    <div className="col-product">Product</div>
                                    <div className="col-order-no">Order number</div>
                                    <div className="col-order-date">Order Date</div>
                                </div>
                                <div className="order-content">
                                    <div className="col-product product-content">
                                        <img src="/images/sample1.jpeg" alt=""/>
                                        <span>White Elegant dress</span>
                                    </div>
                                    <div className="col-order-no">
                                        White
                                    </div>
                                    <div className="col-order-date">
                                        15/01/2025
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left-section">
                                        <h5 className="heading">
                                            What is the product's current condition?
                                        </h5>
                                        <div className="option">
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                           I would like to return a sealed product.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                            I want to return an item ordered by mistake.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                            The product is defective or damaged.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                            I wish to return an unsealed but functional product.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                           Received the wrong product.
                                            </label>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="right-section">
                                        <h5 className="heading">
                                            What is the product's current condition?
                                        </h5>
                                        <div className="option">
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                           I would like to return a sealed product.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                            I want to return an item ordered by mistake.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                            The product is defective or damaged.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                            I wish to return an unsealed but functional product.
                                            </label>
                                            <br/>
                                            <label>
                                            <input
                                            type="radio"
                                            name="condition"
                                            value="sealed"
                                            onChange={(e)=>setCondition(e.target.value)}
                                            />
                                           Received the wrong product.
                                            </label>
                                            <br/>
                                        </div>
                                    </div>
                                  
                                </div>
                                  <div className="submit-btn">
                                        <button onClick={()=>setStep(2)} className="next">Next</button>
                                    </div>
                            </div>
                        </div>
                        </>
                    )}

                    {step === 2 &&(
                        <div className="form-step">
                            <div className="content">
                                <h4 className="reason-heading">Choose the method for receiving payment</h4>
                            </div>
                            <div className="options">
                                <label className="return-card">
                                    <input
                                    type="radio"
                                    name="payment"
                                    value="refund"
                                    checked={payment==="refund"}
                                    onChange={(e)=>setPayment(e.target.value)}
                                    />
                                    <div className="card-content">
                                        <div className="radio-circle"></div>
                                         <div>
                                            <h4>I want a refund</h4>
                                            <p>We will process your refund, Which may take up to 7 business days.</p>
                                        </div>
                                    </div>
                                </label>
                                <label className="return-card">
                                     <input
                                    type="radio"
                                    name="payment"
                                    value="refund"
                                    checked={payment==="refund"}
                                    onChange={(e)=>setPayment(e.target.value)}
                                    />
                                    <div className="card-content">
                                        <div className="radio-circle"></div>
                                        <div> 
                                            <h4>I would like a replacement product </h4>
                                            <p>We will replace your product with a new one.</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="submit-btn">
                                
                                <button className="previous" onClick={() => setStep(step - 1)}>Back</button>
                                <button className="next" onClick={() => setStep(step + 1)}>Next</button>
                            </div>
                        </div>
                    )}


                    {step===3 && (
                        <>
                        <div className="form-step">
                            <h4>Review your return request</h4>
                        </div>
                        <div className="order-container">
                            <div className="order-header">
                                <div className="col-product">Product</div>
                                <div className="col-order-no">Order number</div>
                                <div className="col-order-date">Order Date</div>
                            </div>
                            <div className="order-content">
                                <div className="col-product product-content">
                                    <img src="/images/sample1.jpeg" alt=""/>
                                    <span>White Elegant dress</span>
                                </div>
                                <div className="col-order-no">
                                    White
                                </div>
                                <div className="col-order-date">
                                    15/01/2025
                                </div>
                            </div>
                        </div>
                        <div className="contents">
                            <p>Current state of the product : <span>I would like to return a sealed product.</span></p>
                            <p>Main reason for returning the product : <span>The product Quality is unsatisfactory.</span></p>
                            <p>Method of receiving the product : <span>I want a refund.</span></p>
                        </div>
                        <div className="submit">
                            <button className="previous" onClick={()=>setStep(2)}>Back</button>
                            <button className="next" onClick={()=>setShowPopup(true)}>Submit</button>
                        </div>
                        </>
                    )}
    {showPopup && (
        <div className="popup">
            <div className="popup-content">
                <h3>Return Request Submitted</h3>
                <p>You have successfully submitted the refund request</p>
                <button className="popup-btn" onClick={()=>setShowPopup(false)}>OK</button>
            </div>
        </div>
    )}

                    
                    </div>
                </div>
        </section>
    )
}
