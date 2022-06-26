import React from 'react'
import {Swiper ,SwiperSlide} from 'swiper/react'
import './Testimonial.css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'


const Testimonial = () => {
    const clients=[
        {
            img:profilePic1,
            review:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
            

        },
        {
            img:profilePic2,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
            
        },
        {
            img:profilePic3,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
            
        },
        {
            img:profilePic4,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
            
        },

    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Client always get</span>
            <span> Exceptional work</span>
            <span> from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        {/*slider*/}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client,index)=>{
            return(
                <SwiperSlide key={index}> 
                <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                </div>
                
                </SwiperSlide>
            )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial