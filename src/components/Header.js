import React, { Component } from 'react'

export default class Header extends Component {
  handleNewTodo (event) {
    if (event.keyCode === 13) {
      const value = event.target.value

      if (!value) {
        return false
      }

      event.target.value = ''
      this.props.addTodo({ title: value, completed: false })
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input type="text" onKeyUp={this.handleNewTodo.bind(this)} placeholder="请输入待办事项" className="new-todo" autoFocus={true} />
      </header>
    )
  }
}
