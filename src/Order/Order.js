import React, { Component } from 'react';
import './Order.css';
import Order from '../img/order.png';


class order extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">Order</h1>
                    <div className="container">
                    <img src={Order} alt="order"></img>
                    <h3>You can donate in Meal On Wheels for adult from $ 10 or more!</h3> 
                    <a href="orderdetail" class="btn btn-primary">Order</a>
                    </div>
            </div>

        )
    }
    
}

export default order;

