import React from 'react'
import './FeatureCard.css'
import './FeatureResponsive.css'

function FeatureCard({title,imgsrc,id}) {
  return (
    <div className="feature-card">
        <img className='feature-card-img' src={imgsrc} alt="" />
        <h3 className='feature-card-heading'>{title}</h3>
    </div>
  )
}

export default FeatureCard
