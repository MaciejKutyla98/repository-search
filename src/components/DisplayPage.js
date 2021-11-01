import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

export default function DisplayPage(props) {
    const { word } = useParams();

    return (
        <h1>The results will be displayed here</h1>
    );
}