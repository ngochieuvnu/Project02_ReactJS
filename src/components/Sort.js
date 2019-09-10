import React, { Component } from 'react';

class Sort extends Component {
    sortAZ = () => {
        this.props.onClickSort("AZ");
    }
    sortZA = () => {
        this.props.onClickSort("ZA");
    }
    sortActive = () => {
        this.props.onClickSort("active");
    }
    sortVisible =()=>{
        this.props.onClickSort("visible");
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <button  onClick={this.sortAZ}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </button>
                        </li>
                        <li>
                            <button  onClick={this.sortZA}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                            </span>
                            </button>
                        </li>
                        <li role="separator" className="divider" />
                        <li><button  onClick={this.sortActive}>Trạng Thái Kích Hoạt</button></li>
                        <li><button  onClick={this.sortVisible}>Trạng Thái Ẩn</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;