import React, { Component } from 'react';
export default class extends Component {
  render () {
    const { active, children, onClick } = this.props

    return (
      <li>
        <a href="#/" onClick={e => {
          e.preventDefault()
          onClick()
        }}>{ children }</a>
      </li>
    )
  }
}
