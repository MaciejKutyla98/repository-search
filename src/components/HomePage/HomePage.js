import React, { useState, useEffect } from 'react';
import SearchBox from "../SearchBox/SearchBox";
import ShowHints from "../ShowHints/ShowHints";

import './HomePage.scss';
import {Spinner} from "react-bootstrap";

export default function HomePage(props) {
    return (
        <div className="homePage">
            <div className="searchBoxWrapper">
                <SearchBox
                    onChange={props.onChange}
                    enteredWord={props.enteredWord}
                />
            </div>
            {props.isLoaded ? (
            <div className="showHintsWrapper">
                {props.fetchedData.map((repo) => {
                    return (
                        <ShowHints
                            name={repo.name}
                            url={repo.htmlUrl}
                            />
                        );
                    })
                }
            </div> ) :
                <div className="spinner">
                    <Spinner animation="grow" />
                </div>}
        </div>
    );
}