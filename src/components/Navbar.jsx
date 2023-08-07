import React from 'react'
import Logo from '../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
    {/* navbar  */}
    <nav className='nav' id='nav'>
        <div className='nav-center'>
            {/* navbar header */}
            <div className="nav-header">
              <img src={Logo} className='nav-logo' alt='Logo'/>
              <button className='nav-btn'>
                  <i className='fas fa-bars'></i>
              </button>
            </div>
            {/* navbar links */}
            <ul className="nav-links">
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
        </div>
    </nav>
    </Wrapper>
  )
}

export default Navbar