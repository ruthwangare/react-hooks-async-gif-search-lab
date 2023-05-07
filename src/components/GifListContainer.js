import React from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(query) {
        const url = `https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=ghttps://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ gifs: data.data });
            });
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default GifListContainer;
