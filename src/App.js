import './App.scss';
import HomePage from "./components/HomePage";
import DisplayPage from "./components/DisplayPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="repositorySearch">
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="homePage">
                        <HomePage />
                    </div>
                </Route>
                <Route exact path="/:word">
                    <div className="displayPage">
                        <DisplayPage />
                    </div>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}


