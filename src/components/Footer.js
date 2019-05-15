import React, { Component } from 'react'

class Footer extends Component {


  render () {
    const showCurrent = (current) => {
      return this.props.current === current ? 'selected' : ''
    }

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.remaining}</strong> 项
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className={showCurrent('all')}>全部</a>
          </li>
          <li>
            <a href="#/active" className={showCurrent('active')}>进行中</a>
          </li>
          <li>
            <a href="#/completed" className={showCurrent('completed')}>已完成</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.props.onRemoveCompleted.bind(this)}>清除</button>
      </footer>
    )
  }
}

export default Footer
