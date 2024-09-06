import React from 'react'
import './InPerson.css'
import './InPersonResponsive.css'

function InPerson() {
  return (
    <div className='in-person-inner-container'>
      <div className='room-heading'>In-the-Room Training</div>
      <div className='in-person-line'></div>
      <div className='in-person-mobile-div'>
        <div className='in-person-address'>
          <h3 className='in-person-sub-heading'>Sector 62, Noida</h3>
          <div className='in-person-item'>
              <img className='in-person-icon' src="./src/assets/img/in-person-icon/map-pin.svg" alt="map"/>
              <p className='in-person-sub-para'>Location</p>
          </div>
        </div>
        <div className='in-person-starts'>
          <h3 className='in-person-sub-heading'>10th September</h3>
          <div className='in-person-item'>
              <img className='in-person-icon' src="./src/assets/img/in-person-icon/clock.svg" alt="clock"/>
              <p className='in-person-sub-para'>Batch Starts from</p>
          </div>
        </div>
        <div className='in-person-seats'>
          <h3 className='in-person-sub-heading'>25</h3>
          <div className='in-person-item'>
            <img className='in-person-icon' src="./src/assets/img/in-person-icon/users.svg" alt="users"/>
              <p className='in-person-sub-para'>Total Seats</p>
          </div>
        </div>
        <div className='in-person-period'>
          <h3 className='in-person-sub-heading'>6 Months</h3>
          <div className='in-person-item'>
              <img className='in-person-icon' src="./src/assets/img/in-person-icon/calendar.svg" alt="calender"/>
              <p className='in-person-sub-para'>Tenure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InPerson
