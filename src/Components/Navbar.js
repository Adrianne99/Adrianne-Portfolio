import React, { useState, useEffect } from 'react'
import sitelogo from '../Images/sitelogo.png'
import { Link as Links } from "react-scroll"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [navbar, setFix] = useState(false)

    function setFixed() {
        if(window.scrollY >= 70){
          setFix(true)
        } else {
          setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)

    useEffect (() => {
      AOS.init({duration: 100, once: true})
    });


  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="nav-logo">
          <img src={sitelogo}/>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
        <Links to='hero' spy={true} smooth={true} duration={200} offset={-100} className="nav-hero">Home</Links>
        <Links to='services' spy={true} smooth={true} duration={200} offset={-90} className="nav-services">Services</Links>
        <Links to='skills' spy={true} smooth={true} duration={200} offset={-90} className="nav-skills">Skills</Links>
        <Links to='projects' spy={true} smooth={true} duration={200} offset={0} className="nav-projects">Projects</Links>
        <Links to='contact' spy={true} smooth={true} duration={200} offset={0} className="nav-contact">Contact me</Links>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen (!isOpen)}
        >


            <div className="bars"></div>
        </div>
    </nav>
  )
}

export default Navbar