export default function Total(){
    return(
        <section className="total">
            <div className="offer">
                <input type="text" placeholder="Apply code"/>
                <button className="apply">Apply</button>
            </div>
            <div className="shipping">
                <h5>Shipping</h5>
                <span>free</span>
            </div>
            <hr/>
            <div className="discount">
                <h5>Discount</h5>
                <span>$0</span>
            </div>
            <hr/>
            <div className="subtotal">
                <h5>Total</h5>
                <span><h5>$240</h5></span>
            </div>


        </section>
    )
}
