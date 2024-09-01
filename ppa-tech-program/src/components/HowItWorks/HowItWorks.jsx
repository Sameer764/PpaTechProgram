import React from 'react'
import { useState } from 'react'
import './HowItWorks.css'

function HowItWorks() {
    const [value,setValue]=useState(1);
    const [activeClass,addActiveClass]=useState(1);
  return (
    <div className='how-it-works-container'>
        <div className="how-it-works-left">
            <img className='how-it-works-left-img' src={`./src/assets/img/how-it-works-img/how-it-works-img-${value}.png`} alt={`how-it-works-img-${value}`} />
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
  )
}

export default HowItWorks
