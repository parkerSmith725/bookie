import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

import Header from './../Header/Header';

class LandingPage extends React.Component{
    render(){
        return (
            <div>
                <Header noBorder />
                <div className="hero-section">
                    <div className="container-fluid hero-container"> 
                        <div className="row hero-row align-items-center">
                            <div className="col-12 hero-col">
                                <h1 className="hero-header">
                                <span className="standout">Wake the</span> local music <span className="standout">connection.</span>
                                </h1>
                                <Link to='/signup'>
                                    <div className="hero-button">
                                        Get Started
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;