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
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Home'

const projects = [
  {
    image: "https://getwallpapers.com/wallpaper/full/c/f/1/490921.jpg",
    title: "ANGULAR PROJECT",
    description: "I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore. Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.",
    stacks: ["ANGULAR", "FIREBASE"],
    github: "#",
    url: "#"
  },
  {
    image: "https://getwallpapers.com/wallpaper/full/f/3/d/489195.jpg",
    title: "REACT PROJECT",
    description: "Tumblr intelligentsia brunch, heirloom crucifix tousled butcher poke fanny pack lumbersexual forage. Keytar portland lyft mixtape fixie tofu vice blue bottle. Ethical waistcoat flannel vape banjo you probably haven't heard of them mlkshk, mumblecore umami fam slow-carb. Shaman fashion axe mlkshk bitters quinoa cornhole pok pok pabst cray cronut snackwave dreamcatcher you probably haven't heard of them.",
    stacks: ["REACT", "REDUX"],
    github: "#",
    url: "#"
  },
  {
    image: "https://getwallpapers.com/wallpaper/full/e/a/b/489560.jpg",
    title: "GATSBY PROJECT",
    description: "Vaporware YOLO kinfolk iceland. Tbh swag fashion axe brooklyn literally +1 shoreditch. Letterpress heirloom ethical gluten-free disrupt. VHS post-ironic godard, tumeric ugh next level farm-to-table tilde. Jean shorts next level sartorial, health goth poutine offal flexitarian pour-over messenger bag.",
    stacks: ["GATSBY", "STRAPI"],
    github: "#",
    url: "#"
  }
];


const jobs = [
  {
    company: "Tommy",
    position: "Full Stack Web Developer",
    date: "December 2015 - Present",
    desc: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
    ]
  },
  {
    company: "BigDrop",
    position: "Front-End Engineer",
    date: "May 2015 - December 2015",
    desc: [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Polaroid succulents tumeric before they sold out taiyaki master cleanse neutra. Hammock photo booth live-edge disrupt."
    ]
  },
  {
    company: "Cuker",
    position: "Engineering Intern",
    date: "May 2014 - September 2015",
    desc: [
      "Bushwick jianbing humblebrag chicharrones truffaut, ramps williamsburg.",
      "Farm-to-table quinoa man bun, 90's mlkshk blue bottle wayfarers everyday carry heirloom asymmetrical swag pok pok.",
      "Mixtape church-key synth, whatever pickled prism migas green juice iPhone vaporware pour-over fam chia craft beer.",
      "Prism tumblr freegan cloud bread squid palo santo, disrupt twee."
    ]
  }
];
const Home = () => {

  const [value, setValue] = React.useState(0);
  const { company, position, date, desc } = jobs[value];

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
              <h1>Innova<span className="hero-title-mod">TIC</span></h1>
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


    {/* skills section */}
    <section class="skills clearfix">
      {/* single skill */}
      <article class="skill">
        <span class="skill-icon">
        <i class="devicon-react-original"></i>
        </span>
        <h4 class="skill-title">React</h4>
        <p class="skill-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          rerum?
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          rerum?
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          rerum?
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          rerum?
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
            <h3>check out</h3>
            <h2>our Services</h2>
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
            <i class="fas fa-wallet fa-fw"></i>
          </span>
          <div class="connect-info">
            <h4 class="connect-title">saving money</h4>
            <p class="connect-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cupiditate, tempore reiciendis sit ipsum consequatur!
            </p>
          </div>
        </article>
        {/* enf of single connect */}
        {/* single connect */}
        <article class="connect">
          <span class="connect-icon">
            <i class="fas fa-tree fa-fw"></i>
          </span>
          <div class="connect-info">
            <h4 class="connect-title">endless biking</h4>
            <p class="connect-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cupiditate, tempore reiciendis sit ipsum consequatur!
            </p>
          </div>
        </article>
        {/* enf of single connect */}
        {/* single connect */}
        <article class="connect">
          <span class="connect-icon">
            <i class="fas fa-socks fa-fw"></i>
          </span>
          <div class="connect-info">
            <h4 class="connect-title">amazing comfort</h4>
            <p class="connect-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              cupiditate, tempore reiciendis sit ipsum consequatur!
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

                    <div className='blog-info'>
                    <h4>Angular Material Theming</h4>
                    <p>There are 4 pre-built themes that come with Angular Material: deeppurple-amber, indigo-pink, pink-bluegrey, purple-green</p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
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

                    <div className='blog-info'>
                    <h4>Spring Security - JWT</h4>
                    <p>Spring Security + JWT Authentication define a compact and self-contained way for securely transmitting information. </p>
                    <div className="card-footer">
                      <img src={Avatar} alt="avatar"/>
                      <p>7 min read</p>
                    </div>
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

                    <div className='blog-info'>
                        <h4>React Component Patterns</h4>
                        <p>The trade-offs of the different React patterns allow for more useful and reusable code by adhering to design principles.</p>
                        <div className="card-footer">
                          <img src={Avatar} alt="avatar"/>
                          <p>7 min read</p>
                        </div>
                    </div>

                  </div>
                  {/* card back */}
                  <div className="card-side card-back">
                    <button className="btn">read more</button>
                  </div>  
                </div>
                {/* end of single article */}

              </div>                
              <Link to="/blogs" className="btn center-btn">
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