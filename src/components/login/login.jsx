import React, { Component } from 'react';
import "./login.css";
class Login extends Component {
    state = {}
    render() {
        return (
                <div className="login-body">
                    <div class="smartphone">
                        <div class="content">
                            <img src="/photos/loginInsta.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="login-content">
                        <div className="login-content-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt=""/>
                        </div>
                        <h1>👇Click Here👇</h1>
                        <div className="login-content-button">
                            <button onClick={this.props.login}><i class="fa fa-google-plus" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;log in with google+</button>
                        </div>
                    </div> 
                </div> 

                                    

                    // <div className="login"> 
                /* </div> */
        );
    }
}

export default Login;