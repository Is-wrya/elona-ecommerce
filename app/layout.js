"use client";

import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CartProvider } from "../context/CartContent";
import { WishlistProvider } from "../context/WishlistContext";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return(
        <html lang="en">
        
            <body className={!isHome ? "dark-menu" : ""}>
                <WishlistProvider>
                <CartProvider>
                <Header/>
                {children}
                <Footer/>
                </CartProvider>
                </WishlistProvider>
            </body>
        </html>
    );
}