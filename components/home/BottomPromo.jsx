import BottomPromoSection from "../../lib/bottom-promo";

export default function BottomPromo(){
    const repeated=[...BottomPromoSection,...BottomPromoSection,...BottomPromoSection,...BottomPromoSection,...BottomPromoSection,...BottomPromoSection ]
    return( 
    
    <div className="bottom-promo-ribbon">
        <div className="ring">
            {repeated.map((item)=>(
                <span>{item.name}</span>
            ))}
            {/* <span>UPTO 20% OFF</span>
            <span>FAST DELIVERY AVAILABLE</span>
            <span>FREE SHIPPING OVER 999</span>
            <span>UPTO 20% OFF</span>
            <span>FAST DELIVERY AVAILABLE</span>
            <span>FREE SHIPPING OVER 999</span>
            <span>UPTO 20% OFF</span>
            <span>FAST DELIVERY AVAILABLE</span>
            <span>FREE SHIPPING OVER 999</span>
            <span>UPTO 20% OFF</span>
            <span>FAST DELIVERY AVAILABLE</span>
            <span>FREE SHIPPING OVER 999</span>
            <span>UPTO 20% OFF</span> */}
        </div>
    </div>

    );}