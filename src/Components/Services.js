import React, {useState, useEffect} from 'react'
import design from '../Images/design.png'
import hosting from '../Images/hosting.png'
import responsive from '../Images/responsive.png'
import { Link as Links } from "react-scroll"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {


  const [toggleState, setToggleState] = useState(2)

  const toggleTab = (index) => {
    setToggleState(index)
  }


  useEffect (() => {
    AOS.init({duration: 100, once: true})
  });

  return (
    <div className="services__container" id='services'>
      <h1 data-aos="fade-right" data-aos-duration="1000">Services</h1>
      <h4 data-aos="fade-right" data-aos-duration="1000">What i do for my Clients?</h4>
      <div className="services__row">
        <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300" className={toggleState === 1 ? " services__content__one services__content__active" : "services__content__one "} onClick={() => toggleTab(1)}>
          <div className={toggleState === 1 ? " services__content__image services__image__active" : "services__content__image "} onClick={() => toggleTab(1)}>
            <img src={design}/>
          </div>
          <div className={toggleState === 1 ? " services__content__title services__title__active" : "services__content__title "} onClick={() => toggleTab(1)}>
            <h2>Web Development</h2>
          </div>
          <div className={toggleState === 1 ? "services__content__paragraph services__paragraph__active" : "services__content__paragraph"} onClick={() => toggleTab(1)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae atque veniam est modi beatae ratione.</p>
          </div>
          <div className="content__one__button">
            <a href="#contact" className={toggleState === 1 ? "services__content__button services__button__active" : "services__content__button"} onClick={() => toggleTab(1)}>Learn more</a>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="600" className={toggleState === 2 ? " services__content__one services__content__active" : "services__content__one "} onClick={() => toggleTab(2)}>
          <div className={toggleState === 2 ? " services__content__image services__image__active" : "services__content__image "} onClick={() => toggleTab(2)}>
            <img src={responsive}/>
          </div>
          <div className={toggleState === 2 ? " services__content__title services__title__active" : "services__content__title "} onClick={() => toggleTab(2)}>
            <h2>UI/UX Design</h2>
          </div>
          <div className={toggleState === 2 ? "services__content__paragraph services__paragraph__active" : "services__content__paragraph"} onClick={() => toggleTab(2)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae atque veniam est modi beatae ratione.</p>
          </div>
          <div className="content__one__button">
            <a href="#contact" className={toggleState === 2 ? "services__content__button services__button__active" : "services__content__button"} onClick={() => toggleTab(1)}>Learn more</a>
          </div>
        </div>
        <div  data-aos="fade-right" data-aos-duration="2000" data-aos-delay="900" className={toggleState === 3 ? " services__content__one services__content__active" : "services__content__one "} onClick={() => toggleTab(3)}>
          <div className={toggleState === 3 ? " services__content__image services__image__active" : "services__content__image "} onClick={() => toggleTab(3)}>
            <img src={hosting}/>
          </div>
          <div className={toggleState === 3 ? " services__content__title services__title__active" : "services__content__title "} onClick={() => toggleTab(3)}>
            <h2>Web Hosting</h2>
          </div>
          <div className={toggleState === 3 ? "services__content__paragraph services__paragraph__active" : "services__content__paragraph"} onClick={() => toggleTab(3)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vitae atque veniam est modi beatae ratione.</p>
          </div>
          <div className="content__one__button">
            <a href="#contact" className={toggleState === 3 ? "services__content__button services__button__active" : "services__content__button"} onClick={() => toggleTab(3)}>Learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services