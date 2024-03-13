import React from 'react';
import './intro.css';
import bg from '../../assets/MyImage.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">I'm <span className="introName">Vicky <br /></span>Website Designer</span>
        <p className="introPara">I am a skilled and passionate Web designer with experience in creating <br /> visually appealing and user-friendly websites</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
