import React, { Component } from 'react'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editText: props.title,
      editing: null
    }
  }

  handleDestroy () {
    this.props.onDestroy(this.props.index)
  }

  handleEdit () {
    this.props.onEdit(this.props)
    this.setState({ editing: true })
  }

  handleToggle () {
    this.props.onToggle(this.props.title, !this.props.completed)
  }

  handleSubmit () {
    const val = this.state.editText.trim()

    if (val) {
      this.props.onSave(this.props.index, val)
      this.setState({ editing: null})
    } else {
      this.props.onDestroy()
    }
  }

  handleKeyDown (e) {
    if (e.which === 27) {
      this.setState({ editText: this.props.title })
      // this.props.onCancel(e)
    } else if (e.which === 13) {
      this.handleSubmit(e);
    }
  }

  handleChange (e) {
    if (this.state.editing) {
      this.setState({ editText: e.target.value })
    }
  }

  render () {
    const { completed } = this.props
    const completedClass = [completed ? 'completed' : '', this.state.editing ? 'editing' : ''].join(' ')

    return (
      <li className={completedClass}>
        <div className="view">
          <input type="checkbox" className="toggle" checked={completed} onChange={this.handleToggle.bind(this)}/>
          <label onDoubleClick={this.handleEdit.bind(this)}>{this.props.title}</label>
          <button className="destroy" onClick={this.handleDestroy.bind(this)}/>
        </div>
        <input
          type="text"
          className="edit"
          value={this.state.editText}
          onBlur={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </li>
    )
  }
}

export default Todo