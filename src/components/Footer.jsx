import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
const Footer = () => {
  return (
    <Wrapper>
    <footer className='footer'>
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
      <p> &copy; <span id="date"></span> john doe. all rights reserved</p>
    </footer>
    </Wrapper>
  )
}

export default Footer