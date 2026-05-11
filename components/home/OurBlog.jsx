import Link from "next/link";
import BlogSection from "../../lib/blog";


export default function OurBlog(){
    return(
      <section className="our-blog">       
        <div className="row container">
             {BlogSection.slice(0,4).map((item)=>(
            <div className="col-md-3">
                         <div className="blogs">
                        <div className="blog1">
                            <img src={item.image}/>
                        </div>
                         <div className="blog-content">
                            <h5>{item.name}</h5>
                            <p>{item.sub}</p>
                            </div>
                            <Link href={item.link}>Read more...</Link>
                               </div>
            </div>
                  ))}
        </div>     
      </section>
    )
}