import React, { useState, useEffect } from 'react';
import './RepositoriesList.scss';

export default function RepositoriesList(props) {
    return (
            <div className="repositoryContent">
                <span className="repositoryContent_name">
                    <a href={props.url}
                       className="repositoryContent_url"
                       target="_blank"
                    >
                        {`${props.name}`}</a>
                </span>
                <p className="repositoryContent_stars">
                    {`${props.star}  `}
                    <span className="repositoryContent_stars_img">
                        &#9733;
                    </span>
                </p>
                <p className="repositoryContent_languages">
                    {`Following languages: ${props.language}`}
                </p>
                <button className="repositoryContent_btn">
                    Add to favorite!
                </button>
            </div>
    );
}