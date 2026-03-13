"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <section className="login-sec padding-main">
            <div className="container">
                <div className="login-box">
                    <div className="image-section">
                        <img src="/images/login.png" alt="login" />
                    
                    <h1>elona</h1>
                </div>
                <div className="user-details">
                    <h4>Account Login</h4>

            <div className="login-ggl-fb">

              <button className="google">
                <i className="fa-brands fa-google"></i>
                Continue with Google
              </button>

              <button className="facebook">
                <i className="fa-brands fa-facebook"></i>
                Continue with Facebook
              </button>

            </div>

            <div className="divider">
              <span>or</span>
            </div>

            <div className="data">
                    <input type="email" placeholder="Email"/>
                    <div className="password-field">
                        <input type={showPassword ? "text" : "password"}
                        placeholder="Password"/>
                        <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}></i>
                  
                    </div>
                    <button className="login-btn">Login</button>
                    <p className="sign-up">
                        Don't have an account?<Link href="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
            </div>
            </div>
        </section>
    );

} 