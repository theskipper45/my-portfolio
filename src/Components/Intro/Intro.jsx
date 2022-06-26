import React from "react";
import "./Intro.css";
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from "../Flotingdiv/FloatingDiv";
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { motion } from "framer-motion";



const Intro = () => {
  const transition={duration: 2, type:'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Gaurav Diwakar</span>
          <span>
            I am a fronted end develper with expertise in react.js. Currently
            working on backend side
          </span>
        </div>

        <button className="button i-button">Hire ME</button>
        <div className="i-icons">
        <a href="https://github.com/theskipper45">
        <img src={Github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/gaurav-diwakar-7a30ba102">
        <img src={Linkedin} alt="" />
        </a>
         <a href="https://www.instagram.com/the_skipper45/">
        <img src={Instagram} alt="" />
        </a>   
      </div>

      </div>
     
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img 
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} 
        alt=""
        />
        <motion.div 
         initial={{top:'-4%',left:'74%'}}
         whileInView={{left:'68%'}}
         transition={transition}
        style={{top:'-4%',left:'68%'}}
        className='floating-div'>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div 
        initial={{top:'18rem',left:'9rem'}}
         whileInView={{left:'0rem'}}
         transition={transition}
        style={{top:'18rem',left:'0rem'}}
        className='floating-div'>
            <FloatingDiv image={thumbup} txt1='React.js' txt2='Expert'/>
        </motion.div>
        <div className="blur" style={{background:"rgb(238 210 255"}}></div>
        <div className="blur" style={{
            background:'#C1FSFF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'

        }}></div>
      </div>
    </div>
  );
};

export default Intro;
