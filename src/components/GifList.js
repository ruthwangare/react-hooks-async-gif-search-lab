import React from 'react';
import PropTypes from 'prop-types';

function GifList({ gifs }) {
    return (
        <ul>
            {gifs.map(gif => (
                <li key={gif.id}>
                    <img src={gif.url} alt={gif.title} />
                </li>
            ))}
        </ul>
    );
}

GifList.propTypes = {
    gifs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default GifList;
