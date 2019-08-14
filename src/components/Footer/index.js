import React from 'react';
import Controller from './controller';
import './style.scss';

class Footer extends Controller {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="footer">
            <div className="col-12 pt-2 pb-2 bg-purple text-center">
                <span className="text-white">React Tutorial Made With<i className="fas fa-heart ml-1 mr-1"></i>For Ekaapsd</span>
            </div>
        </div>
            
        )
    }
}

export default Footer;