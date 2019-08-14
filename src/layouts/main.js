import Controller from './controller'
import './style.scss'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import About from '../pages/about';

class App extends Controller {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Route path="/about" exact strict component={About} />
            </Router>
        )
    }
}

export default App