import React from 'react'

function SuccessPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} success-prev-arrow`}
        style={{ ...style}}
        onClick={onClick}
      >
        <img src="./src/assets/img/outline-icon/prev-arrow-icon.svg" style={{width:"1.111vw",position:"relative",top:"-1.5vw"}} alt="prev-arrow" />
      </div>
    );
}

export default SuccessPrevArrow
