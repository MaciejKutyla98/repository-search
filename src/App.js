import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import DisplayPage from "./components/DisplayPage/DisplayPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';

export default function App() {
    const [fetchedData, setFetchedData] = useState(null);
    const [enteredWord, setEnteredWord] = useState('');
    let url = 'https://api.github.com/search/repositories?q=';

    function fetchData () {
        url = `https://api.github.com/search/repositories?q=${enteredWord}&per_page=10`
        try {
            axios.get(url)
                .then(res => {
                    const data = res.data;
                    setFetchedData(transformFetchedData({data}));
                })
        } catch (err) {
            console.log(err);
        }
    }

    function transformFetchedData (fetchedData) {
        const result = {
            fetchedNames: [],
            fetchedUrl: [],
            fetchedLanguages: [],
            fetchedStarsCount: []
        };

        if (fetchedData !== null) {
            fetchedData.data.items.forEach((item) => {
                result.fetchedNames.push(item.name);
                result.fetchedUrl.push(item.html_url);
                result.fetchedLanguages.push(item.language);
                result.fetchedStarsCount.push(item.stargazers_count);
            });
        }

        return result;
    }

    useEffect(() => {
        if (enteredWord !== ''){
            fetchData();
        }
    }, [enteredWord]);

    console.log(fetchedData)

  return (
    <div className="repositorySearch">
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="homePage">
                        <HomePage
                            enteredWord={enteredWord}
                            onChange={(newValue) => {
                                setEnteredWord(newValue)
                            }}
                        />
                    </div>
                </Route>
                <Route exact path="/:word">
                    <div className="displayPage">
                        <DisplayPage enteredWord={enteredWord} />
                    </div>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}


