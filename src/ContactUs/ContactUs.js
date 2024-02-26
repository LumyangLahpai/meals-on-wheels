import React, { Component } from 'react';
import './ContactUs.css';
import contact from '../img/Contact_Us.jpg';

class ContactUs extends Component {
    render() {
        return (
           
            <div class="container register-form">
                        <div class="form">
            
                            <div class="form-content">
                                <div class="row">
                                    <div class="col-md-6">
                                      Contact Us
                                      
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Your Name *" value=""/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Your Emails *" value=""/>
                                        </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Message *" value=""/>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <button type="button" class="btnSubmit">Submit</button>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default ContactUs;