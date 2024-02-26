import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import Button from "react-bootstrap/Button";

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Meals On Wheels</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                        <NavLink to="/mealplan">Meal Plan</NavLink>        
                                    </li>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="/donate">Donate</NavLink>
                                        </li>
                                        
                                        <li>
                                        <NavLink to="/aboutus">ABOUT US</NavLink>        
                                    </li>
                                    <li>
                                        <NavLink to="/contactus">CONTACT US</NavLink>        
                                    </li>
                                    
                                        <li>
                                            <a onClick={this.props.onLogout}>LOGOUT</a>
                                        </li>
                                        
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                        <NavLink to="/mealplan">Meal Plan</NavLink>        
                                    </li>
                                        <li>
                                        <NavLink to="/donate">Donate</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/aboutus">ABOUT US</NavLink>        
                                        </li>
                                    <li>
                                        <NavLink to="/contactus">CONTACT US</NavLink>        
                                    </li>
                                    <li>
                                        <NavLink to="/signup">SIGNUP</NavLink>        
                                    </li>
                                    <li>
                                            <NavLink to="/login">LOGIN</NavLink>        
                                        </li>
                                </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;