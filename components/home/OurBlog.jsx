import Link from "next/link";


export default function OurBlog(){
    return(
      <section className="our-blog">
        <div className="row container">
            <div className="col-md-3">
                <div className="blogs">
                <div className="blog1">
                    <img src="/images/blogbanner1.jpeg"/>
                </div>
                <div className="blog-content">
                    <h5>HOW STREET STYLE IS REDEFINING MODERN FASHION</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <Link href="/blog">Read more...</Link>
                </div>

            </div>
            <div className="col-md-3">
                <div className="blogs">
                <div className="blog1">
                    <img src="/images/blog10.jpeg"/>
                </div>
                <div className="blog-content">
                    <h5>HOW STREET STYLE IS REDEFINING MODERN FASHION</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <Link href="/blog">Read more...</Link>
                </div>

            </div>
            <div className="col-md-3">
                <div className="blogs">
                <div className="blog1">
                    <img src="/images/blog2.jpeg"/>
                </div>
                <div className="blog-content">
                    <h5>HOW STREET STYLE IS REDEFINING MODERN FASHION</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <Link href="/blog">Read more...</Link>
                </div>

            </div>
            <div className="col-md-3">
                <div className="blogs">
                <div className="blog1">
                    <img src="/images/blog3.jpeg"/>
                </div>
                <div className="blog-content">
                    <h5>HOW STREET STYLE IS REDEFINING MODERN FASHION</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <Link href="/blog">Read more...</Link>
                </div>

            </div>
        </div>
      </section>
    )
}