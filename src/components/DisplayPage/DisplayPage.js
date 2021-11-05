import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import FavoriteRepository from "../FavoriteRepository/FavoriteRepository";
import './DisplayPage.scss';

export default function DisplayPage(props) {
    const { word } = useParams();

    return (
        <div className="displayPage">
            <div className="repositoriesListWrapper">
                {props.fetchedData.map((repo) => {
                    return (
                        <RepositoriesList
                            name={repo.name}
                            url={repo.htmlUrl}
                            star={repo.stargazersCount}
                            language={repo.language}
                            />
                        );
                    })
                }
            </div>
            <div className="favoriteRepositoryWrapper">
                <FavoriteRepository />
            </div>
        </div>
    );
}