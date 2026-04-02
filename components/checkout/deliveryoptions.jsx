"use client";


export default function DeliveryOption(){
    return(
        <section className="delivery-method">
            <h5>Delivery Option</h5>
            <div className="del-op">
            <div className="delivery-option">
                <label>
                <input type="radio" name="Delivery"
                />Standard Delivery
                </label>
                <span>free</span>
            </div>
            <p>Delivery within 7-9 days</p>
            </div>
            <div className="del-op">
            <div className="delivery-option">
                <label>
                <input type="radio" name="Delivery" 
                />Express Delivery
                </label>
                <span>$ 5</span>
            </div>
            <p>Delivery within 2-3 days</p>
            </div>
        </section>
    )
}