import React from 'react'
const Progress = (Time) => {
return(

	<div className="progress-bar">
	<div
	  className="filler"
	  style={{ width: `${el.minutes * 60 - (Min * 60 + Sec)}%` }}
	/>
  </div>
	
)
}

export default Progress
