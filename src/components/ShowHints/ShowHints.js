import React, { useState, useEffect } from 'react';
import './ShowHints.scss';

export default function ShowHints(props) {
    return (
        <div className="showHintsContent">
                <span className="showHintsContent_name">
                    <a href={props.url}
                       className="showHintsContent_url"
                       target="_blank"
                    >
                        {`${props.name}`}</a>
                </span>
        </div>
    );
}