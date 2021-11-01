import React, { useState, useEffect } from 'react';
import SearchBox from "../SearchBox/SearchBox";
import ShowHints from "../ShowHints/ShowHints";
import './HomePage.scss';

export default function HomePage(props) {
    const [enteredWord, setEnteredWord] = useState('');

    return (
        <div className="homePage">
            <div className="searchBoxWrapper">
                <SearchBox
                    onChange={(newValue) => {
                        setEnteredWord(newValue)
                    }}
                    enteredWord={enteredWord}
                />
            </div>
            <div className="showHintsWrapper">
                <ShowHints />
            </div>
        </div>
    );
}