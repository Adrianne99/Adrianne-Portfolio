import React, { useRef, useState, useEffect } from 'react'
import contact from '../Images/mailbox.png'
import emailJs from 'emailjs-com';
import {BsFillCheckCircleFill, BsX} from 'react-icons/bs';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_9misvuw', 'template_i1fpe7z', e.target, 'ow9MhOqrt0kZpiRd3')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                form.current.reset();
            });
    };

    const modalDisplayTime = 4000;

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        let timeout;
        if (modal) {
          timeout = setTimeout(() => {
            setModal(false);
          }, modalDisplayTime);
        }
        return () => clearTimeout(timeout);
      }, [modal]);
    
      const handleClick = () => {
        setModal(true);
      };

    return (
        <div className="contact__container" id='contact'>
            <h1>Contact</h1>
            <h4>Lets Work Together</h4>
            <div className="contact__row">
                <div className="contact__content__one">
                    <img src={contact} />
                </div>
                <div className="contact__content__two">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Need a <span> Web Developer?</span> Contact me now!</h2>
                        <div className="input-box">
                            <p>Your Name</p>
                            <input type="name" name="user_name" placeholder="Enter your Name" required />
                        </div>
                        <div className="input-box">
                            <p>Your Email</p>
                            <input type="email" name="user_email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box message-box">
                            <p> Your Message</p>
                            <textarea placeholder='Type here' name='message' required></textarea>
                        </div>
                        <div className="contact__button">
                            <input type="submit" value="submit" onClick={handleClick} />
                        </div>
                    </form>
                </div>
                <div className="contact__content__three">
                    {modal && (
                        <div className="modal__container">
                        <BsFillCheckCircleFill className='modal__logo'/>
                        <p>The Email has already been sent</p>
                        <button className="close"
                    onClick={toggleModal}
                    >
                        <BsX className='closemodal'/>
                    </button>
                </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact