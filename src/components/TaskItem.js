import React, { Component } from 'react';

class TaskItem extends Component {

    changeStatus = () => {
        this.props.onClickStatus(this.props.id);
    }
    deleteTask = () => {
        this.props.onClickDelete(this.props.id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td className="text-center">
                    <span className={this.props.status ? "label label-success" : "label label-danger"}
                        onClick={this.changeStatus}
                    >
                        {this.props.status ? "Kích Hoạt" : "An"}

                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5" >Sửa </span>
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span
                            className="fa fa-trash mr-5"
                            onClick={this.deleteTask}
                        >Xóa </span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;