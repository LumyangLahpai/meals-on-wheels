import React, { Component } from 'react';
import './Donate.css';
import Donate from '../img/donate.png';

class donate extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">Donate</h1>
                    <div className="container">
                    <img src={Donate} alt="donate"></img>
                       <h3>You can donate in Meal On Wheels for adult from $ 10 or more!</h3> 
                       <input type="text" class="form-control" placeholder="Your amount to donate *" value=""/>
                       <a href="thank" class="btn btn-primary">Submit</a>
                    </div>
            </div>
        )
    }
}

export default donate;