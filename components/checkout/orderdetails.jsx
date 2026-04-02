export default function OrderDetails(){
    return(
       <section className="order-details">
        <div className="product-details">
            <h5>Shopping Bag</h5>
        </div>
                           <div className="recent-carts">
                                <div className="cart-img">
                                    <img src="/images/shirts.jpeg" />
                                </div>
                                <div className="cart-content">
                                    <div className="cart-sec">
                                    <h6>Shirt</h6>
                                    <span>$120</span></div>
                                    <div className="color-sec">
                                        <h6>color:</h6>
                                        <button className="sel-col" style={{background:"brown"}}></button>
                                    </div>
                                    <div className="size-sec">
                                        <h6>size: M</h6>
                                    </div>
                                    <div className="quantity">
                                        <h6>Quantity: 1</h6>
                                        </div> 
                                </div>
                            </div>
                              <div className="recent-carts">
                                <div className="cart-img">
                                    <img src="/images/denimskirt.jpeg" />
                                </div>
                                <div className="cart-content">
                                    <div className="cart-sec">
                                    <h6>Denim skirt</h6>
                                    <span>$120</span></div>
                                    <div className="color-sec">
                                        <h6>color:</h6>
                                        <button className="sel-col" style={{background:"blue"}}></button>
                                    </div>
                                    <div className="size-sec">
                                        <h6>size: S</h6>
                                    </div>
                                    <div className="quantity">
                                        <h6>Quantity: 1</h6>
                                        </div> 
                                </div>
                            </div>
                            </section>
                          
    )
}