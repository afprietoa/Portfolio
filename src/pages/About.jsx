import React from 'react'
import Wrapper from '../assets/wrappers/About'
import { Footer, Navbar, Sidebar } from '../components'
const About = () => {
  return (
    <Wrapper>
        {/* navbar  */}
        <Navbar />
        {/* end of navbar */}
        {/* sidebar */}
        <Sidebar />
        {/* end of sidebar */}
        <section className="section single-page">
          {/* section title */}
          <div className="section-title">
            <h1>about me</h1>
            <div className="underline"></div>
          </div>
          {/* end of section title */}
          <div className="section-center page-info">
          {/* about page */}
          <p>
          Hello, I am Andres Prieto and I am a Computer Systems Engineer and Web Developer. 
          I live and work in Bogotá. I spend most of my day, developing with HTML, 
          CSS, JavaScript, Java y Python (and its endless list of frameworks). 
          I enjoy coding and the challenge of learning something new every day. 
            <a href="https://www.linkedin.com/in/afelipeprietoa/"
              > More About Me </a
            >
          </p>
          </div>
        </section>
        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default About