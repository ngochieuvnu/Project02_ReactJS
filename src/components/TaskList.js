import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoSearch : ""
        }
    }
    
    onClickStatus = (id) => {
        this.props.changeStatus(id);
    }
    onClickDelete = (id) => {
        this.props.deleteTask(id)
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        this.setState({
            
        })
    }
    render() {
        let element = this.props.tasks.map((task, index) => {
            return <TaskItem
                key={index}
                id={task.id}
                name={task.name}
                status={task.status}
                onClickStatus={this.onClickStatus}
                onClickDelete={this.onClickDelete}
            />
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={this.onHandleChange}
                                        name = "autoSearch"
                                    />
                                </td>
                                <td>
                                    <select className="form-control">
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td />
                            </tr>
                            {element}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaksList;