import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import RepositoriesList from "./RepositoriesList";
import FavoriteRepository from "./FavoriteRepository";
import '../stylesheets/DisplayPage.scss';

export default function DisplayPage(props) {
    const { word } = useParams();

    return (
        <div className="displayPage">
            <div className="repositoriesListWrapper">
                <RepositoriesList />
            </div>
            <div className="favoriteRepositoryWrapper">
                <FavoriteRepository />
            </div>
        </div>
    );
}