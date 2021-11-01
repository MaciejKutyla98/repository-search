import React, { useState, useEffect } from 'react';
import './ShowHints.scss';

export default function ShowHints(props) {
    const repositoryName = "repository-search";
    const repositoryURL = "https://github.com/MaciejKutyla98/repository-search";

    return (
        <div className="showHintsContent">
            <h3 className="showHintsContent_name">
                <a href={repositoryURL}
                   className="showHintsContent_url"
                   target="_blank"
                >
                    {`${repositoryName}`}</a>
            </h3>
        </div>
    );
}