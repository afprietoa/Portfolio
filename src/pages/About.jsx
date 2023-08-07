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
            Hello, I am John Doe and I am a web developer. I live and work in
            somewhere warm. I spend most of my day, experimenting with HTML, CSS
            and JavaScript (and its endless list of frameworks). I enjoy coding
            and the challenge of learning something new everyday. You can also
            find me at youtube channel
            <a href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA"
              >coding addict</a
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