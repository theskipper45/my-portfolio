import React, {useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();
   const [Done ,setDone]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4nc13r', 'template_eo0jjui', form.current, '6vym7SrGFrvDn-V09')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
        <div className="awesome">

        <span>Get In Touch</span>
        <span>Connect ME</span>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        </div>
        <div className="c-right">

<form ref={form} onSubmit={sendEmail}>
    <input type="text" name="user-name" className='user' placeholder='Name' />
    <input type="email" name="user-email" className='user' placeholder='Email' />
    <textarea name='message' className='user' placeholder='Message'/>
    <input type="submit" value="Send" className='button'  />
    <span>{Done && "Thanks for contacting me!"}</span>
    <div className="blur c-blur1" style={{background:"var(--purple)"}}>

    </div>
</form>
        </div>
    </div>
  )
}

export default Contact