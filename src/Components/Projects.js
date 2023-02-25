import React, {useEffect} from 'react'
import website from '../Images/Website.png'
import websiteTwo from '../Images/WebsiteTwo.jpg'
import websiteThree from '../Images/websiteThree.png'
import WebsiteFour from '../Images/WebsiteFour.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

    useEffect (() => {
        AOS.init({duration: 100, once: true})
      });

  return (
    <div className="project__container" id='projects'>
        <h1>Projects</h1>
      <h4>My Previous Works</h4>
        <div className="project__row">
            <div className="project__content__one" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                <div className="project__image">
                    <img src={website}/>
                </div>
                <div className="project__title">
                    <h2>Metaverse Front-end</h2>
                </div>
                <div className="project__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur ab explicabo quo deserunt atque, ex fugiat nam eos? Quas accusamus fugiat voluptatibus deserunt voluptas?</p>
                </div>
                <div className="project__langs">
                        <p>REACT</p>
                        <p>CSS</p>
                        <p>BOOTSTRAP</p>
                </div>
            </div>
            <div className="project__content__one" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                <div className="project__image">
                    <img src={websiteTwo}/>
                </div>
                <div className="project__title">
                    <h2>Cryptocurrency Website</h2>
                </div>
                <div className="project__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur ab explicabo quo deserunt atque, ex fugiat nam eos? Quas accusamus fugiat voluptatibus deserunt voluptas?</p>
                </div>
                <div className="project__langs">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>BOOTSTRAP</p>
                        <p>JAVASCRIPT</p>
                </div>
            </div>  
            <div className="project__content__one" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="project__image">
                    <img src={websiteThree}/>
                </div>
                <div className="project__title">
                    <h2>Digital Services Website</h2>
                </div>
                <div className="project__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur ab explicabo quo deserunt atque, ex fugiat nam eos? Quas accusamus fugiat voluptatibus deserunt voluptas?</p>
                </div>
                <div className="project__langs">
                        <p>REACT</p>
                        <p>API</p>
                        <p>CSS</p>
                        <p>BOOTSTRAP</p>
                </div>
            </div>  
            <div className="project__content__one" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="project__image">
                    <img src={WebsiteFour}/>
                </div>
                <div className="project__title">
                    <h2>Cryptocurrency Website</h2>
                </div>
                <div className="project__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur ab explicabo quo deserunt atque, ex fugiat nam eos? Quas accusamus fugiat voluptatibus deserunt voluptas?</p>
                </div>
                <div className="project__langs">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>BOOTSTRAP</p>
                        <p>JAVASCRIPT</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Projects