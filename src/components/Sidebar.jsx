import React from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Sidebar';
const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
        <aside className='sidebar'>
            <div>
                <button className="close-btn">
                    <i className='fas fa-times'></i>
                </button>
            {/* sidebar links */}
            <ul className="sidebar-links">
              <li>
                <a href="#" onClick={() => {navigate("/home")}}>home</a>
              </li>
              <li>
                <a href="#" onClick={() => {navigate("/about")}}>about</a>
              </li>
              <li>
                <a href="#" onClick={() => {navigate("/projects")}}>projects</a>
              </li>
              <li>
                <a href="#" onClick={() => {navigate("/contact")}}>contact</a>
              </li>
            </ul>
            {/* social icons */}
            <ul className='social-icons'>
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
            </div>
        </aside>
    </Wrapper>
  )
}

export default Sidebar