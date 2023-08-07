import React from 'react'
import Wrapper from '../assets/wrappers/Blog'
import { Footer, Navbar, Sidebar } from '../components'
const Blog = () => {
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
        <Footer />
    </Wrapper>
  )
}

export default Blog