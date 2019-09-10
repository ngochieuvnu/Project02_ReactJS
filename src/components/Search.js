import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        }
    }

    onHandleChange = (event) => {
        var str = event.target.value;

        this.setState({
            searchString: str
        })
    }
    search = () => {
        this.props.onClickSearch(this.state.searchString);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="searchString"
                        onChange={this.onHandleChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary"
                            type="button"
                            onClick={this.search}>
                            <span className="fa fa-search mr-5" />Tìm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;