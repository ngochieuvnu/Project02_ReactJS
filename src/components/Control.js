import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stringSearch: "",
            sort: 0
        }
    }
    onClickSort = (str) =>{
        this.props.onClickSort(str);
    }
    onClickSearch = (str) => {
        this.setState({
            stringSearch : str
        })
        this.props.searchTask(str);
    }
    render() {
        return (
            <div className="row mt-15">
                <Search onClickSearch={this.onClickSearch} />
                <Sort onClickSort = {this.onClickSort}/>
            </div>
        );
    }
}

export default Control;