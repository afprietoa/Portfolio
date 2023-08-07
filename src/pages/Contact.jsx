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
        <section class="section single-page">
      {/* section title */}
      <div class="section-title">
        <h1>contact</h1>
        <div class="underline"></div>
      </div>
      {/* end of section title */}
      <div class="section-center page-info">
        {/* contact page */}
        <p>
          If you are looking to get ahold of me, you can send me an email at
          <a href="mailto:email@email.com">@your_email</a>
        </p>
        <p>
          You can also reach me on Twitter at
          <a href="https://www.twitter.com">@your_social_media </a>
        </p>
      </div>
    </section>
        {/* footer */}
        <Footer />
    </Wrapper>
  )
}

export default Contact