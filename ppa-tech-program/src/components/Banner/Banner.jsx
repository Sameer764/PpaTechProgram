import React from 'react'
import "./Banner.css"
import './BannerResponsive.css'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className='banner-sub-container'>
        <div className="banner-left-text">
          <h1 className='banner-heading'>Tech Fellowship</h1>
          <h1 className='banner-heading'>Program</h1>
          <p className='banner-para'>Accelerated Learning to be a Next-Gen Software Engineer.<br className='banner-break-text'/>Learn by Building Projects with Tech Leads, Engineers and Product Managers.</p>
          <div className="banner-image-mobile-div">
            <img className='banner-mobile-image' src="./src/assets/img/banner-section-img/banner-img.svg" alt="banner-img"/>
          </div>
          <div className="banner-feature">
            <div className='banner-feature-item'>
                <img className='banner-feature-img' src="./src/assets/img/banner-section-img/corporate.png" alt="corporate-icon"/>
                <p className='banner-feature-item-para'>Learn in a Corporate Ecosystem</p>
            </div>
            <div className='banner-feature-item'>
              <img className='banner-feature-img' src="./src/assets/img/banner-section-img/money.png" alt="money-icon"/>
              <p className='banner-feature-item-para'>Assured Paid Internships</p>
            </div>
            <div className='banner-feature-item'>
              <img className='banner-feature-img' src="./src/assets/img/banner-section-img/books.png" alt="books-icon"/>
              <p className='banner-feature-item-para'>In-depth Coursework</p>
            </div>
            <div className='banner-feature-item'>
              <img className='banner-feature-img' src="./src/assets/img/banner-section-img/inperson.png" alt="inperson-icon"/>
              <p className='banner-feature-item-para'>In-Person Full-Time Learning</p>
            </div>
            <div className='banner-feature-item'>
              <img className='banner-feature-img' src="./src/assets/img/banner-section-img/scholarship.png" alt="scholarsgip-icon"/>
              <p className='banner-feature-item-para'>Educational Aid with Scholarships up to 40%</p>
            </div>
          </div>
          <button className='apply-now-btn'>Apply Now</button>
        </div>
        <div className="banner-right-image">
          <img src="./src/assets/img/banner-section-img/banner-img.svg" alt="banner-img"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
