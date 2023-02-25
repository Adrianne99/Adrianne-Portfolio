import React, { useState, useEffect, useRef } from 'react'
import Logo from '../Images/logo.png'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaPlusCircle } from 'react-icons/fa'
import CountUp from '../Components/CountUp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link as Links } from 'react-scroll'

const Hero = () => {

    const [show, setShow] = useState(false)

    function handleClick(event) {
        if(setShow(false)){
            event.preventDefault();
        } else{
            setShow(true)
        }
      } 

      useEffect (() => {
        AOS.init({duration: 100, once: true})
      });

    return (
        <div className="hero__container" id='hero'>
            <div className="hero__row__one">
                <h5 data-aos="fade-right" data-aos-duration="2000">Welcome to my Portfolio</h5>
                <h1 data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">I am Adrianne Salazar</h1>
                <p data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">I'm Self-taught Front-end Developer. I started my programming journey a year ago and had my own Projects and Clients</p>
                <div className="hero__buttons" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
                    <a href="AdrianneSalazar.pdf" download="AdrianneSalazar.pdf">Download CV</a>
                    <Links to='footer' spy={true} smooth={true} duration={200} offset={-100}className="buttonThree">Follow me</Links>
                    <a href="#" className='buttonTwo' onClick={() => setShow (!show)} onClick={handleClick}> Follow me</a>
                </div>
                <div className="feedback" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
                <div className="first__feedback">
                <CountUp start={0} end={10} />
                    <p>Satisfied Clients</p>
                </div>
                <div className="second__feedback">
                   <CountUp start={0} end={30} />
                    <p>Web Designs</p>
                </div>
                <div className="third__feedback">
                <CountUp start={0} end={1} />
                    <p>Years of Experience</p>
                </div>
                </div>
                {show ?
                    <div className="socials">
                        <a href="https://www.facebook.com/AdrianneCastillejoSalazar95" target="_blank"><div className="facebook">
                            <BsFacebook className='facebookchild' />
                        </div></a>
                        <div className="twitter">
                            <BsTwitter />
                        </div>
                        <a href="https://www.instagram.com/adriannesalazar9/" target='_blank'><div className="instagram">
                            <BsInstagram />
                        </div></a>
                        <a href="https://www.linkedin.com/in/adrianne-salazar-b19914253/" target='_blank'><div className="linkedin">
                            <BsLinkedin />
                        </div>
                        </a>
                        <a href="https://github.com/Adrianne99" target='_blank'><div className="github">
                            <BsGithub />
                        </div></a>
                    </div>
                : true}
            </div>
            <div className="hero__row__two" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="700">
                <img src={Logo} />
            </div>
        </div>
    )
}

export default Hero