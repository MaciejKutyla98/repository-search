import React, { useState, useEffect } from 'react';
import '../stylesheets/FavoriteRepository.scss';

export default function FavoriteRepository(props) {
    const repositoryName = "repository-search";
    const repositoryURL = "https://github.com/MaciejKutyla98/repository-search";

    return (
        <div className="favoriteRepositoryContent">
            <h1 className="favoriteRepositoryContent_name">
                <a href={repositoryURL}
                   className="favoriteRepositoryContent_url"
                   target="_blank"
                >
                    {`${repositoryName}`}</a>
            </h1>
            <button className="favoriteRepositoryContent_btn">
                Remove from favorite!
            </button>
        </div>
    );
}