import React from 'react'
import { Footer, Navbar, Sidebar } from '../components'
import Hero from '../assets/images/heroImg.png'
import InnovaLogo from '../assets/images/InnovaLogo.png'
import Avatar from '../assets/images/author.jpeg'
import About from '../assets/images/aboutImg.png'
import Project1 from '../assets/images/project-1.png'
import Project2 from '../assets/images/project-2.png'
import Project3 from '../assets/images/project-3.png'
import Project4 from '../assets/images/project-4.png'
import Blog1 from '../assets/images/blog-1.png'
import Blog2 from '../assets/images/blog-2.jpg'
import Blog3 from '../assets/images/blog-3.jpg'
import Blog4 from '../assets/images/blog-4.jpg'
import Connect  from '../assets/videos/space.mp4'
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Home'

const projects = [
  {
    image: "https://getwallpapers.com/wallpaper/full/c/f/1/490921.jpg",
    title: "WEB PROJECTS",
    description: "Proficient in cutting-edge web technologies including Angular, Vue, React, Spring, ASP.NET, and Django, I specialize in crafting dynamic and responsive web applications. My focus lies in delivering user-centric designs that prioritize both functionality and aesthetic appeal. With a keen eye for performance optimization and cross-platform compatibility, I strive to create web experiences that captivate users and drive engagement.",
    stacks: ["ANGULAR", "VUE", "REACT", "SPRING", "ASP.NET", "DJANGO"],
    github: "https://github.com/afprietoa?tab=repositories",
    url: "#"
  },
  {
    image: "https://getwallpapers.com/wallpaper/full/f/3/d/489195.jpg",
    title: "MOBILE PROJECTS",
    description: "Experienced in Android development, I create mobile applications that are not only sleek and functional but also optimized for performance and compatibility. My applications enhance mobile accessibility and user retention, focusing on crafting superior mobile experiences that cater to modern consumer needs.",
    stacks: ["KOTLIN", "JAVA", "FLUTTER"],
    github: "https://github.com/afprietoa?tab=repositories",
    url: "#"
  },
  {
    image: "https://getwallpapers.com/wallpaper/full/e/a/b/489560.jpg",
    title: "DESKTOP PROJECTS",
    description: "With a comprehensive understanding of desktop application architecture, I design and implement software solutions that are both powerful and user-centric. My expertise includes developing applications for Windows and cross-platform environments that integrate seamlessly with various hardware and software systems.",
    stacks: ["C#", "JAVA"],
    github: "https://github.com/afprietoa?tab=repositories",
    url: "#"
  }
];


const jobs = [
  {
    company: "UIFCE",
    position: "Jr. Web Developer",
    date: "February 2024 - Present",
    desc: [
      "Provide technological support and code maintenance at both Backend and Frontend levels.",
      "Participate in the full web application development cycle using Angular, Spring Boot, PostgreSQL.",
      "Actively participate in the development of assigned projects by applying agile methodologies."
    ]
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    date: "December 2021 - Present",
    desc: [
      "User interface development using client-side frameworks.",
      "Programming of functions and procedures processed on the server-side.",
      "Creation of APIs using backend frameworks.",
      "Comprehensive database administration."
    ]
  },
  {
    company: "UNAL",
    position: "OOP Teaching Assistant",
    date: "August 2023 - December 2023",
    desc: [
      "Advising students (providing personalized or virtual assistance to solve doubts).",
      "Supporting in the course administration on the LMS platform.",
      "Assisting in the creation and review of new class materials.",
      "Creating virtual exercises and quizzes."
    ]
  }
];

