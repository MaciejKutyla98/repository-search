import React, { useState, useEffect } from 'react';
import SearchBox from "./SearchBox";

export default function HomePage(props) {
    const [enteredWord, setEnteredWord] = useState('');

    return (
        <div className="homePage">
            <SearchBox
                onChange={(newValue) => {
                    setEnteredWord(newValue)
                }}
                enteredWord={enteredWord}
            />
        </div>
    );
}