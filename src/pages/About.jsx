import React from 'react'
import Wrapper from '../assets/wrappers/About'
import { Footer, Navbar, Sidebar } from '../components'
import InnovaLogo from '../assets/images/InnovaLogo2.png'
const abouts = {
  image: "https://www.formpl.us/static/images/features/personalize.svg",
  title: "InnovaTECH",
  info: "Discover the difference with InnovaTIC Business Solutions. As a freelance consultant, I bring more than just technological expertise; I combine the synergy of brilliant minds with extensive experience in the tech industry. At InnovaTIC, I merge the knowledge and vision of professionals who have made significant impacts in the tech industry to offer you tailored business solutions. From web design to mobile applications and data visualization, I am here to drive your business towards success. Partner with me and let your business shine with innovation and excellence.",
  stack: [
    "REACT.JS", "ANGULAR", "VUE.JS", "SPRING", "ASP.NET", "DJANGO"
  ]
};
const About = () => {
  return (
    <Wrapper>
        {/* navbar  */}
        <Navbar />
        {/* end of navbar */}
        {/* sidebar */}
        <Sidebar />
        {/* end of sidebar */}
        <header className="about-hero">
          {/* section title */}
          <div className="about-title">
            <h1>About me</h1>
            <div className="underline"></div>
          </div>
          {/* end of section title */}
        </header>
          {/* end of section title */}
          <div className="section-center about-center about-page">
        <img src={InnovaLogo} alt="About" className="about-img" />
        <article className="about-text">
        <h3><span className="hero-title-mod">Self</span> Summary</h3>
          <h2>What is INNOVA <span className="hero-title-mod">TECH</span>?</h2>
          <div className="underline"></div>
          <p>{abouts.info}</p>
          <div className="about-stack">
            {abouts.stack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </article>
      </div>


        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default About