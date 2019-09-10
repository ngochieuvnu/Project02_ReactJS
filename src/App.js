import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Control from './components/Control';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeForm: true,
      tasks: [
        {
          id: 1,
          name: "Hoc ReacJS",
          status: true
        },
        {
          id: 2,
          name: "Xoc NodeJS",
          status: false
        },
        {
          id: 3,
          name: "An Uong",
          status: true
        },
        {
          id: 4,
          name: "Di choi",
          status: true
        },
      ],
      searchString: "",
      searchTasks: [],
      sort: "",
    }
  }
  componentDidMount() {
    this.setState({
      searchTasks: this.state.tasks
    })
  }
  sortTask(str) {
    let tasks = this.state.searchTasks;
    if (str === "AZ") tasks.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    if (str === "ZA") tasks.sort((a, b) => {
      return b.name.localeCompare(a.name)
    })
    if (str === "active") tasks.sort((a, b) => {
      return b.status - a.status
    })
    if (str === "visible") tasks.sort((a, b) => {
      return a.status - b.status
    })
    this.setState({
      searchTasks: tasks
    })
  }

  getMaxId = () => {
    if (typeof this.state.tasks !== 'undefined' && this.state.tasks.length > 0) {
      // the array is defined and has at least one element
      return this.state.tasks[this.state.tasks.length - 1].id + 1;
    }
    return 1;
  }
  //active form add
  onActiveForm = () => {
    this.setState({
      activeForm: !this.state.activeForm
    })
  }

  addTaskForm = (data) => {
    let { tasks } = this.state;
    data.id = this.getMaxId();


    tasks.push(data);

    this.setState({
      tasks: tasks
    })
    this.setState({
      searchTasks: tasks
    })

    localStorage.setItem('tasks', tasks)
  }

  changeStatus = (id) => {
    let task = this.state.tasks.find(task => task.id === id);
    task.status = !task.status;
    let tasks = this.state.tasks;
    this.setState({
      tasks: tasks
    })
  }
  deleteTask = (id) => {
    let tasks = this.state.tasks;
    tasks.splice(tasks.findIndex(task => task.id === id), 1);
    this.setState({
      tasks: tasks
    }, () => {
      this.setState({
        searchTasks: this.state.tasks
      })
    })
  }
  searchTask = (str) => {
    this.setState({
      searchString: str
    })

    let taskSearch = this.state.tasks.filter(task => task.name.toLowerCase().includes(str.toLowerCase()));

    this.setState({
      searchTasks: taskSearch
    })

  }
  onClickSort = (str) => {
    this.setState({
      sort: str
    })
    this.sortTask(str);

  }
  render() {

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <TaskForm active={this.state.activeForm} onHandleAddTask={this.addTaskForm} />
          <div className={this.state.activeForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.onActiveForm()}
            >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <Control
              searchTask={this.searchTask}
              onClickSort={this.onClickSort}
            />
            <TaskList
              tasks={this.state.searchTasks}
              changeStatus={this.changeStatus}
              deleteTask={this.deleteTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
