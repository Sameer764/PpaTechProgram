import React from 'react'
import "./SuccessStoriesCard.css"
import "./SuccessStoriesResponsive.css"

function SuccessStoriesCard({reviewtext,imgsrc,studentname,companylogo}) {
  return (
    <div className='success-stories-div'>
        <div className='success-stories-card'>
            <div className="success-stories-quotation">
                <img className='quotation-img' src="./src/assets/img/success-stories-img/quotation-icon.png" alt="quotation-img" />
            </div>
            <p className='success-stories-para'>
                {reviewtext}
            </p>
            <div className="success-stories-student-img">
                <img src={imgsrc} alt="success-stories-img" />
            </div>
            <div className='student-name'>
                <h3 className='student-name-text'>{studentname}</h3>
                <img className='linkedin-icon' src="./src/assets/img/success-stories-img/linkedin-icon.png" alt="linkedin-icon" />
            </div>
            <div className="student-profile">
                <h3 className='student-role'>SDE</h3>
                <img className='company-icon' src={companylogo} alt="company-icon" />
            </div>
        </div>
    </div>
  )
}

export default SuccessStoriesCard
