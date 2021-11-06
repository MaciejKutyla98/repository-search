import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import FavoriteRepository from "../FavoriteRepository/FavoriteRepository";
import './DisplayPage.scss';

export default function DisplayPage(props) {
    const { word } = useParams();
    const items = { ...localStorage };
    const keysList = Object.keys(localStorage);
    let name = []
    let key = []

    for (let i = 0; i < localStorage.length; i++){
        name.push(items[keysList[i]]);
        key.push(keysList[i]);
    }
    let favoriteRepository = name.map(function (x, i) {
        return [x, key[i]]
    });

    function saveToLocalStorage (key, url) {
        localStorage.setItem(key, url);
    }

    function removeFromLocalStorage (key) {
        localStorage.removeItem(key);
    }

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
                            onSaveButtonClick={(key, url) => {
                                saveToLocalStorage(key,url);
                            }}
                            />
                        );
                    })
                }
            </div>
            <span className="favoriteRepositoryTitle">Favorite repositories:</span>
            <div className="favoriteRepositoryWrapper">
                {favoriteRepository.map((item) => {
                    return (
                        <FavoriteRepository
                            name={item[1]}
                            url={item[0]}
                            onRemoveButtonClick={(key) => {
                                removeFromLocalStorage(key);
                            }}/>
                    );
                })}
            </div>
        </div>
    );
}

