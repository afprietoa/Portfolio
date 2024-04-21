import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { Footer, Navbar, Sidebar } from '../components'
const Contact = () => {
  return (
    <Wrapper>
        {/* navbar  */}
        <Navbar />
        {/* end of navbar */}
        {/* sidebar */}
        <Sidebar />
        {/* end of sidebar */}
        <header className="contact-hero">
          {/* section title */}
          <div className="section-title">
            <h1>Contact</h1>
            <div className="underline"></div>
          </div>
          {/* end of section title */}
        </header>
      {/* contact */}
    <section class="section contact">
      <div class="section-center contact-container">
        {/* contact info */}
        <article class="contact-info">
          {/* contact item */}
          <div class="contact-item">
            <h4 class="contact-title">
              <span class="contact-icon">
                <i class="fas fa-location-arrow"></i>
              </span>
              address
            </h4>
            <h4 class="contact-text">
              CL 12 A# 71C - 21  <br />
              Bogota.DC, Colombia
            </h4>
          </div>
          {/* end of contact item */}
          {/* contact item */}
          <div class="contact-item">
            <h4 class="contact-title">
              <span class="contact-icon">
                <i class="fas fa-envelope"></i>
              </span>
              email
            </h4>
            <h4 class="contact-text">
              afprietoa@unal.edu.co
            </h4>
          </div>
          {/* end of contact item */}
          {/* contact item */}
          <div class="contact-item">
            <h4 class="contact-title">
              <span class="contact-icon">
                <i class="fas fa-phone"></i>
              </span>
              telephone
            </h4>
            <h4 class="contact-text">
              + 320 988 3917
            </h4>
          </div>
          {/* end of contact item */}
        </article>
        
        {/* contact form */}
        <article class="contact-form">
          <h3>contact us</h3>
          <form>
            <div class="form-group">
              {/* inputs */}
              <input
                type="text"
                placeholder="name"
                class="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                class="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                class="form-control"
                rows="5"
              ></textarea>
            </div>
            {/* button */}
            <button type="submit" class="submit-btn btn">submit here</button>
          </form>
        </article>
      </div>
    </section>
    {/* end of contact */}
 
        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default Contact