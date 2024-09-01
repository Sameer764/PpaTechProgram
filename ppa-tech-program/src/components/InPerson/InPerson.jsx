import React from 'react'
import './InPerson.css'

function InPerson() {
  return (
    <div className='in-person-inner-container'>
      <div className='in-person-heading'>In-Person</div>
      <div className='in-person-line'></div>
      <div className='in-person-address'>
        <h3 className='in-person-sub-heading'>Sector 62, Noida</h3>
        <div>
            <p className='in-person-sub-para'>Location</p>
        </div>
      </div>
      <div className='in-person-starts'>
        <h3 className='in-person-sub-heading'>10th September</h3>
        <div>
            <p className='in-person-sub-para'>Batch Starts from</p>
        </div>
      </div>
      <div className='in-person-seats'>
        <h3 className='in-person-sub-heading'>25</h3>
        <div>
            <p className='in-person-sub-para'>Total Seats</p>
        </div>
      </div>
      <div className='in-person-period'>
        <h3 className='in-person-sub-heading'>6 Months</h3>
        <div>
            <p className='in-person-sub-para'>Tenure</p>
        </div>
      </div>
    </div>
  )
}

export default InPerson
