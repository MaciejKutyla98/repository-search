import React, { useState, useEffect } from 'react';
import './ShowHints.scss';

export default function ShowHints(props) {
    return (
        <div className="showHintsContent">
                <span className="repositoryContent_name">
                    <a href={props.url}
                       className="repositoryContent_url"
                       target="_blank"
                    >
                        {`${props.name}`}</a>
                </span>
        </div>
    );
}