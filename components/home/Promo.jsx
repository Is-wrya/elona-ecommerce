import PromoSection from "../../lib/promo";

export default function PromoRibbon(){
    const repeated=[...PromoSection,...PromoSection,...PromoSection];
    return(
        <div className="promo-ribbon">
            <div className="ring">
                {repeated.map((item, index)=> (
                   
                     <span key={index}>
                        {item.name}
                          <i className="fa-regular fa-star" ></i>
                        </span>
                ))}
                </div>
            </div>
     
    );
}