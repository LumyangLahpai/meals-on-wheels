import React, { Component } from 'react';
import './Thank.css';
import Thank from '../img/thank.png';

class thank extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">Thank You</h1>
                    <div className="container">
                    <img src={Thank} alt="thank"></img>
                       
                    </div>
            </div>
        )
    }
}

export default thank;