import React from 'react'

import './style.css'

function TodoItem({ todo, isDone, handleCheckChange }) {
  return (
    <li className={`todo-item ${ isDone ? 'done' : ''}` }>
      <label className="container">
        <input
          name="isDone"
          type="checkbox" 
          checked={isDone}
          onChange={handleCheckChange}
        />
        <span></span>
      </label>
      {todo}
    </li>
  )
}

export default TodoItem