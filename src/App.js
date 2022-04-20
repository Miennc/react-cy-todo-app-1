import React, { Component } from 'react'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTasks: '',
      tasks: [],
      isActive: false,
    }
  }

  handOnchange = (e) => {
    e.preventDefault();
    this.setState({
      newTasks: e.target.value
    })
  }

  add = () => {
    this.state.tasks.push({
      todo: this.state.newTasks,
      done: false
    })
    this.setState({
      newTasks: ''
    })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }
  remove(index) {
    this.state.tasks.splice(index, 1)
    this.setState({
      tasks: this.state.tasks
    })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }
  edit = (index) => {
    this.setState({ showModal: true })
  }
  componentWillMount() {
    this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) })
  }

  render() {
    return (
      <div className="container mx-auto text-center mt-10">
        <input placeholder="add note" className="border-2 border-rose-600" onChange={this.handOnchange} value={this.state.newTasks} />
        <button className="bg-red-500 p-1" onClick={this.add.bind(this)}>ADD</button>
        <ul>
          {
            this.state.tasks.map((task, index) => {
              return (
                <li key={index}>
                  <button className="ml-3 text-red-600" onClick={this.remove.bind(this, index)}>xóa</button>
                  <button className="ml-3 text-red-600" onClick={this.edit.bind(this, index)}>sửa</button>
                </li>
              )
            })

          }
        </ul>
              h1
              </div>
    )
  }
}
