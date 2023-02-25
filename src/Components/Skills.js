import React, {useEffect} from 'react'
import html from '../Images/html.png'
import css from '../Images/css.png'
import javascript from '../Images/js.png'
import bootstrap from '../Images/bootstrap.png'
import sass from '../Images/sass.png'
import react from '../Images/react.png'
import github from '../Images/github.png'
import node from '../Images/nodejs.png'
import tailwind from '../Images/tailwind.png'
import AOS from 'aos'
import 'aos/dist/aos.css'




const Skills = () => {


    useEffect (() => {
        AOS.init({duration: 100, once: true})
      });

  return (
    <div className="skills__container" id='skills'>
        <h1 data-aos="fade-right" data-aos-duration="1000">Skills</h1>
      <h4 data-aos="fade-right" data-aos-duration="1000">What i know?</h4>
        <div className="skills__row">
            <div className="skills__content__one html" data-aos="fade-up" data-aos-duration="1000" aos-delay-duration="50">
                <div className="skills__image">
                    <img src={html}/>
                </div>
                <div className="skills__title">
                    <h2>Html</h2>
                </div>
            </div>
            <div className="skills__content__one css" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div className="skills__image">
                    <img src={css}/>
                </div>
                <div className="skills__title">
                    <h2>Css</h2>
                </div>
            </div>
            <div className="skills__content__one javascript" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                <div className="skills__image">
                    <img src={javascript}/>
                </div>
                <div className="skills__title">
                    <h2>Javascript</h2>
                </div>
            </div>
            <div className="skills__content__one bootstrap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="skills__image">
                    <img src={bootstrap}/>
                </div>
                <div className="skills__title">
                    <h2>Bootstrap</h2>
                </div>
            </div>
            <div className="skills__content__one sass" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                <div className="skills__image">
                    <img src={sass}/>
                </div>
                <div className="skills__title">
                    <h2>Sass</h2>
                </div>
            </div>
            <div className="skills__content__one react" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <div className="skills__image">
                    <img src={react}/>
                </div>
                <div className="skills__title">
                    <h2>React</h2>
                </div>
            </div>
            <div className="skills__content__one githubs" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
                <div className="skills__image">
                    <img src={github}/>
                </div>
                <div className="skills__title">
                    <h2>Github</h2>
                </div>
            </div>
            <div className="skills__content__one node" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="skills__image">
                    <img src={node}/>
                </div>
                <div className="skills__title">
                    <h2>Node</h2>
                </div>
            </div>
            <div className="skills__content__one tailwind" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
                <div className="skills__image">
                    <img src={tailwind}/>
                </div>
                <div className="skills__title">
                    <h2>Tailwind</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills