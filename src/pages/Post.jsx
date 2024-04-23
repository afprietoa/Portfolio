import React, { useEffect, useState } from 'react'
import { blogList } from '../data/data';
import { Footer, Navbar, Sidebar, EmptyList,Chip   } from '../components'
import Wrapper from '../assets/wrappers/Post'
import { Link, useParams } from 'react-router-dom';

const Post = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        let blog = blogList.find(blog => blog.id == parseInt(id))
        if(blog){
            setBlog(blog)
        }
    }, [])
    return (
        <Wrapper>
                            {/* navbar  */}
                            <Navbar />
                {/* end of navbar */}
                {/* sidebar */}
                <Sidebar />
                {/* end of sidebar */}
                {/* header */}
                {/* footer */}
                <header className="blog-hero">
                  {/* section title */}
                  <div className="section-title">
                    <h1>Blog</h1>
                    <div className="underline"></div>
                  </div>
                  {/* end of section title */}
                </header>
        <div className="container">
            <Link className="btn blog-goBack" to='/blog'>
                <span><i class="fas fa-angle-double-left"></i></span> Go Back
            </Link>
            {
                blog ? (
                <div className="blog-wrap">
                    <header class="header-post">
                        <p className="blog-date"> Published by {blog.createdAt}</p>
                        <h1 className='blog-title'>{blog.title}</h1>
                        <div className="blog-subCategory">
                            {
                            blog.subCategory.map((category, index)=>(
                            <div>
                                <Chip key={index} label={category}/>
                            </div>))
                            }
                        </div>
                    </header>

                    <img src={blog.cover} alt="cover"/>
                    <div className="blog-desc" dangerouslySetInnerHTML={{ __html: blog.description }}></div>

                </div>) : 
                (<EmptyList />)
            }
        </div>

     {/* contact */}

    <section class="section contact" id="contact">
      <div class="section-center contact-center">
        {/* contact title */}
        <article class="contact-title">
          <h3>want latest blog info and updates?</h3>
          <p>Sign up for newsletter and stay up to date</p>
        </article>
        {/* contact form */}
        <form class="contact-form">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="your email"
          />
          <button type="submit" class="btn-submit">submit</button>
        </form>
      </div>
    </section>
     {/* end of contact */}

        <Footer />
        </Wrapper>

    )
}

export default Post
