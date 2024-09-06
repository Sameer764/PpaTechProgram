import React from 'react'

function SuccessNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >
        <img src="./src/assets/img/outline-icon/next-arrow-icon.svg" style={{width:"1.111vw",position:"relative",top:"-1.5vw"}} alt="next-arrow" />
      </div>
    );
}

export default SuccessNextArrow
