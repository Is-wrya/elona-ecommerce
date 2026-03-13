"use client";

import Hero from "@/components/home/Hero";
import PromoRibbon from "@/components/home/Promo";
import SummerCollections from "@/components/home/Summercollection";
import Newarrivals from "@/components/home/NewArrivals";
import SuccessPage from "@/components/home/ShopbyCategories";
import TopProducts from "@/components/home/TopProducts";
import BottomPromo from "@/components/home/BottomPromo";
import Brands from "@/components/home/BrandsOffer";
import BottomBanner from "@/components/home/BottomBanner";
export default function HomePage() {
    return(
        <main>
        <Hero/>
        <PromoRibbon/>
        <SummerCollections/>
        <Newarrivals/>
        <SuccessPage/>
        <TopProducts/>
        <BottomPromo/>
        <Brands/>
        <BottomPromo/>
        <BottomBanner/>
        </main>
    );
}