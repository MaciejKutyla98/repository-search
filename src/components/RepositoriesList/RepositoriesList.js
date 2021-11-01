import React, { useState, useEffect } from 'react';
import './RepositoriesList.scss';

export default function RepositoriesList(props) {
    const repositoryName = "repository-search";
    const programmingLanguage = "js";
    const numberOfStars = 4;
    const repositoryURL = "https://github.com/MaciejKutyla98/repository-search";

    return (
            <div className="repositoryContent">
                <h1 className="repositoryContent_name">
                    <a href={repositoryURL}
                       className="repositoryContent_url"
                       target="_blank"
                    >
                        {`${repositoryName}`}</a>
                </h1>
                <p className="repositoryContent_stars">
                    {`${numberOfStars}  `}
                    <span className="repositoryContent_stars_img">
                        &#9733;
                    </span>
                </p>
                <p className="repositoryContent_languages">
                    {`Following languages: ${programmingLanguage}`}
                </p>
                <button className="repositoryContent_btn">
                    Add to favorite!
                </button>
            </div>
    );
}