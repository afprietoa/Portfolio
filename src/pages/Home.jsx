import React from 'react'
import { Footer, Navbar, Sidebar } from '../components'
import Hero from '../assets/images/heroImg.png'
import Avatar from '../assets/images/hero-img-small.jpg'
import About from '../assets/images/aboutImg.png'
import Project1 from '../assets/images/project-1.png'
import Project2 from '../assets/images/project-2.png'
import Project3 from '../assets/images/project-3.png'
import Project4 from '../assets/images/project-4.png'
import Blog1 from '../assets/images/blog-1.jpg'
import Blog2 from '../assets/images/blog-2.jpg'
import Blog3 from '../assets/images/blog-3.jpg'
import Blog4 from '../assets/images/blog-4.jpg'
import Connect  from '../assets/videos/space.mp4'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Home'
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
        {/* navbar  */}
        <Navbar />
        {/* end of navbar */}
        {/* sidebar */}
        <Sidebar />
        {/* end of sidebar */}
        {/* header */}
        <div className='hero'>
          <div className="section-center hero-center">
            <article className="hero-info">
              <div className="underline"></div>
              <h1>i'm Andres P.</h1>
              <h4>freelance web & mobile UI/UX Designer</h4>
              <a href="" className="btn hero-btn" onClick={() => {navigate("/contact")}}>
                Hire me
              </a>
              {/* social icons */}
            <ul className='social-icons hero-icon'>
                <li>
                    <a href="https://www.twitter.com" className='social-icon'>
                        <i className='fab fa-facebook'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className='social-icon'>
                        <i className='fab fa-linkedin'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className='social-icon'>
                        <i className='fab fa-squarespace'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className='social-icon'>
                        <i className='fab fa-behance'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className='social-icon'>
                        <i className='fab fa-instagram'></i>        
                    </a>
                </li>
            </ul>
            </article>
            <article className="hero-img">
              <img src={Hero} alt="hero" className='hero-photo'/>
            </article>
          </div>
        </div>
        {/* end of header */}
        {/* about */}
        <section className='section about'>
          <div className="section-center about-center">
            {/* about img */}
            <article className="about-img">
              <img src={About} alt="about" className="hero-photo" />
            </article>

              {/* about info */}
              <article className="about-info">
                {/* section title */}
                <div className="section-title about-title">
                  <h2>about</h2>
                  <div className="underline"></div>
                </div>
                {/* end of section title */}
                <p>Web developer with experience in creating interactive and modern
                   user interfaces. Capable of building REST APIs using relational or
                    non-relational databases and conducting unit testing.
                </p>
                <p>Also possesses social skills such as proactivity, assertive communication,
                     and teamwork.
                </p>
                <a href="" className="btn" onClick={() => {navigate("/about")}}>
                  about me
                </a>
              </article>

          </div>
        </section>
        {/* end of about */}
        {/* services */}
        <section className="section bg-grey">
                {/* section title */}
                <div className="section-title">
                  <h2>Services</h2>
                  <div className="underline"></div>
                </div>
                {/* end of section title */}
                <div className="services-center section-center">
                   {/* services */}
                  <article className="service">
                    <i className='fas fa-code service-icon'></i>
                    <h4>web development</h4>
                    <div className="underline"></div>
                    <p>
                    Development of websites from the ground up that mirror the objectives and needs, ensuring they are responsive and compatible across mobile devices. 
                    </p>
                  </article>
                  {/* end of services */}
                                     {/* services */}
                                     <article className="service">
                    <i className='fab fa-sketch service-icon'></i>
                    <h4>UX/UI desgin</h4>
                    <div className="underline"></div>
                    <p>
                    Design of modern and visually appealing user interfaces (UI) that capture the essence of the personal brand, optimizing the user experience (UX) for intuitive navigation
                    </p>
                  </article>
                  {/* end of services */}
                                     {/* services */}
                                     <article className="service">
                    <i className='fab fa-android service-icon'></i>
                    <h4>Mobile Development</h4>
                    <div className="underline"></div>
                    <p>
                    Development of mobile apps integrating external platforms and working under a data management methodology in order to meet user requirements.
                    </p>
                  </article>
                  {/* end of services */}
                </div>
        </section> 
        {/* end of services */}
        {/* projects */}
        <section className="section projects">
          {/* section-title */}
          <div className="section-title">
            <h2>projects</h2>
            <div className="underline"></div>
              <p className="projects-text">
              The developed projects aim to provide technological solutions to challenges presented in various contexts. The creation of these projects was achieved utilizing diverse technologies such as React, Angular, Spring Boot, Django, among others.
              </p>       
          </div>
        {/* end of section title */}
        <div className="section-center projects-center">
          {/* single project */}
          <a href="" className="project-1" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project1} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>WaBike</h4>
              <p>GA</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
          {/* single project */}
        <a href="" className="project-2" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project2} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>Health App</h4>
              <p>UNAL</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
          {/* single project */}
         <a href="" className="project-3" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project3} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>Hospital at Home</h4>
              <p>UNAL</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
         {/* single project */}
         <a href="" className="project-4" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project4} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>Reading Essence</h4>
              <p>UNAL</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
        </div>
        </section>
        {/* end of projects */}
        {/* connect */}
        <section className="connect">
          <video controls autoPlay muted loop className='video-container' poster={Project1}>
             <source src={Connect} type="video/mp4"/> 
            Sorry, your browser does not support embedded videos
          </video>
          <div className="video-banner">
            {/* section title */}
            <div className="section-title">
              <h2>let's get in touch</h2>
              <div className="underline">
              </div>
              </div>
              {/* end of section title */}
              <p className="video-text">
              Don't hesitate to get in touch with me if you have any inquiries or would like to discuss your project. I'm enthusiastic about your thoughts and eager to see how we can work together. Whether you're considering a potential collaboration, embarking on a creative venture, or simply want to say hi, I'm here, and I'm eager to engage.
              </p>
              <a href="" className="btn" onClick={() => {navigate("/contact")}}>
                contact me
              </a>
          </div>
        </section>
        {/* end of connect */}
        {/* skills */}
        <section className="section skills">
          {/* section title */}
          <div className="section-title">
                      <h2>skills</h2>
                      <div className="underline">
                      </div>
                      </div>
                      {/* end of section title */}
                      <div className="section-center skills-center">
                        <article>
                          <h3>front end</h3>
                          {/* single skill */}
                          <div className="skill">
                            <p>HTML/CSS</p>
                            <div className="skill-container">
                              <div className="skill-value"></div>
                              <p className="skill-text">
                                50%
                              </p>
                            </div>
                          </div>
                          {/* end of single skill */}
                          {/* single skill */}
                          <div className="skill">
                            <p>JavaScript/ReactJs</p>
                            <div className="skill-container">
                              <div className="skill-value value-70"></div>
                              <p className="skill-text skill-text-70">
                                70%
                              </p>
                            </div>
                          </div>
                          {/* end of single skill */}
                        {/* single skill */}
                          <div className="skill">
                            <p>TypeScript/Angular</p>
                            <div className="skill-container">
                              <div className="skill-value value-80"></div>
                              <p className="skill-text skill-text-80">
                                80%
                              </p>
                            </div>
                          </div>
                          {/* end of single skill */}
                        </article>
                        <article>
                          <h3>back end</h3>
                          {/* single skill */}
                          <div className="skill">
                            <p>Java/Spring</p>
                            <div className="skill-container">
                              <div className="skill-value"></div>
                              <p className="skill-text">
                                50%
                              </p>
                            </div>
                          </div>
                          {/* end of single skill */}
                          {/* single skill */}
                          <div className="skill">
                            <p>Python/Django</p>
                            <div className="skill-container">
                              <div className="skill-value value-70"></div>
                              <p className="skill-text skill-text-70">
                                70%
                              </p>
                            </div>
                          </div>
                          {/* end of single skill */}
                        {/* single skill */}
                          <div className="skill">
                            <p>MySQL/Mongo</p>
                            <div className="skill-container">
                              <div className="skill-value value-80"></div>
                              <p className="skill-text skill-text-80">
                                80%
                              </p>
                            </div>
                          </div>
                          {/* end of single skill */}
                        </article>
                      </div>
        </section>
        {/* end of skills */}
        {/* timeline */}
        <div className="section timeline">
                      {/* section title */}
                      <div className="section-title">
                      <h2>Education</h2>
                      <div className="underline">
                      </div>
                      </div>
                      {/* end of section title */}
                      <div className="section-center timeline-center">
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h3>Computer Systems Engineering</h3>
                          <h4>National University of Colombia  agu,2016</h4>
                          <p>Plan, analyze, design, implement, manage, and evaluate computer systems and services based on them.</p>
                            <span className="number">
                              1
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h3>Intermediate Front-End Web Development</h3>
                          <h4>Francisco José de Caldas District University feb,2023 - jul,2023</h4>
                          <p>Creation of efficient, secure frontends, taking into account best practices to ensure their scalability, maintainability, portability, and usability.</p>
                            <span className="number">
                              2
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                        <h3>Back-end Web Development</h3>
                          <h4>MAKAIA Bootcamp jan,2023 - apr,2023</h4>
                          <p>Building REST APIs using relational or non-relational databases using Java with Spring Framework.</p>
                            <span className="number">
                              3
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                        <h3>Business Agility Training G3 - ONE</h3>
                          <h4>Alura + ONE - Oracle Next Education jan,2023 - apr,2023</h4>
                          <p>Business agility for quick adaptation to changes, delivering value to customers.</p>
                            <span className="number">
                              4
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h3>Diploma in Programing Skills with Emphasis in Wep Applications</h3>
                          <h4>National University of Colombia jan,2022 - dic, 2022</h4>
                          <p>Construction of 3-layer web applications deployed in the cloud, developed within an agile team framework.</p>
                            <span className="number">
                              5
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h3>Front-End Web Development</h3>
                          <h4>Geek Academy Bootcamp oct,2021 - dic,2021</h4>
                          <p>Web development with an emphasis on React, Redux, and other front-end technologies.</p>
                            <span className="number">
                              6
                            </span>
                        </article>
                        {/* end of single timeline item */}
                      </div>
        </div>
        {/*end of  timeline */}
        {/* blog */}
        <div className="section blog">
              {/* section title */}
              <div className="section-title">
              <h2>blog</h2>
              <div className="underline">
              </div>
              </div>
              {/* end of section title */}
              <div className="section-center blog-center">
                {/* single article */}
                <div className="card">
                  {/* front of the card */}
                  <div className="card-side card-front">
                    <img src={Blog1} alt="blog-1" />
                    <h4>Angular Material Theming</h4>
                    <p>There are 4 pre-built themes that come with Angular Material: deeppurple-amber, indigo-pink, pink-bluegrey, purple-green</p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                    <button className="btn">read more</button>
                  </div>  
                </div>
                {/* end of single article */}
                {/* single article */}
                <div className="card">
                  {/* front of the card */}
                  <div className="card-side card-front">
                    <img src={Blog2} alt="blog-2" />
                    <h4>Spring Security - JWT</h4>
                    <p>Spring Security + JWT Authentication define a compact and self-contained way for securely transmitting information. </p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                    <button className="btn">read more</button>
                  </div>  
                </div>
                {/* end of single article */}
                {/* single article */}
                <div className="card">
                  {/* front of the card */}
                  <div className="card-side card-front">
                    <img src={Blog3} alt="Blog-3" />
                    <h4>React Component Patterns</h4>
                    <p>The trade-offs of the different React patterns allow for more useful and reusable code by adhering to design principles.</p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                    <button className="btn">read more</button>
                  </div>  
                </div>
                {/* end of single article */}
                {/* single article */}
                <div className="card">
                  {/* front of the card */}
                  <div className="card-side card-front">
                    <img src={Blog4} alt="blog-4" />
                    <h4>Django RESTful APIs using Dj-Rest-Auth</h4>
                    <p>Authentication with dj-rest-auth in a Django REST framework API for Sign-up, Sign in and Sign out, password change and password reset features. 
</p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                    <button className="btn">read more</button>
                  </div>  
                </div>
                {/* end of single article */}
              </div>
        </div>
        {/*end of  blog */}
        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default Home