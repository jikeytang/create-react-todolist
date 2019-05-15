import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render () {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) => {
          return <Todo key={index} index={index} {...todo} {...this.props}></Todo>
        })}
      </ul>
    )
  }
}

export default TodoList