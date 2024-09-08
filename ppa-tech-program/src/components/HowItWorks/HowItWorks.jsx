import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import './HowItWorks.css'
import './HowItWorksMobile.css'
import OutlineNextArrow from '../OutlineArrow/OutlineNextArrow';
import OutlinePrevArrow from '../OutlineArrow/OutlinePrevArrow';

function HowItWorks() {
    const [value,setValue]=useState(1);
    const [activeClass,addActiveClass]=useState(1);
    const settings4 = {
        dots: true,
        className:"how-it-works-crousel",
        arrow: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <OutlineNextArrow className={"outline-next-arrow"}/>,
        prevArrow: <OutlinePrevArrow className={"outline-next-arrow"}/>,
      };
  return (
    <>
        <div className='how-it-works-container'>
            <div className="how-it-works-left">
                <img className='how-it-works-left-img' src={`./src/assets/img/how-it-works-img/how-it-works-img-${value}.svg`} alt={`how-it-works-img-${value}`} />
            </div>
            <div className="how-it-works-right">
                <div className={(activeClass==1)?`selection-div how-it-works-div-active`:`selection-div`} onClick={()=>{setValue(1),addActiveClass(1)}}>
                    <h3 className='selection-div-heading'>
                        Apply, Appear for Selection Test
                    </h3>
                    <p className='selection-div-para'>
                    Submit your application and appear in our selection test. This is your chance to showcase your potential and secure a spot in our program.
                    </p>
                </div>
                <div className={(activeClass==2)?`give-interview-div how-it-works-div-active`:`give-interview-div`} onClick={()=>{setValue(2),addActiveClass(2)}}>
                    <h3 className='give-interview-div-heading'>
                        Apply, Appear for Selection Test
                    </h3>
                    <p className='give-interview-div-para'>
                    Submit your application and appear in our selection test. This is your chance to showcase your potential and secure a spot in our program.
                    </p>
                </div>
                <div className={(activeClass==3)?`admission-offer-div how-it-works-div-active`:`admission-offer-div`} onClick={()=>{setValue(3),addActiveClass(3)}}>
                    <h3 className='admission-offer-div-heading'>
                        Apply, Appear for Selection Test
                    </h3>
                    <p className='admission-offer-div-para'>
                    Submit your application and appear in our selection test. This is your chance to showcase your potential and secure a spot in our program.
                    </p>
                </div>
            </div>
        </div>
        <div className="how-it-works-mobile">
            <Slider {...settings4}>
                <div className='how-it-works-mobilecard'>
                    <h2 className='how-it-works-mobile-heading'>Apply, Appear for Selection Test</h2>
                    <p className="how-it-works-mobile-para">Submit your application and appear in our selection test. This is your chance to showcase your potential and secure a spot in our program.</p>
                    <img className='hiw-mobile-img' src="./src/assets/img/how-it-works-img/how-it-works-mobile-1.svg" alt="how-it-works-img-1" />
                </div>
                <div className='how-it-works-card'>
                    <h2 className='how-it-works-mobile-heading'>Give Interview</h2>
                    <p className="how-it-works-mobile-para">Shortlisted candidates will be invited to an interview. Get ready to showcase your talent and enthusiasm.</p>
                    <img className='hiw-mobile-img' src="./src/assets/img/how-it-works-img/how-it-works-mobile-2.svg" alt="how-it-works-img-2" />
                </div>
                <div className='how-it-works-card'>
                    <h2 className='how-it-works-mobile-heading'>Bingo, Get Admission Offer</h2>
                    <p className="how-it-works-mobile-para">Fantastic! You've secured your spot in our program. Get ready to embark on an exciting learning journey. Welcome to the team!</p>
                    <img className='hiw-mobile-img' src="./src/assets/img/how-it-works-img/how-it-works-mobile-3.svg" alt="how-it-works-img-3" />
                </div>
            </Slider>
        </div>
    </>
  )
}

export default HowItWorks
