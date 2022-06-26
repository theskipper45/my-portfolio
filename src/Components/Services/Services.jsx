import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from '../Services/GauravDiwakar.pdf'
import { motion } from 'framer-motion'

const Services = () => {
 const transition={duration:1,type:'spring'}
  return (
   <div className="services" id='Service'>
   {/*left side*/}
    <div className="awesome">
     <span>My awesome</span>
     <span>services</span>
     <span>lorem epsum is a simply tet of pricing of printing lorem epsum text</span>
     <a href={Resume} download>
     <button className="button s-button">Download CV</button>
     </a>
     
     <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
    </div>
     {/*ryt side*/}
    <div className="cards">
    <motion.div 
    whileInView={{left:'20rem'}}
    initial={{left:'25%'}}
    transition={transition}
    style={{left:'14rem'}}>
    <Card
        emoji={HeartEmoji}
        heading={'Design'}
        details={'Figma,sketch,Photoshop,Adobe'}
       />
    </motion.div>
    <motion.div 
    whileInView={{left:'15rem'}}
    initial={{left:'30%'}}
    transition={transition}
    style={{top:'19rem',left:'12rem'}}>
    <Card
        emoji={Humble}
        heading={'UI/UX'}
        details={'REACT.js expert with redux'}
       />
    </motion.div>
    <motion.div 
    whileInView={{right:'8rem'}}
    initial={{left:'30%'}}
    transition={transition}
    style={{ top:'12rem',left:'-4rem'}}>
    <Card
        emoji={Glasses}
        heading={'Developer'}
        details={'html,css,javascript and react'}
       />
    </motion.div>
    <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
    </div>
   </div>
  )
}

export default Services