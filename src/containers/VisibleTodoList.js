import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from "../actions";
import TodoList from '@/commponents/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('不存在的：' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFitler)
})

const mapDispatchToProps = {
  onTodoClick: null,
  doubleTodoClick: null
}

export default connect()(TodoList)