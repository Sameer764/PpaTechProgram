import React from 'react'
import './CourseCurriculum.css'

function CourseCurriculum() {
  return (
    <>
      <div className="course-curriculum-left">
        <div className="module module-1 active-module">
            <span className='month-span'>1st Month</span>
            <span className='module-span'>Module 1</span>
        </div>
        <div className="module module-2">
            <span className='month-span'>2nd Month</span>
            <span className='module-span'>Module 2</span>
        </div>
        <div className="module module-3">
            <span className='month-span'>3rd Month</span>
            <span className='module-span'>Module 3</span>
        </div>
        <div className="module module-4">
            <span className='month-span'>4th Month</span>
            <span className='module-span'>Module 4</span>
        </div>
        <div className="module module-5">
            <span className='month-span'>5th Month</span>
            <span className='module-span'>Module 5</span>
        </div>
        <div className="module module-6">
            <span className='month-span'>6th Month</span>
            <span className='module-span'>Module 6</span>
        </div>
      </div>
      <div className="course-curriculum-right">
        <h3 className='topics-heading'>Topics</h3>
        <hr className='topics-hr' />
        <ul className='topics-div'>
            <li className='topic-desc'>OOPS Concepts and Design Principles.</li>
            <li className='topic-desc'>Reflection, java.lang.reflect library and its relevance in Spring.</li>
            <li className='topic-desc'>Exception Handling in a production system.</li>
            <li className='topic-desc'>Maven - Build Automation Tool, Dependencies, Jar files etc</li>
        </ul>
      </div>
    </>
  )
}

export default CourseCurriculum
