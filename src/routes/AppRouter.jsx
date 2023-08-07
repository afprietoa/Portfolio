import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import {About, Blog, Contact, Projects, Home} from './../pages';


    const AppRouter = () => {

        return (

            <BrowserRouter>
              <Routes>
                <Route path='blog' element={<Blog/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path="contact" element={<Contact />} />
                <Route path='*' element={<Home/>}/>
              </Routes>
              <ToastContainer position='top-center'/>
            </BrowserRouter>

          )
    }
    
    export default AppRouter