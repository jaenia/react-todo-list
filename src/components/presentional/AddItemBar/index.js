import React from 'react'

import './style.css'

function AddItemBar({ value, placeholder, buttonText, onChange, onSubmit }){
  return (
    <form className="add-item-bar" onSubmit={onSubmit}>
      <input 
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
      />
      <button type="submit">{buttonText}</button>
    </form>
  )
}

export default AddItemBar