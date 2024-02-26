import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">Meals On Wheels</h1>
                    <img src="https://eac-network.org/wp-content/uploads/2020/05/meals-on-wheels.jpg" alt="Paris" class="center"></img>
                    <div>
            <h2>Meals on Wheels is a program that delivers meals to individuals at home who are unable to purchase or prepare their own meals. The name is often used generically to refer to home-delivered meals programs, not all of which are actually named "Meals on Wheels". Many of the housebound recipients are the elderly, and many of the volunteers are also elderly but able-bodied and able to drive automobiles.</h2>
            </div>
                   
                    <div class="container">
    
<div class="card-container">
    <div class="custom-card">
        <div class="card-img-box">
        <img src="https://www.jeffgeerling.com/sites/default/files/blog-images/grandpa-charlie.jpg" />
            </div>
            
            
        <div class="card-content">
            <h2>Robin

<span>Age.65</span></h2>
            <p>
            Price is low. It's fast. The staff is friendly.
            </p>

            <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="custom-card">
        <div class="card-img-box">
            <img src="https://www.hierophantpublishing.com/wp-content/uploads/2016/06/grandmother.jpg" />
        </div>
        <div class="card-content">
            <h2>Ariel Lim<span>Age.70</span></h2>
            <p>
            
The time is right. The food is hot. The staff are nice.
            </p>

            <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="custom-card">
        <div class="card-img-box">
            <img src="https://img.freepik.com/free-photo/laughing-gray-haired-old-lady-blue-shirt-pointing-with-finger-upward_171337-8028.jpg?size=626&ext=jpg" />

        </div>
        <div class="card-content">
            <h2>Anany<span>Age.68</span></h2>
            <p>
Easy to get. Good food. Friendly service.
            </p>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}

export default Home;