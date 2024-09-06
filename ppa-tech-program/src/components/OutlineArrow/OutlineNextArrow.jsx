import React from 'react'

function OutlineNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`outline-card-arrow`}
        style={{ 
            // ...style, 
            position:"absolute",
            width: "4.17vw", /* 60px */
            height: "4.17vw", /* 60px */
            backgroundColor: "white",
            top: "-4.2vw", /* -2.2px */
            right: "5vw",
            padding: "0.14vw", /* 2px */
            display: "flex",
            alignItems: "center",
            borderRadius: "50%", /* 50% (circle with 50% border-radius) */

         }
        }
        onClick={onClick}
      >
        <img src="./src/assets/img/outline-icon/next-arrow-icon.svg" style={{width:"1.111vw",position:"relative",left:"1.5vw"}} alt="next-arrow" />
      </div>
    );
}

export default OutlineNextArrow
