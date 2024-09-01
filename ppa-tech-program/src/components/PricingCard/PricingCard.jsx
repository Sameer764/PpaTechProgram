import React from 'react'
import "./PricingCard.css"

function PricingCard({plantag,trainingduration,trainingprice,features}) {
  return (
    <div className='pricing-plan-card'>
        <span className='pricing-plan-tag'>{plantag}</span>
        <h3 className='training-duration'>{trainingduration}</h3>
        <p className='training-desc'>
            Start your coding journey with our 6-week program. Learn basics, build projects.
        </p>
        <div className="training-price">
            <span>{trainingprice}</span>
            <span className='training-price-para'>/- One time payment</span>
        </div>
        <button className="apply-now-btn register-now-btn">Register Now</button>
        <h3 className='training-feature-heading'>{features}</h3>
        <ul className='training-features'>
            <li className='training-feature'>
                <img src="./src/assets/img/pricing-plan-icon/pricing-card-tick.png" alt="pricing-card-tick" />
                <p>Learn in a corporate ecosystem</p>
            </li>
            <li className='training-feature'>
                <img src="./src/assets/img/pricing-plan-icon/pricing-card-tick.png" alt="pricing-card-tick" />
                <p>Assured Paid Internships</p>
            </li>
            <li className='training-feature'>
                <img src="./src/assets/img/pricing-plan-icon/pricing-card-tick.png" alt="pricing-card-tick" />
                <p>In-depth Coursework</p>
            </li>
            <li className='training-feature'>
                <img src="./src/assets/img/pricing-plan-icon/pricing-card-tick.png" alt="pricing-card-tick" />
                <p>In-Person Full-time</p>
            </li>
            <li className='training-feature'>
                <img src="./src/assets/img/pricing-plan-icon/pricing-card-tick.png" alt="pricing-card-tick" /> 
                <p>Educational Aid Upto 40% Scholarships</p>
            </li>
        </ul>
    </div>
  )
}

export default PricingCard
