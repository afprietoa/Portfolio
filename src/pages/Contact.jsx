import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Wrapper from '../assets/wrappers/Contact'
import { Footer, Navbar, Sidebar } from '../components'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
  //Service ID, Template ID, and Public Key
  const serviceId = 'service_k5zdn87';
  const templateId = 'template_utgw40e';
  const publicKey = 'q7U4-GS5XqTmcVjwD';

  //Object with Service ID, Template ID, and Public Key
  const data ={
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params:{
      from_name: name,
      from_email: email,
      to_name: 'InnovaTic',
      message: message,
    },
  }

  try{
    const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
    console.log(res.data);
    setName('');
    setEmail('');
    setMessage('');
  }catch(error){
    console.error(error);
  }
}
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
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              {/* inputs */}
              <input
                type="text"
                placeholder="name"
                class="form-control"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                class="form-control"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="message"
                value={message}
                class="form-control"
                onChange={(e) => setMessage(e.target.value)}
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