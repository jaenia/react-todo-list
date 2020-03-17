import React, { Component } from 'react'

import './style.css'

import AddItemBar from '../../presentional/AddItemBar'
import TodoList from '../../presentional/TodoList'

class TodoListApp extends Component {
  state = {
    newTodo: '',
    todos: [
      {
        text: 'Estudar ReactJS',
        isDone: false
      },
      {
        text: 'Assistir doraminha',
        isDone: false
      },
      {
        text: 'Conferir bullet journal',
        isDone: true
      }
    ]
  }
  
  handleCheckChange = index => {
    const todos = Array.from(this.state.todos)
    todos[index].isDone = !todos[index].isDone
    this.setState({todos})
  }

  handleInputChange = e => {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit = e => {
    const newTodo = {
      text: this.state.newTodo,
      isDone: false
    }

    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: ''
    })
  }

  render() {
    return (
      <div className="todo-list-app content">
        <AddItemBar
          value={this.state.newTodo} 
          placeholder='New Todo'
          buttonText='Add'
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
        />
        <TodoList 
          todos={this.state.todos}
          handleCheckChange={this.handleCheckChange}
        />
      </div>
    )
  }
}

export default TodoListApp
