import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';


const footer = () => {
  return (
    <div className="footer__container" id='footer'>
      <div className="socials__below">
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
        <p>Designed & Built by Adrianne Salazar</p>
    </div>
  )
}

export default footer