const educations = [
  {
    title: "Computer Systems Engineering",
    subtitle: "National University Of Colombia Agu,2016",
    info: "Plan, analyze, design, implement, manage, and evaluate computer systems and services based on them."
  },
  {
    title: "Web Development",
    subtitle: "University of Antioquia Ago,2023 - Dic,2023",
    info: "Development of web applications based on a Technological Stack from the Frontend to the Backend."
  },
  {
    title: "Front-End Web Development",
    subtitle: "District University of Bogota Feb,2023 - Jul,2023",
    info: "Creation of efficient, secure frontends, taking into account best practices to ensure their scalability, maintainability, portability, and usability."
  },
  {
    title: "Back-End Web Development",
    subtitle: "MAKAIA Bootcamp Jan,2023 - Apr,2023",
    info: "Building REST APIs using relational or non-relational databases using Java with Spring Framework."
  },
  {
    title: "Business Agility",
    subtitle: " Oracle Next Education Jan,2023 - Apr,2023",
    info: "Business agility for quick adaptation to changes, delivering value to customers."
  },
  {
    title: "Web Applications Development",
    subtitle: "National University Of Colombia Jan,2022 - Dic, 2022",
    info: "Construction of 3-layer web applications deployed in the cloud, developed within an agile team framework."
  }
];

