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
        return fetchedData.data.items.map((item) => {
            return {
                name: item.name,
                htmlUrl: item.html_url,
                language: item.language,
                stargazersCount: item.stargazers_count
            };
        });
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
                        <DisplayPage
                            enteredWord={enteredWord}
                            fetchedData={fetchedData}
                        />
                    </div>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}


