import React from 'react'
import './OutlineCard.css'
import './OutlineCardResponsive.css'

function OutlineCard({id,title,imgsrcs,topics}) {
  return (
    <div className='outline-card-container'>
        <div className='card-icon-div'>
            {
                imgsrcs.map((imgsrc,idx)=>(
                    <img className="card-icon" key={idx+id} src={imgsrc} alt="" />
                ))
            }
        </div>
        <div className="outline-card-text">
            <h3 className='card-outline-heading'>{title}</h3>
            <ul>
                {
                    topics.map((topic,idx)=>(
                        <li className='card-outline-para' key={idx+id}>{topic}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default OutlineCard
