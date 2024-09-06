import React from 'react'

function OutlinePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`outline-card-arrow outline-prev-arrow`}
        style={{ 
            // ...style, 
            position: "absolute",
            top: "-4.2vw",
            width: "4.17vw", /* 60px */
            height: "4.17vw", /* 60px */
            left:"80vw",
            backgroundColor:"white",
            display:"flex",
            alignItems:"center",
            borderRadius:"50%",
            cursor:"pointer"
         }}
        onClick={onClick}
      >
        <img src="./src/assets/img/outline-icon/prev-arrow-icon.svg" style={{width:"1.111vw",position:"relative",left:"1.5vw"}} alt="prev-arrow" />
      </div>
    );
}

export default OutlinePrevArrow
