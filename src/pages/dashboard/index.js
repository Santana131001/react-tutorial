import './style.scss'
import React from 'react';
import Controller from './controller';
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Page from '../../layouts/main';

class Dashboard extends Controller {
    render() {
        return (
            <div className="container-fluid pl-0 pr-0">
                <Header />
                <Page />
                <Footer />
            </div>
        )
    }
}

export default Dashboard
