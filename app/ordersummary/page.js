"use client"

import Banner from "../../components/wishlist/banner";
import Address from "../../components/checkout/address";
import DeliveryOption from "../../components/checkout/deliveryoptions";
import Payment from "../../components/checkout/paymentsection";
import OrderDetails from "../../components/checkout/orderdetails";
import Total from "../../components/checkout/subtotal";

export default function OrderSummary(){
    return(
        <section className="order-summary">
            <Banner title="Checkout"/> 
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4>Information</h4>
                    <Address/>
                    <DeliveryOption/>
                    <Payment/>
                </div>
                <div className="col-md-6">
                    <OrderDetails/>
                    <Total/>
                </div>
            </div>
            </div>
        </section>
    )
}