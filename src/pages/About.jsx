import React from 'react'
import Wrapper from '../assets/wrappers/About'
import { Footer, Navbar, Sidebar } from '../components'
const abouts = {
  image: "https://www.formpl.us/static/images/features/personalize.svg",
  title: "InnovaTIC",
  info: "Salvia tousled chambray, shoreditch retro cliche dreamcatcher coloring book roof party keffiyeh small batch pork belly actually mlkshk shaman. Stumptown typewriter you probably haven't heard of them pork belly dreamcatcher umami woke, chambray snackwave craft beer. You probably haven't heard of them slow-carb trust fund thundercats bespoke live-edge forage echo park artisan coloring book. Semiotics af tumblr, health goth viral iPhone cold-pressed ugh kogi fanny pack. Photo booth 3 wolf moon narwhal, marfa lumbersexual taiyaki biodiesel cloud bread slow-carb enamel pin stumptown taxidermy food truck 8-bit mustache. Pickled next level vaporware, brooklyn af sriracha hoodie try-hard flannel slow-carb raw denim.",
  stack: [
    "HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NODE.JS", "GATSBY.JS"
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
        <img src={abouts.image} alt="About" className="about-img" />
        <article className="about-text">
          <h1>Innova<span className="hero-title-mod">TIC</span></h1>
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