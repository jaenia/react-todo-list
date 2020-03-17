import React from 'react'

import './style.css'

function CurrentDate() {
  const currentDate = new Date()
  const weekDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' })
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' })

  return (
    <time dateTime={`${currentDate.toLocaleDateString()}`} className="current-date">
      <h2>{ weekDay + ', ' + currentDate.getDay() }</h2>
      <h3>{ month }</h3>
    </time>
  )
}

export default CurrentDate