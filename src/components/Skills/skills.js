import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as mastering popular frontend frameworks such as React.js</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UI Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Passionate UI/UX developer dedicated to crafting seamless digital experiences that blend aesthetic appeal with user-centric design principles. Proficient in leveraging cutting-edge technologies to deliver intuitive interfaces that elevate user engagement and satisfaction.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Empowering businesses with captivating website designs that harmonize aesthetics and functionality. Crafting immersive digital experiences that resonate with audiences and drive meaningful engagement.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="App Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Crafting intuitive app designs that seamlessly blend form and function, enriching user experiences. Leveraging creativity and user-centric approaches to deliver engaging digital solutions that inspire and captivate.</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Skills
