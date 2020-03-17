import React from 'react'

import './style.css'

import TodoItem from '../TodoItem'

function TodoList({ todos, handleCheckChange }) {
  return (
    <div className="todo-list">
      <span>{todos.length} tasks</span>
      <ul>
        { todos.map((todo, index) => 
          <TodoItem
            key={todo.text}
            todo={todo.text}
            isDone={todo.isDone}
            handleCheckChange={ () => handleCheckChange(index) }
          />  
        ) }
      </ul>
    </div>
  )
}

export default TodoList