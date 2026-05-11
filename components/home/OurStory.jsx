
"use client";

import Link from "next/link";
import Ourstory from "../../lib/our-story"
export default function OurStory(){
    return(
        <>
        <div className="shopbycate container">
            <div className="row">
                <div className="col-md-6">
                {Ourstory.map((item)=>(
                      <div className="side-img1">
                        <img 
                        key={item.id}
                        src={item.image}
                        className={item.className} />

                    </div>
                ))}
                    </div>
                <div className="col-md-6 contents-detail">
                    <div className="contents">
                        <div className="main-head">
                            <h4>OUR STORY</h4>
                        </div>
                        <div className="sub-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className="Button-exp">
                            <Link href="/blog">
                            <button className="buttonexp">Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
    
}

