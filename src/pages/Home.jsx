import React from 'react'
import { Footer, Navbar, Sidebar } from '../components'
import Hero from '../assets/images/heroImg.png'
import Avatar from '../assets/images/hero-img-small.jpeg'
import About from '../assets/images/aboutImg.png'
import Project1 from '../assets/images/project-1.jpg'
import Project2 from '../assets/images/project-2.jpg'
import Project3 from '../assets/images/project-3.jpg'
import Project4 from '../assets/images/project-4.jpg'
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Quam vero dolores nobis molestiae inventore rem consequatur. 
                  Sequi, amet laborum quos voluptas eius at in perferendis 
                  quisquam aliquam fuga aspernatur id qui provident illum temporibus 
                  soluta tempore. Amet incidunt asperiores vel.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Quam vero dolores nobis molestiae inventore rem consequatur. 
                  Sequi, amet laborum quos voluptas eius at in perferendis 
                  quisquam aliquam fuga aspernatur id qui provident illum temporibus 
                  soluta tempore. Amet incidunt asperiores vel.
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Dignissimos est temporibus quia aliquam reiciendis, 
                      ipsa aperiam veritatis omnis ratione. Voluptates.
                    </p>
                  </article>
                  {/* end of services */}
                                     {/* services */}
                                     <article className="service">
                    <i className='fab fa-sketch service-icon'></i>
                    <h4>web desgin</h4>
                    <div className="underline"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Dignissimos est temporibus quia aliquam reiciendis, 
                      ipsa aperiam veritatis omnis ratione. Voluptates.
                    </p>
                  </article>
                  {/* end of services */}
                                     {/* services */}
                                     <article className="service">
                    <i className='fab fa-android service-icon'></i>
                    <h4>App design</h4>
                    <div className="underline"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Dignissimos est temporibus quia aliquam reiciendis, 
                      ipsa aperiam veritatis omnis ratione. Voluptates.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatem nam itaque autem quaerat laboriosam voluptas esse 
                temporibus fugiat deserunt voluptates architecto culpa necessitatibus 
                similique nemo voluptatibus, nesciunt dolores aut repellat? Quisquam 
                deleniti nostrum quos et molestiae sint blanditiis atque hic?
              </p>       
          </div>
        {/* end of section title */}
        <div className="section-center projects-center">
          {/* single project */}
          <a href="" className="project-1" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project1} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>project title</h4>
              <p>Client name</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
          {/* single project */}
        <a href="" className="project-2" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project2} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>project title</h4>
              <p>Client name</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
          {/* single project */}
         <a href="" className="project-3" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project3} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>project title</h4>
              <p>Client name</p>
            </div>
          </article>
          </a>
          {/* end of single project */}
         {/* single project */}
         <a href="" className="project-4" onClick={() => {navigate("/projects")}}>
          <article className="project">
            <img src={Project4} alt="single project" className='project-img'/>
            <div className="project-info">
              <h4>project title</h4>
              <p>Client name</p>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum necessitatibus labore, 
                id doloribus distinctio ad illo, dignissimos nobis fugiat, est itaque laboriosam 
                praesentium nisi iste corporis error voluptas repudiandae odit nam blanditiis quod 
                provident nesciunt. Dolor exercitationem rem sint dicta?
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
                      <h2>timeline</h2>
                      <div className="underline">
                      </div>
                      </div>
                      {/* end of section title */}
                      <div className="section-center timeline-center">
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h4>2020</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Neque beatae nemo quod natus asperiores quam libero illum? 
                            Eos, voluptate perspiciatis.</p>
                            <span className="number">
                              1
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h4>2019</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Neque beatae nemo quod natus asperiores quam libero illum? 
                            Eos, voluptate perspiciatis.</p>
                            <span className="number">
                              2
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h4>2018</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Neque beatae nemo quod natus asperiores quam libero illum? 
                            Eos, voluptate perspiciatis.</p>
                            <span className="number">
                              3
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h4>2017</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Neque beatae nemo quod natus asperiores quam libero illum? 
                            Eos, voluptate perspiciatis.</p>
                            <span className="number">
                              4
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h4>2016</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Neque beatae nemo quod natus asperiores quam libero illum? 
                            Eos, voluptate perspiciatis.</p>
                            <span className="number">
                              5
                            </span>
                        </article>
                        {/* end of single timeline item */}
                        {/* single timeline item */}
                        <article className="timeline-item">
                          <h4>2015</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Neque beatae nemo quod natus asperiores quam libero illum? 
                            Eos, voluptate perspiciatis.</p>
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
                    <img src={Project1} alt="project-1" />
                    <h4>article</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Eos adipisci ab officiis ipsam numquam quidem aspernatur?
                        Facere error libero eligendi!</p>
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
                    <img src={Project2} alt="project-2" />
                    <h4>article</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Eos adipisci ab officiis ipsam numquam quidem aspernatur?
                        Facere error libero eligendi!</p>
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
                    <img src={Project3} alt="project-3" />
                    <h4>article</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Eos adipisci ab officiis ipsam numquam quidem aspernatur?
                        Facere error libero eligendi!</p>
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
                    <img src={Project4} alt="project-4" />
                    <h4>article</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Eos adipisci ab officiis ipsam numquam quidem aspernatur?
                        Facere error libero eligendi!</p>
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