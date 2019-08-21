import './style.scss'
import React from 'react'
import Controller from './controller'
import About from './../pages/about'
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

class Page extends Controller {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                <Route exact path='/dashboard' />
                <Route exact path='/about' component={About} />
            </Switch>
        )
    }
}

export default Page
