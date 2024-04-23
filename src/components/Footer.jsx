import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
const Footer = () => {
  return (
    <Wrapper>
    <footer className='footer'>
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
            <center>
      <p> &copy; <span id="date"></span> 2024 INNOVA TECH all rights reserved</p>
            </center>
    </footer>
    </Wrapper>
  )
}

export default Footer