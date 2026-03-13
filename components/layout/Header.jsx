"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();

    const [searchOpen, setSearchOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const products =[
      "pants",
      "Shirt",
      "Tshirt",
      "Jeans",
      "Shorts",
      "Jacket",
      "Kurtha"
    ];

    function handleSearch(e) {
      const value = e.target.value;
      setSearchText(value);

      if (value===""){
        setSuggestions([]);
        return;
      }
      const filtered = products.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase()));
      setSuggestions(filtered);
    }
    
    const hideNav =
    pathname==="/success" ||
    pathname==="/error" ||
    pathname==="/failure" ||
    pathname==="/login" ||
    pathname==="/signup";

const isHome = pathname === "/";

return (
    <>
    {/* MOBILE SEARCH  */}
    <div className="mobile-search-header">
      {isHome && (
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"> </i>
        </div>
      )}
    </div>


    {/* TOP HEADER */}
    <header className="top-header">
        <div className="container header-flex">
            <div className="nav-left">
                <Link href="/">MEN</Link>
                <Link href="/">WOMEN</Link>
            </div>

            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>

            <div className="nav-right">
                 <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchOpen(true)}></i>
                <span className="lang">
                    EN <i className="fa-solid fa-chevron-down"></i>
                </span>

                <Link href="/"><i className="fa-regular fa-heart"></i></Link>
                <Link href="/"><i className="fa-regular fa-user"></i></Link>
                
                <div className="cart">
                    <Link href="/"><i className="fa-solid fa-cart-shopping"></i></Link>
                    <span className="badge">1</span>
                </div>
            </div>
        </div>
    </header>
{/* BOTTOM NAVBAR */}
{!hideNav && (
    <nav className="bottom-nav">
        <div className="container">
            <ul className="nav-menu">
                <li><Link href="/" className={pathname === "/" ? "active" : ""}>HOME</Link></li>
                <li><Link href="#" >SHOP</Link></li>
                <li><Link href="#" >COLLECTION</Link></li>
                <li><Link href="#" >NEW ARRIVALS</Link></li>
                <li><Link href="#" >TOP SELLING</Link></li>
            </ul>
        </div>
    </nav>
)}


      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="mobile-drawer" id="mobileDrawer">

          <div className="drawer-header">
            <span onClick={() => setDrawerOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>

          <ul>

            <li>
              <Link href="/product">MEN</Link>
            </li>

            <li>
              <Link href="/product">WOMEN</Link>
            </li>

            <li>
              <Link href="/">HOME</Link>
            </li>

            <li>
              <Link href="/product">SHOP</Link>
            </li>

            <li>
              <Link href="/collections">COLLECTION</Link>
            </li>

            <li>
              <Link href="/product">NEW ARRIVALS</Link>
            </li>

            <li>
              <Link href="/product">TOP SELLING</Link>
            </li>

          </ul>

        </div>



            )}

    </>
)
}