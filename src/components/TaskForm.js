import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                id: 0,
                name: "",
                status: true
            }

        }
    }
    onHandleChange = (event) => {
        //event.preventDefault();
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state.task)
    }
    onHandleSubmit = (event)=>{
        event.preventDefault();
    }
    render() {
        return (
            <div className={this.props.active ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "hidden"}>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                onChange = {this.onHandleChange}
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" name="status" required="required">
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="reset" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;