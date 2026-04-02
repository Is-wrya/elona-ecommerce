"use client";
import { useState } from "react";

export default function Payment(){

    const [paymentMethod, setPaymentMethod] = useState("");
    return(
        <section className="payment">
         <h5>Payment Options</h5>
         <div className="payment-opt">
            <div className="credit-card">
                <div className="credit-opt">
                <label><input type="radio" name="payment" value="credit" onClick={(e)=>setPaymentMethod(e.target.value)}/>Credit card</label>
                <div className="img-card">
                    <img src="/images/payment.svg"/>
                </div>
                </div>
                {paymentMethod === "credit" &&
                <div className="credit-details">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Card Number" className="input-underline"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Cardholder Name" className="input-underline"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Expiry Date (MM/YY)" maxLength="5" className="input-underline"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="CVV" maxLength="3" className="input-underline"/>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="debit-card">
                <div className="debit-opt">
                <label><input type="radio" name="payment"value="debit" onClick={(e)=>setPaymentMethod(e.target.value)}/>Debit card</label>
                </div>
                {paymentMethod === "debit" &&
                <div className="debit-details">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Card Number" className="input-underline"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Cardholder Name" className="input-underline"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Expiry Date (MM/YY)" maxLength="5" className="input-underline"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="CVV" maxLength="3" className="input-underline"/>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="upi-options">
                <label><input type="radio" name="payment" value="upi" onClick={(e)=>setPaymentMethod(e.target.value)}/>UPI Option</label>
                  </div>
                {paymentMethod === "upi" &&
                <>
                <div className="upi-opt">
                    <div className="img-card">
                    <img src="/images/gglpay.png"/>
                    <img src="/images/paytm.png"/>
                    <img src="/images/phonepe.png"/>
                    <img src="/images/whatsapp.png"/>
                    </div>
                </div>
                <div className="more">
                    <p>or</p>
                    <input type="text" placeholder="enter your upi id"/>
                </div>
                </>}
                <div className="cod">
                    <label><input type="radio" name="payment"value="cod" onClick={(e)=>setPaymentMethod(e.target.value)}/>Cash on Delivery</label>
                </div>
                
          
         </div>
         <div className="sub-button">
            <button className="submit-button">
                Place Order
            </button>
         </div>
        </section>
    )
}