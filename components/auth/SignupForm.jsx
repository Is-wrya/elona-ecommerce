"use client";


import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
        <>
        <section className="signup-sec padding-main">
            <div className="container">
                <div className="login-box">
                    <div className="image-section">
                        <img src="/images/login.png" alt=""/>
                        <h1>elona</h1>
                    </div>
                    <div className="user-details">
                        <h4>Create an account</h4>
                        <p className="sign-up">Already have an account? <Link href="/login">Login for free</Link></p>
                        <div className="data">
                            <div className="name">
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                            </div>
                            <input type="email" placeholder="Email"/>
                             <div className="password-field">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Password"
                                />
                                <i
                                    className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                                    onClick={() => setShowPassword(!showPassword)}
                                ></i>
                                </div>

                                <div className="password-field">
                                <input
                                    type={showConfirmPassword  ? "text" : "password"}
                                    placeholder="Re-Password"
                                />
                                <i
                                    className={`fa-solid ${showConfirmPassword  ? "fa-eye-slash" : "fa-eye"}`}
                                    onClick={() => showConfirmPassword (!showConfirmPassword )}
                                ></i>
                                </div>
                         <div className="remember-me">
                            <label>
                            <input type="checkbox" />
                            Agree the <Link href="#">terms and conditions</Link>
                            </label>
                        </div>  
                        <button className="signup-btn">
                            create account
                            </button> 
                            <div className="divider">
                                <span>or</span>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}