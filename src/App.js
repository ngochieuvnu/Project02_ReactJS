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
      tasks:[
        {
          id :1,
          name : "Hoc ReacJS",
          status : true
        },
        {
          id :2,
          name : "Hoc NodeJS",
          status : false
        },
      ],
    }    
  }
  getMaxId = () => {
    return this.state.tasks[this.state.tasks.length - 1].id + 1;
  }
  onActiveForm = () => {
    this.setState({
      activeForm: !this.state.activeForm
    })  
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <TaskForm active={this.state.activeForm} />
          <div className={this.state.activeForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={()=>this.onActiveForm()}
            >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <Control />
            <TaskList tasks = {this.state.tasks}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
