import React, { useState, useEffect } from 'react';
import './SearchBox.scss';
import {Link, useHistory} from "react-router-dom";

export default function SearchBox(props) {
    const history = useHistory();
    const subPageUrl = `/${props.enteredWord}`;

    return (
        <div className="searchBox">
            <input type="text"
                   className="searchBox_input"
                   placeholder="Type repository name, please."
                   autoComplete="off"
                   onChange={ (e) =>{
                       props.onChange(e.target.value);
                   }}
            />
            <div className="searchBox_btn">
                <Link to={`${props.enteredWord}`}>
                    <button onClick={() => {
                        history.push(subPageUrl);
                    }}>Search
                        <i className="fas fa-search"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
}