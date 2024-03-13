import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bdpvbyf', 'template_s15tt96', form.current, '8GjYmQhhzZ0gsmjG8Y7Il')
      .then((result) => {
          console.log(result.text);
          alert('Email sent!')
          e.target.reset();
        },(error) => {
          console.log(error.text);
        });
  };


  return (
    <section id="contactPage" >
     <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below for any work opportunities</span>
     </div>
     <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <input type="text" className="name" placeholder='Your Name' name='your_name'/>
      <input type="email" className="email" placeholder='Your Email' name='your_email' />
      <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
      <button type="submit" value='send' className="submitBtn">Submit</button>
      <div className="links">
        <img src={FacebookIcon} alt="facebook" className='link' />
        <img src={TwitterIcon} alt="twitter" className='link' />
        <img src={YoutubeIcon} alt="youtube" className='link' />
        <img src={InstagramIcon} alt="instagram" className='link' />
      </div>

     </form>
    </section>
  )
}

export default Contact