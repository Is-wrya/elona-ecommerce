"use client";

import Hero from "@/components/home/Hero";
import PromoRibbon from "@/components/home/Promo";
import SummerCollections from "@/components/home/Summercollection";
import Newarrivals from "@/components/home/NewArrivals";
import OurStory from "@/components/home/OurStory";
import TopProducts from "@/components/home/TopProducts";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import BottomPromo from "@/components/home/BottomPromo";
import Brands from "@/components/home/BrandsOffer";
import BottomBanner from "@/components/home/BottomBanner";
import OurBlog from "@/components/home/OurBlog.jsx"

export default function HomePage() {
    return(
        <main>
        <Hero/>
        <PromoRibbon/>
        <SummerCollections/>
        <Newarrivals/>
        <OurStory/>
        <TopProducts/>
        <FeaturedProduct/>
        <OurBlog/>
        <BottomPromo/>
        <Brands/>
        <BottomPromo/>
        <BottomBanner/>
        </main>
    );
}