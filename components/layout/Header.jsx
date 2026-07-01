"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const hideNav =
    pathname==="/success" ||
    pathname==="/error" ||
    pathname==="/failure" ||
    pathname==="/login" ||
    pathname==="/addtocart"||
    pathname==="/ordersummary"||
    pathname==="/profile"||
    pathname==="/return"||
    pathname==="/blog"||
    pathname.startsWith("/productview/")||
    pathname==="/signup";

const isHome = pathname === "/";

return (
    <>
    {/* MOBILE SEARCH  */}
    {pathname=="/" &&(
    <div className="mobile-search-header">
      {isHome && (
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"> </i>
          <input className="text-field"
        type="text"
        placeholder="Search here..."
      />

        </div>
      )}
    </div>
    )}


    {/* TOP HEADER */}
    <header className="top-header">
        <div className="container header-flex">
            <div className="nav-left">
                <Link href="/categories?gender=men">MEN</Link>
                <Link href="/categories?gender=women">WOMEN</Link>
            </div>

            <div className="logo">
                <Link href="/"><img src="/images/logo.png" alt="logo" /></Link>
            </div>

            <div className="nav-right">
                 <div>
                 <i 
                  className="fa-solid fa-magnifying-glass" 
                  onClick={() => 
                    setSearchOpen(!searchOpen)
                  }
                  style={{ cursor: "pointer" }}
                ></i>
                 {searchOpen && (
                  <div className="search-bar">
                    <div className="search-container">
                      <i className="fa-solid fa-magnifying-glass search-icon"></i>
                      <input type="text" placeholder="Search"/>
                      <i 
                        className="fa-solid fa-xmark close-search close" 
                        onClick={() => setSearchOpen(false)}
                      ></i>
                    </div>
                  </div>
                 )}
                 </div>
                <span className="lang">
                    EN <i className="fa-solid fa-chevron-down"></i>
                </span>

                <Link href="/wishlist"><i className="fa-regular fa-heart"></i></Link>
                <Link href="/profile"><i className="fa-regular fa-user"></i></Link>
                
                <div className="cart">
                    <Link href="/addtocart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    <span className="badge">1</span>
                </div>
            </div>
        </div>
    </header>
{/* BOTTOM NAVBAR */}
{!hideNav && !searchOpen && (
    <nav className="bottom-nav">
        <div className="container">
            <ul className="nav-menu">
                <li><Link href="/" className={pathname === "/" ? "active" : ""}>HOME</Link></li>
                <li><Link href="/products" >SHOP</Link></li>
                <li><Link href="/categories" >COLLECTION</Link></li>
                <li><Link href="/products" >NEW ARRIVALS</Link></li>
                <li><Link href="/products" >TOP SELLING</Link></li>
            </ul>
        </div>
    </nav>
)}


      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="mobile-drawer">

          <div className="drawer-header">
            <span onClick={() => setDrawerOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>

          <ul>

            <li>
              <Link href="/products">MEN</Link>
            </li>

            <li>
              <Link href="/products">WOMEN</Link>
            </li>

            <li>
              <Link href="/">HOME</Link>
            </li>

            <li>
              <Link href="/products">SHOP</Link>
            </li>

            <li>
              <Link href="/collections">COLLECTION</Link>
            </li>

            <li>
              <Link href="/products">NEW ARRIVALS</Link>
            </li>

            <li>
              <Link href="/products">TOP SELLING</Link>
            </li>

          </ul>

        </div>



            )}

    </>
)
}