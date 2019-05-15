import React, { Component } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TodoList from '@/components/TodoList'
import stateman from 'stateman'
import util from '@/util'

class TodoApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: util.fetch() || [],
      filteredTodos: [],
      current: 'all',
      remaining: 0
    }
  }

  componentDidMount () {
    const self = this
    const router = new stateman()
    router
      .state("/", function () {
        self.setState({ current: 'all' })
        self.updateTodos()
      })
      .state("active", function () {
        self.setState({ current: this.name })
        self.updateTodos()
      })
      .state("completed", function () {
        self.setState({ current: this.name })
        self.updateTodos()
      })
      .start()

    self.updateTodos()
  }

  updateTodos (todos = util[this.state.current](this.state.todos)) {
    this.setState({ filteredTodos: todos })
  }

  _save (todos = this.state.todos) {
    this.setState({ todos: todos })
    this.updateTodos(todos)
    util.save(todos)
  }

  addTodo (todo) {
    this.state.todos.push(todo)
    this._save()
  }

  destroy (index) {
    this.state.todos.splice(index, 1)
    this._save()
  }

  edit ({ index, text }) {
    this.beforeEditCache = text
  }

  toggle (title, completed) {
    const newTodos = this.state.todos.map((todo, index) => {
      if (title === todo.title) {
        todo.completed = completed
      }
      return todo
    })

    this._save(newTodos)
  }

  save (index, val) {
    let newTodos = this.state.todos
    newTodos[index].title = val

    this._save(newTodos)
  }

  toggleAll (e) {
    let newTodos = this.state.todos.map(todo => {
      return Object.assign({}, todo, { completed: true })
    })

    this._save(newTodos)
  }

  removeCompleted () {
    const newTodos = util.active(this.state.todos)
    this._save(newTodos)
  }

  render () {
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo.bind(this)}></Header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" onChange={this.toggleAll.bind(this)} />
          <label htmlFor="toggle-all"/>
          <TodoList
            todos={this.state.filteredTodos}
            onDestroy={this.destroy.bind(this)}
            onEdit={this.edit.bind(this)}
            onToggle={this.toggle.bind(this)}
            onSave={this.save.bind(this)}
          />
        </section>
        <Footer
          current={this.state.current}
          remaining={util.all(this.state.todos).length}
          onRemoveCompleted={this.removeCompleted.bind(this)}
        />
      </div>
    )
  }

}

export default TodoApp