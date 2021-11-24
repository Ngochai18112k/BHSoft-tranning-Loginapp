import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="app">
                <div className="app-wrapper">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
