import Controller from './controller'
import './style.scss'
import React, { Component, Fragment, NotFound } from "react"
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login/Login";
// import AppliedRoute from "./components/AppliedRoute";

// export default ({ childProps }) =>
// <switch>
//     <AppliedRoute path="/" exact component={Home} props={childProps} />
//     <AppliedRoute path="/login" exact component={Login} props={childProps} />
//     {/* blabla */}
//     <Route component={NotFound} />
   
// </switch>;

class App extends Controller {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Route path="/home" exact strict component={Home} />
                <Route path="/about" exact strict component={About} />
                <Route path="/login" exact strict component={Login} />

            </Router>
        )
    }
}