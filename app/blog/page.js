import Link from "next/link"

export default function Blog(){
    return(
        <>
        <section className="blog-banner">
            <div className="img-card">
                <div className="img-sec">
                    <img src="/images/blogbanner1.jpeg"/></div>
                    <div className="bannercontent">
                    <h1 className="title">HOW STREET STYLE IS REDEFINING MODERN FASHION</h1>
                    <p>Written by : Tom Cruise</p>
                    </div>
                
            </div>
        </section>
        <section className="contentblog">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="left-side">
                        <div className="date">
                            <h4>date</h4>
                            <p>April 01 2026</p>
                        </div>
                        <div className="share">
                            <h4>share</h4>
                            <div className="social">
                            <Link href=""><button className="whatsapp"><i className="fa-brands fa-whatsapp"></i></button></Link>
                            <Link href=""><button className="facebook"><i className="fa-brands fa-facebook-f"></i></button></Link>
                            <Link href=""><button className="instagram"><i className="fa-brands fa-instagram"></i></button></Link>
                            <Link href=""><button className="threads"><i className="fa-brands fa-threads"></i></button></Link>
                        </div>
                        </div>
                        <div className="tags">
                            <h4>tags</h4>
                            <p>#Accessories
                                #Layering
                                #Style#Layering
                                #Vintage
                                #Denim</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-10">
                        <div className="container contents">
                        <div className="content1">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                         <div className="content2">
                            <p>
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="imgcard">
                            <div className="imgsec">
                            <img src="/images/blog2.jpeg"/>
                            </div>
                        </div>
                         <div className="quote">
                                <h3>
                                    <i className="fa-solid fa-quote-left"></i><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            </div>
                        <div className="content3">
                            <p>
                                
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                            <div className="blog-img-card">
                            <img src="/images/blog4.jpeg"/>
                            </div>
                         </div>
                         <div className="col-md-6">
                            <div className="blog-img-card">
                            <img src="/images/blog5.jpeg"/></div> 
                        </div>  
                        </div>

                        <div className="content4">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <hr/>
                        <div className="prev-post">
                            <div className="post1">
                                <Link href="">
                                <div className="img-card">
                                    <img src="/images/blog3.jpeg"/>  
                                </div>
                                <span className="prev-cont">
                                        <h4>Previous post</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </span>
                                </Link>
                            </div>
                              <div className="post2">
                                <Link href="">
                                <div className="img-card">
                                    <img src="/images/blog3.jpeg"/>  
                                </div>
                                <span className="prev-cont">
                                        <h4>Previous post</h4>
                                        <p>Lorem Ipsum is simply dummy text</p>
                                    </span>
                                </Link>
                            </div>

                        </div>
                        <hr/>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section className="related-section">
            <div className="container">
                <div className="header-sec">
                    <h3> Related Articles</h3>
                </div>
            <div className="row">
                <div className="col-md-4">
                    <Link href="">
                    <div className="img-card-doc">
                        <img src="/images/blog9.jpeg"/>
                    </div>
                    <div className="detail-blog">
                       <h4>New Releases of Nike </h4>
                       <p>March 25 2026</p> 
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link href="">
                    <div className="img-card-doc">
                        <img src="/images/blog10.jpeg"/>
                    </div>
                    <div className="detail-blog">
                       <h4>New Releases of Nike </h4>
                       <p>March 25 2026</p> 
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link href="">
                    <div className="img-card-doc">
                        <img src="/images/blog11.jpeg"/>
                    </div>
                    <div className="detail-blog">
                       <h4>New Releases of Nike </h4>
                       <p>March 25 2026</p> 
                    </div>
                    </Link>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}