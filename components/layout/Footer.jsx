"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";

export default function Footer() {
    const pathname =usePathname();

    const hideFooterPages = ["/login","/signup","/error"];
    const hideFooter = hideFooterPages.includes(pathname);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 900,
            easing: "ease-out-cubic",
        });
    },[]);

    if (hideFooter) return null;

    return (
        <>
{/* FOOTER */}

        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-col">
                        <div className="footer-logo">
                            <img className="logo" src="/images/logowhite1.png" alt="logo"/>
                        </div>
                        <p>Whatsapp : +91 9977884455</p>
                        <p>Email : elona@gmail.com</p>
                        <p>Address : Calicut, Kerala, India</p>
                    </div>
                    <div className="footer-col">
                        <h4>Menu</h4>
                        <ul>
                            <li><Link href="#">Explore</Link></li>
                            <li><Link href="#">New Arrivals</Link></li>
                            <li><Link href="#">Categories</Link></li>
                            <li><Link href="#">Top Products</Link></li>
                            <li><Link href="#">Our Collections</Link></li>
                            <li><Link href="#">Men</Link></li>
                            <li><Link href="#">Women</Link></li>
                            <li><Link href="#">Brands</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Customer Service</Link></li>
                            <li><Link href="#">Refund and Return</Link></li>
                            <li><Link href="#">Terms and condition</Link></li>
                            <li><Link href="#">Shipping</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Accounts</h4>
                        <ul>
                            <li><Link href="#">My Account</Link></li>
                            <li><Link href="#">My Orders</Link></li>
                            <li><Link href="#">Vouchers and Discount</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>ALl rights reserved</p>
                <p>Copyright 2025 by Elona</p>
            </div>
        </footer>

         {/* MOBILE FOOTER MENU */}
        <div className="mobile-footer-menu">
        <div onClick={() => console.log("Open Drawer")}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div><i className="fa-regular fa-heart"></i></div>
        <div><i className="fa-regular fa-user"></i></div>
        <div className="cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="badge">1</span>
        </div>
      </div>

     </>
    );

}
