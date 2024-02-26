import React, { Component } from 'react';
import './AboutUs.css';
import About from '../img/AboutUs.png';

class AboutUs extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">AboutUs</h1>
                    <div className="container">
                    <img src={About} alt="AboutUs"></img>
                       <h3>Meals on Wheels , is a 501(c)(3) association of home-delivered and congregate meal programs established to ensure every older person and individual with a disability in Texas is well nourished and has the social supports they need to age in place with dignity. The association provides education, advocacy and connection to create a unified voice for nutrition providers that improves the lives of older Texans and individuals with disabilities.</h3> 
                        
                    </div>
            </div>
        )
    }
}

export default AboutUs;