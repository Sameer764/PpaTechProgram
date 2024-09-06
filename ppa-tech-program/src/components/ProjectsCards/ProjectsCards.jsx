import React from 'react'
import './ProjectsCards.css'
import './ProjectsCardsResponsive.css'

function ProjectsCards({imgsrc,heading,para,tags}) {
  return (
    <div className='project-card'>
      <img className='project-card-img' src={imgsrc} alt="project-img" />
      <h3 className='project-card-heading'>{heading}</h3>
      <p className='project-card-para'>{para}</p>
      <div className="project-topic-desc">
        {tags.map((tag,idx)=>(
            <span key={idx} className='project-topic-tag'>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectsCards
