import React from 'react'

import './style.css'

import CurrentDate from '../CurrentDate'

function Header() {
  return (
    <div className="header content">
      <h1><i className="fas fa-list"></i>Todo List</h1>
      <CurrentDate />
    </div>
  )
}

export default Header