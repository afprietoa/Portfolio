import React from 'react'
import BlogItem from './BlogItem.jsx'
import Wrapper from '../assets/wrappers/BlogList'

const BlogList = ({blogs}) => {
    return (
        <Wrapper>
        <div className="blogList-wrap">
            {blogs.map(blog => (
            <BlogItem blog={blog} key={blog.id} /> 
            ))}
        </div>
        </Wrapper>

    )
}
export default BlogList