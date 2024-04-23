import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { blogList } from '../data/data';
import Wrapper from '../assets/wrappers/Blog'
import { Footer, Navbar, Sidebar, EmptyList, BlogList, SearchBar} from '../components'


const Blog = () => {
  const [blogs, setBlogs] = useState(blogList)
  const [searchKey, setSearchKey] = useState('')

  //Search Submit
  const handleSearchBar = (e) => {
      e.preventDefault();
      handleSearchResults()
  }
  //Search for blogs by category
  const handleSearchResults = () => {
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog) =>
          blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      console.log(filteredBlogs);
      setBlogs(filteredBlogs);
  }
  const handleClearSearch = () => {
      setBlogs(blogList)
      setSearchKey('')
  }
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
            <h1>My Blogs</h1>
            <div className="underline"></div>
          </div>
          {/* end of section title */}
        </header>
        <div className="section-center blog-center">
                      {/* Search Bar */}
                      <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {/* Blog List & Empty List */}
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
        <Footer />
    </Wrapper>
  )
}

export default Blog