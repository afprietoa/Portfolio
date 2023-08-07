import React from 'react'
import Wrapper from '../assets/wrappers/Projects'
import Project1 from '../assets/images/project-1.jpg'
import Project2 from '../assets/images/project-2.jpg'
import Project3 from '../assets/images/project-3.jpg'
import Project4 from '../assets/images/project-4.jpg'
import { Footer, Navbar, Sidebar } from '../components'
const Projects = () => {
  return (
    <Wrapper>
        {/* navbar  */}
        <Navbar />
        {/* end of navbar */}
        {/* sidebar */}
        <Sidebar />
        {/* end of sidebar */}
        {/* header */}
        <header className="projects-hero">
          {/* section title */}
          <div className="section-title">
            <h1>my projects</h1>
            <div className="underline"></div>
          </div>
          {/* end of section title */}
        </header>
    <section className="section">
      <div className="section-center projects-page-center">
      {/* single project */}
      <article className="single-project">
        <div className="project-container">
          <img src={Project1} alt="project-1" />
          <a href="" className="project-icon">
            <i className="fas fa-home"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>project name</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Molestiae asperiores suscipit culpa iste, sint neque. 
             Temporibus eveniet earum itaque nisi.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
      {/* single project */}
      <article className="single-project">
        <div className="project-container">
          <img src={Project1} alt="project-1" />
          <a href="" className="project-icon">
            <i className="fas fa-home"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>project name</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Molestiae asperiores suscipit culpa iste, sint neque. 
             Temporibus eveniet earum itaque nisi.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
      {/* single project */}
      <article className="single-project">
        <div className="project-container">
          <img src={Project1} alt="project-1" />
          <a href="" className="project-icon">
            <i className="fas fa-home"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>project name</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Molestiae asperiores suscipit culpa iste, sint neque. 
             Temporibus eveniet earum itaque nisi.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
      </div>
    </section>
        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default Projects