const Home = () => {

  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value];
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggle = index => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };


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
              <img src={InnovaLogo} className='innova-logo' alt='Logo'/>
              <h4>Turning Ideas Into Interactive Reality</h4>
              <a href="#" className="btn hero-btn" onClick={() => {navigate("/contact")}}>
                Hire me
              </a>
              {/* social icons */}
            <ul className='social-icons hero-icon'>
                <li>
                    <a href="#" className='social-icon'>
                        <i className='fab fa-facebook'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/afelipeprietoa/" className='social-icon'>
                        <i className='fab fa-linkedin'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@andresa.1982" className='social-icon'>
                        <i className='fab fa-youtube'></i>        
                    </a>
                </li>
                <li>
                    <a href="https://github.com/afprietoa" className='social-icon'>
                        <i className='fab fa-github'></i>        
                    </a>
                </li>
                <li>
                    <a href="#" className='social-icon'>
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


    {/* skills section */}
    <section class="skills clearfix">
      {/* single skill */}
      <article class="skill">
        <span class="skill-icon">
        <i class="devicon-react-original"></i>
        </span>
        <h4 class="skill-title">React</h4>
        <p class="skill-text">
        Specializes in dynamic user interfaces with a component-driven architecture, enhancing UI scalability and interactivity.
        </p>
      </article>
      {/* end of single skill */}
      {/* single skill */}
      <article class="skill">
        <span class="skill-icon">
        <i class="devicon-angular-plain"></i>
        </span>
        <h4 class="skill-title">Angular</h4>
        <p class="skill-text">
        Develops robust, full-scale web applications leveraging strong typing and extensive built-in functionalities for enterprise solutions.
        </p>
      </article>
      {/* end of single skill */}
      {/* single skill */}
      <article class="skill">
        <span class="skill-icon">      
        <i class="devicon-spring-original"></i>
        </span>
        <h4 class="skill-title">Spring</h4>
        <p class="skill-text">
        Expert in creating scalable back-end applications with Spring, focusing on modular architecture and optimal data management.
        </p>
      </article>
      {/* end of single skill */}
      {/* single skill */}
      <article class="skill">
        <span class="skill-icon">             
        <i class="devicon-dot-net-plain"></i>
        </span>
        <h4 class="skill-title">ASP.NET</h4>
        <p class="skill-text">
        Utilizes ASP.NET for efficient and secure web application development, emphasizing rapid deployment and high performance.
        </p>
      </article>
      {/* end of single skill */}
    </section>
    {/* end of skills section */}

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


    {/* products */}
    <section class="products">
      <div class="section-center clearfix">
        {/* products info */}
        <article class="products-info">
          {/* section title */}
          <div class="section-title">
            <h3><span className="hero-title-mod">check</span> out</h3>
            <h2>our <span className="hero-title-mod">Services</span></h2>
            <div className="underline"></div>
          </div>
          {/* end of section title */}
          <p class="product-text">
          We offer tailored digital services including responsive website development that aligns with your goals, modern UI design for enhanced user experience, and mobile app development integrated with external platforms and data management to meet user needs effectively.
          </p>
          <a href="products.html" class="btn">inventory</a>
        </article>
        {/* products inventory */}
        <article class="products-inventory clearfix">
          {/* single product */}
          <div class="product">
          <article className="service">
                    <i className='fas fa-code service-icon'></i>
                    <h4>web development</h4>
                    <div className="underline"></div>
            </article>
            <h4 class="product-title">+10 websites</h4>
          </div>
          {/* end of single product */}
          {/* single product */}
          <div class="product">
          <article className="service">
                    <i className='fab fa-sketch service-icon'></i>
                    <h4>UX/UI desgin</h4>
                    <div className="underline"></div>
            </article>
            <h4 class="product-title">+5 designs</h4>
          </div>
          {/* end of single product */}
          {/* single product */}
          <div class="product">
          <article className="service">
                    <i className='fab fa-android service-icon'></i>
                    <h4>Mobile Development</h4>
                    <div className="underline"></div>
                  </article>
            <h4 class="product-title">+2 Apps</h4>
          </div>
          {/* end of single product */}
                    {/* single product */}
                    <div class="product">
          <article className="service">
                    <i className='fas fa-laptop service-icon'></i>
                    <h4>Desktop Development</h4>
                    <div className="underline"></div>
                  </article>
            <h4 class="product-title">+2 Softwares</h4>
          </div>
          {/* end of single product */}
                    {/* single product */}
                    <div class="product">
          <article className="service">
                    <i className='fab fa-pagelines service-icon'></i>
                    <h4>Consultancy</h4>
                    <div className="underline"></div>
                  </article>
            <h4 class="product-title">+1 Asesories</h4>
          </div>
          {/* end of single product */}
                    {/* single product */}
                    <div class="product">
          <article className="service">
                    <i className='fas fa-bug service-icon'></i>
                    <h4>Support</h4>
                    <div className="underline"></div>
                  </article>
            <h4 class="product-title">+1 Maintenances</h4>
          </div>
          {/* end of single product */}
        </article>
      </div>
    </section>
    {/* end of products */}


    <section className="section jobs">
      {/* section title */}
      <div className="section-title">
      <h2>Experience</h2>
      <div className="underline">
      </div>
      </div>
      {/* end of section title */}
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value ? "active-btn" : ""}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item, index) => (
            <div key={index} className="job-desc">
              <span class="job-icon">
              <i class="fas fa-chevron-right"></i>
              <i class="fas fa-chevron-right"></i>
              </span>
              
              <p>{item}</p>
            </div>
          ))}
        </article>
      </div>
    </section>


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

          <div className="section-center">
          {projects.map((project, index) => (
        <article className="project" key={index}>
          
        <div className="project-img-wrapper">
            <img src={project.image} alt="Project Preview" className="project-img" />
        </div>
          <div className="project-info">
            <span className="project-number">0{index + 1}.</span>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.stacks.map((stack, index) => (
                <span key={index}>{stack}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github}>
                <i class="fab fa-github project-icon"></i>
              </a>
              <a href={project.url}>
                <i class="fas fa-share-square project-icon"></i>
              </a>
            </div>
          </div>
        </article>
      ))}

          </div>
      <Link to="/projects" className="btn center-btn">
        Projects
      </Link>

        </section>
        {/* end of projects */}


        {/* connect */}
        <section className="section connects">
          {/* section title */}
          <div className="section-title">
                      <h2>other <span className='hero-title-mod'>services</span></h2>
                      <div className="underline">
                      </div>
                      </div>
        <div class="section-center connects-center">
        {/* single connect */}
        <article class="connect">
          <span class="connect-icon">
          <i class="fas fa-chart-line fa-fw"></i>
          </span>
          <div class="connect-info">
            <h4 class="connect-title">data analysis</h4>
            <p class="connect-text">
            The process of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making.
            </p>
          </div>
        </article>
        {/* enf of single connect */}
        {/* single connect */}
        <article class="connect">
          <span class="connect-icon">

            <i class="fas fa-chalkboard-teacher fa-fw"></i>
          </span>
          <div class="connect-info">
            <h4 class="connect-title">data visualization</h4>
            <p class="connect-text">
            The technique of presenting data in graphical or pictorial format, such as charts, graphs, and maps, to enable stakeholders to understand trends, outliers, and patterns.
            </p>
          </div>
        </article>
        {/* enf of single connect */}
        {/* single connect */}
        <article class="connect">
          <span class="connect-icon">
            <i class="fas fa-tachometer-alt fa-fw"></i>
          </span>
          <div class="connect-info">
            <h4 class="connect-title">process automation</h4>
            <p class="connect-text">
            Utilizing technology to automate complex and repetitive tasks to enhance efficiency, reduce human error, and lower operational costs in data-driven workflows.
            </p>
          </div>
        </article>
        {/* enf of single connect */}
      </div>
              <Link to="/contact" className="btn center-btn">
                  More Info
              </Link>
        </section>
        {/* end of skills */}

        {/* timeline */}
        <div className="section timeline">
                {/* section title */}
                <div className="section-title">
                <h3><span className="hero-title-mod">Review</span> professional</h3>
                <h2>Profile <span className="hero-title-mod">timeline</span> </h2>
                <div className="underline">
                </div>
                </div>
                <section className='container'>
          {educations.map((education, index) => (
            <article key={index} className='timeline-item question'>
              <header>
                <div>
                <h3>{education.title}</h3>
                <div className="underline"></div>
                <h4>{education.subtitle}</h4>
                </div>

                <button className='question-btn' onClick={() => toggle(index)}>
                  {activeIndex === index ? <i class="fas fa-chevron-circle-up timeline-icon-btn"></i> : <i class="fas fa-chevron-circle-down timeline-icon-btn"></i>}
                </button>
              </header>
              {activeIndex === index && 
              <div>
              
               <p>{education.info}</p>
                 <span className="number">
                   {index + 1}
                 </span>
              </div>

          
              }
            </article>
          ))}
        </section>

          </div>
        {/*end of  timeline */}

        {/* blog */}
        <div className="section blog">
              {/* section title */}
              <div className="section-title">
              <h2>Featured <span className="hero-title-mod">blog</span></h2>
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

                    <div className='blog-info'>
                    <h4>SOLID Principles In C# / .NET</h4>
                    <p>There are 4 pre-built themes that come with Angular Material: deeppurple-amber, indigo-pink, pink-bluegrey, purple-green</p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
                    </div>


                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                  <Link to="/post/1" className="btn">
                  read more
                  </Link>
                  </div>  
                </div>
                {/* end of single article */}
                {/* single article */}
                <div className="card">
                  {/* front of the card */}
                  <div className="card-side card-front">
                    <img src={Blog2} alt="blog-2" />

                    <div className='blog-info'>
                    <h4>Implementing Hexagonal Architecture In Java / Spring</h4>
                    <p>Spring Security + JWT Authentication define a compact and self-contained way for securely transmitting information. </p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
                    </div>

                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                  <Link to="/post/2" className="btn">
                  read more
                  </Link>
                  </div>  
                </div>
                {/* end of single article */}
                {/* single article */}
                <div className="card">
                  {/* front of the card */}
                  <div className="card-side card-front">
                    <img src={Blog3} alt="Blog-3" />

                    <div className='blog-info'>
                        <h4>Mastering Interceptors And Guards In Angular</h4>
                        <p>The trade-offs of the different React patterns allow for more useful and reusable code by adhering to design principles.</p>
                        <div className="card-footer">
                          <img src={Avatar} alt="avatar"/>
                          <p>7 min read</p>
                        </div>
                    </div>

                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                  <Link to="/post/3" className="btn">
                  read more
                  </Link>
                  </div>  
                </div>
                {/* end of single article */}

              </div>                
              <Link to="/blog" className="btn center-btn">
                  Blogs
              </Link>
        </div>
        {/*end of  blog */}
        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default Home