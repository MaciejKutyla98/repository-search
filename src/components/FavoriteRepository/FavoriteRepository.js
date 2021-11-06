import React, { useState, useEffect } from 'react';
import './FavoriteRepository.scss';

export default function FavoriteRepository(props) {

    return (
        <div className="favoriteRepositoryContent">
            <h1 className="favoriteRepositoryContent_name">
                <a href={props.url}
                   className="favoriteRepositoryContent_url"
                   target="_blank"
                >
                    {`${props.name}`}</a>
            </h1>
            <button
                className="favoriteRepositoryContent_btn"
                onClick={() => {
                    props.onRemoveButtonClick(props.name);
                }}
            >
                Remove from favorite!
            </button>
        </div>
    );
}