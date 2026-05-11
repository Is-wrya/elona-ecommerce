export default function ProductDetails(){
    return(
        <>
        <div className="product-view">
            <div className="product-right">
                <h5>Satin shirt</h5>
                <div className="product-price">
                    <span className="new-price">$250</span>
                    <span className="old-price">$300</span>
                    <button className="offer">-25%</button>
                </div>
                <p className="note">MRP incl. of all taxes</p>
                <p className="stock">In stock</p>
                <p className="details">Elegant two-piece off-white set featuring a relaxed button-down shirt and high-waisted wide-leg pants in lightweight fabric, offering effortless sophistication, comfort, and versatility for warm-weather, resort, or casual-chic styling.</p>
                <div className="rating d-flex">
                         ★★★★★ <span>4.5/5</span>
                </div>
            </div>
        </div>
        </>
    )
}