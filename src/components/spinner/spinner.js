import React from "react"

import "./spinner.css"

const Spinner = () => {
  //return <div>loading...</div>
  return (
    <div className="gooey-container">
      <div className="gooey">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Spinner
