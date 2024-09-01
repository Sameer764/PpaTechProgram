import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner-container">
      <div className='banner-sub-container'>
        <div className="banner-left-text">
          <h1 className='banner-heading'>Tech Fellowship Program</h1>
          <p className='banner-para'>Accelerated Learning to be a Next-Gen Software Engineer. 
          Learn by Building Projects with Tech Leads, Engineers and Product Managers.</p>
          <div className="banner-feature">
            <img src="./src/assets/img/banner-feature.png" alt="banner-feature" />
          </div>
          <button className='apply-now-btn'>Apply Now</button>
        </div>
        <div className="banner-right-image">
          <img src="./src/assets/img/banner-img.png" alt="banner-img"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
