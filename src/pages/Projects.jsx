import React from 'react'
import Wrapper from '../assets/wrappers/Projects'
import Project1 from '../assets/images/project-1.png'
import Project2 from '../assets/images/project-2.png'
import Project3 from '../assets/images/project-3.png'
import Project4 from '../assets/images/project-4.png'
import Project5 from '../assets/images/project-5.png'
import Project6 from '../assets/images/project-6.png'
import Project7 from '../assets/images/project-7.png'
import Project8 from '../assets/images/project-8.png'
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
            {/* single project */}
            <article className="single-project">
        <div className="project-container">
          <img src={Project5} alt="project-5" />
          <a href="" className="project-icon">
          <i class="fas fa-comments"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>ChatVerse App</h4>
          <p>
          A modern communication platform designed to streamline your interactions. Connect with friends, manage chats, and personalize your experience in an intuitive and user-friendly environment.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/amn-ChatVerse_app_MVP">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
            {/* single project */}
            <article className="single-project">
        <div className="project-container">
          <img src={Project6} alt="project-6" />
          <a href="" className="project-icon">
          <i class="fas fa-calendar-day"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>Classroom Scheduler</h4>
          <p>
          A scheduling tool that displays weekly activities for physical spaces or mobile classrooms, with options to view available rooms, filter results, generate usage reports, and manage activities based on user permissions.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
            {/* single project */}
            <article className="single-project">
        <div className="project-container">
          <img src={Project7} alt="project-7" />
          <a href="" className="project-icon">
          <i class="fas fa-store"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>PanPan App</h4>
          <p>
          A management tool for tracking product prices and stock, creating new products, and handling customer orders. It also allows customers to browse products and manage their purchases.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/amn-Panpan_app_MVVM">source code</a>
          </div>
        </div>
      </article>
      {/* end of single project */}
            {/* single project */}
            <article className="single-project">
        <div className="project-container">
          <img src={Project8} alt="project-8" />
          <a href="" className="project-icon">
          <i class="fas fa-graduation-cap"></i>
          </a>
        </div>
        <div className="project-details">
          <h4>Free Courses</h4>
          <p>
          An interactive platform for managing free courses offered by the Faculty of Economic Sciences, allowing users to register, create, and manage courses, and access historical data on courses, grades, and instructors.
          </p>
          <div className="project-footer">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/afprietoa/">source code</a>
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