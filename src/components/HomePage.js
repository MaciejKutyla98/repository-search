import React, { useState, useEffect } from 'react';
import SearchBox from "./SearchBox";
import ShowHints from "./ShowHints";
import '../stylesheets/HomePage.scss';

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