import React from 'react'
import Wrapper from '../assets/wrappers/Projects'
import Project1 from '../assets/images/project-1.png'
import Project2 from '../assets/images/project-2.png'
import Project3 from '../assets/images/project-3.png'
import Project4 from '../assets/images/project-4.png'
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
          <i class="fas fa-bicycle"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>WaBike</h4>
          <p>
          A web application that allows you to generate the shortest route, the app is integrated with EnCicla stations. It also enables referencing high accident zones and making real-time theft reports.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/Corvato22/WaBike-DemoDay">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
      {/* single project */}
      <article className="single-project">
        <div className="project-container">
          <img src={Project2} alt="project-2" />
          <a href="" className="project-icon">
          <i class="fas fa-heartbeat"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>Health App</h4>
          <p>
          The mobile application enables the visualization of specialties, as well as the search for medical personnel by specialty or by the doctor's name. It also provides hospital location services and user data visualization.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/amn-_Salup-app">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
      {/* single project */}
      <article className="single-project">
        <div className="project-container">
          <img src={Project3} alt="project-3" />
          <a href="" className="project-icon">
          <i class="fas fa-medkit"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>Hospital at Home</h4>
          <p>
          The mobile application allows the visualization of specialties, as well as searching for medical staff by specialty or doctor's name. It also includes hospital location services and user data display.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/fe_hospitalEnCasa">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
      {/* single project */}
      <article className="single-project">
        <div className="project-container">
          <img src={Project4} alt="project-4" />
          <a href="" className="project-icon">
          <i class="fas fa-book-open"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>Reading Essence</h4>
          <p>
          The system allows for generating searches, checkouts, and returns of bibliographic materials. It also provides book recommendations based on the reader's preferences.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/fe_library-system">source code</a>
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