import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchGIFs(this.state.query);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default GifSearch;
