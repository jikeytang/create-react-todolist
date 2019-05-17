import React, { Component } from 'react'
import FilterLink from '@/containers/FilterLink';

class Footer extends Component {

  render () {
    // const showCurrent = (current) => {
    //   return this.props.current === current ? 'selected' : ''
    // }

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.remaining}</strong> 项
        </span>
        <ul className="filters">
          <FilterLink filter="SHOW_ALL">全部</FilterLink>
          <FilterLink filter="SHOW_ACTIVE">进行中</FilterLink>
          <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
        </ul>
        <button className="clear-completed" onClick={this.props.onRemoveCompleted.bind(this)}>清除</button>
      </footer>
    )
  }
}

export default Footer
