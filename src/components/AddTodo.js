import React, { Component } from 'react'
import { addTodo } from '../actions'

export default class extends Component {
  handleNewTodo (event) {
    const { dispatch } = this.props

    if (event.keyCode === 13) {
      const value = event.target.value

      if (!value) {
        return false
      }

      dispatch(addTodo(value))
    }

    event.preventDefault()
  }
  render () {

    return (
      <header className="header">
        <h1>todos</h1>
        <input type="text" placeholder="请输入待办事项" className="new-todo" autoFocus={true} />
      </header>
    )
  }
}