import React from 'react'
import './GalleryCard.css'
import './GalleryResponsive.css'

function GalleryCard({imgsrc}) {
  return (
    <div className='gallery-card'>
      <img className='gallery-card-img' src={imgsrc} alt="" />
    </div>
  )
}

export default GalleryCard
